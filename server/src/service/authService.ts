import {Pool, PoolClient} from 'pg'
import {RegisterUserRequest, User} from '../models/UserModel'
import bcrypt from "bcrypt"
import jwt, {JwtPayload} from "jsonwebtoken"
import {pool} from "./dbPool"
import {UserMapper} from "../mappers"
import ServerError, {ServerErrorCode} from "../ServerError";

export interface AuthService {
    createUser(
        request: RegisterUserRequest
    ): Promise<string | ServerError>

    deleteUser(
        id: string
    ): Promise<string | ServerError>

    getTokenByCredentials(
        request: RegisterUserRequest
    ): Promise<string | ServerError>

    getUserIdByToken(
        token: string
    ) : number | ServerError

    getUserByToken(
        token: string
    ) : User | ServerError

    usernameExists(
        username: string
    ) : Promise<boolean | ServerError>

    emailExists(
        email: string
    ) : Promise<boolean | ServerError>
}

class AuthServiceImpl implements AuthService {
    pool: Pool
    userMapper: UserMapper
    constructor(pool: Pool, userMapper: UserMapper) {
        this.pool = pool
        this.userMapper = userMapper
    }

    async createUser(request: RegisterUserRequest): Promise<string | ServerError> {
        let client: PoolClient | null = null
        try {
            client = await pool.connect()
            const hashedPassword = await bcrypt.hash(request.password, 10)
            const [ usernameExists, emailExists ] = await Promise.all([
                this.usernameExists(request.username),
                this.emailExists(request.email)
            ])

            if (usernameExists) return { message: ServerErrorCode.USERNAME_TAKEN }
            if (emailExists) return { message: ServerErrorCode.EMAIL_TAKEN }

            const result = await client.query(
                `INSERT INTO users (username, password_hash, email, first_name, last_name) 
                VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [ request.username, hashedPassword, request.email, request.first_name, request.last_name ]
            )

            const userMapped = this.userMapper.mapUserFromDb(result.rows[0])
            const payload = { userId: userMapped.id }
            return jwt.sign(payload, this.jwtSecret, {expiresIn: '1h'})
        } catch (error) {
            return { message: ServerErrorCode.UNKNOWN }
        } finally {
            client?.release()
        }
    }

    async deleteUser(id: string): Promise<string | ServerError> {
        let client: PoolClient | null = null

        try {
            client = await pool.connect()
            const result = await client.query(
                'SELECT * FROM users WHERE id = $1',
                [id]
            )

            if (result.rows.length === 0) return { message: ServerErrorCode.USER_NOT_FOUND }

            const deletedUser = await client.query(
                'DELETE FROM users WHERE id = $1 RETURNING *',
                [id]);

            const user = deletedUser.rows[0]
            console.log(`User deleted: ${user}`)
            return user.userId;
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }  finally {
            client?.release()
        }
    }
    async getTokenByCredentials(
        request: RegisterUserRequest
    ): Promise<string | ServerError> {
        let client: PoolClient | null = null
        try {
            client = await pool.connect()
            const result = await client.query(
                'SELECT * FROM users WHERE username = $1',
                [request.username]
            )

            if (result.rows.length === 0) return { message: ServerErrorCode.USER_NOT_FOUND }

            const user = result.rows[0]

            if (!await bcrypt.compare(request.password, user.password_hash)) return { message: ServerErrorCode.WRONG_PASSWORD }

            const userMapped = this.userMapper.mapUserFromDb(user)
            const payload = {userId: userMapped.id}
            return jwt.sign(payload, this.jwtSecret, {expiresIn: '1h'})
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }  finally {
            client?.release()
        }
    }

    getUserIdByToken(token: string): number | ServerError {
        try {
            const decoded = jwt.verify(token, this.jwtSecret) as JwtPayload
            return decoded['userId'] as number
        } catch (error) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }

    getUserByToken(token: string): User | ServerError {
        try {
            const decoded = jwt.verify(token, this.jwtSecret) as JwtPayload
            return decoded["user"] as User
        } catch (error) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }

    async usernameExists(username: string): Promise<boolean | ServerError> {
        let client: PoolClient | null = null
        try {
            client = await pool.connect()
            const existingUserCheck = await client.query(
                `SELECT * FROM users WHERE username = $1`,
                [username]
            )
            return existingUserCheck.rows.length > 0
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        } finally {
            client?.release()
        }
    }

    async emailExists(email: string): Promise<boolean | ServerError> {
        let client: PoolClient | null = null
        try {
            client = await pool.connect()
            const existingUserCheck = await client.query(
                `SELECT * FROM users WHERE email = $1`,
                [email]
            )
            return existingUserCheck.rows.length > 0
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        } finally {
            client?.release()
        }
    }

    private get jwtSecret(): string {
        return process.env.JWT_SECRET as string
    }
}

const instance = new AuthServiceImpl(pool, new UserMapper())
export default instance