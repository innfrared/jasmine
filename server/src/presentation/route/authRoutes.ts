import express from 'express'
import {Request, Response} from 'express'
import authController from '../controller/authController'
import authValidator from "../validator/authValidator"
import ServerError, {isServerError, ServerErrorCode} from "../../ServerError"
import {LoginUserRequest, RegisterUserRequest} from "../../models/UserModel"

const router = express.Router()

async function makeRegisterCall(
    req: Request,
    res: Response,
    validator: (req: Request) => RegisterUserRequest | ServerError,
    method: (request: RegisterUserRequest) => Promise<string | ServerError>,
    successCode: number = 200
) {
    try {
        const params = await validator(req)

        if (isServerError(params)) {
            res.status(500).json(params.message)
            return
        }

        const result = await method(params)
        if (isServerError(result)) {
            res.status(500).json(result.message)
        } else {
            res.status(successCode).json(result)
        }
    } catch (error: unknown) {
        res.status(500).json('Internal server error')
    }
}

router.post('/register', (req, res) =>
    makeRegisterCall(req, res, authValidator.validateRegister, authController.register)
)

// Same pattern for login
async function makeLoginCall(
    req: Request,
    res: Response,
    validator: (req: Request) => LoginUserRequest | ServerError,
    method: (request: LoginUserRequest) => Promise<string | ServerError>,
    successCode: number = 200
) {
    try {
        const params = await validator(req)

        if (isServerError(params)) {
            res.status(500).json(params.message)
            return;
        }

        const result = await authController.login(params)
        if (isServerError(result)) {
            res.status(500).json(result.message)
        } else {
            res.status(successCode).json(result)
        }
    } catch (error: unknown) {
        res.status(500).json('Internal server error')
    }
}

router.post('/login', (req, res) =>
    makeLoginCall(req, res, authValidator.validateLogin, authController.login)
)

export default router