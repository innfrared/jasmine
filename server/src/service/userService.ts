import {Pool, PoolClient} from 'pg'
import {User} from '../models/UserModel'
import {pool} from "./dbPool"
import {UserMapper} from "../mappers";
import ServerError, {ServerErrorCode} from "../ServerError";

export interface UserService {
    getUserByID(
        id: string
    ) : Promise<User | ServerError>
}

class UserServiceImpl implements UserService {
    pool: Pool;
    userMapper: UserMapper

    constructor(pool: Pool, userMapper: UserMapper) {
        this.pool = pool
        this.userMapper = userMapper
    }

    async getUserByID(id: string): Promise<User | ServerError> {
        let client: PoolClient | null = null

        try {
            client = await pool.connect()
            const result = await client.query(
                'SELECT * FROM users WHERE id = $1',
                [id]
            )

            if (result.rows.length === 0) return { message: ServerErrorCode.USER_NOT_FOUND }

            return this.userMapper.mapUserFromDb(result.rows[0])
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }  finally {
            client?.release()
        }
    };
}

const instance = new UserServiceImpl(pool, new UserMapper())
export default instance