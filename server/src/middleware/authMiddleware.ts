import { Request, Response, NextFunction } from 'express'
import authRepository, {AuthRepository} from "../repository/authRepository"
import ServerError, {isServerError} from "../ServerError";

class AuthMiddleware {
    private readonly authRepository: AuthRepository

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository
    }

    async authenticateToken(req: Request, res: Response, next: NextFunction) {
        try {
            const authHeader = req.header('Authorization')
            const token = typeof authHeader === 'string' ? authHeader.split(' ')[1] : undefined
            if (!token) return res.status(403).json({error: 'Token missing, access denied'})
            const userId: number | ServerError = await authRepository.getIdFromToken(token)
            console.log(userId)
            if (!userId || isServerError(userId)) return res.status(403).json({ error: `Invalid token, access denied ${typeof userId}` })
            req.body.userId = userId
            next()
        } catch (err) {
            console.log(`Error: ${err}`)
            return res.status(403).json({error: `Invalid token, access denied`})
        }
    }
}

const instance = new AuthMiddleware(authRepository)
export default instance