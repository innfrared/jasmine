import {LoginUserRequest, RegisterUserRequest} from "../../models/UserModel";
import authRepository, {AuthRepository} from "../../repository/authRepository";
import ServerError, {ServerErrorCode} from "../../ServerError";

class AuthController {
    private readonly authRepository: AuthRepository

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository
    }

    async register(request: RegisterUserRequest): Promise<string | ServerError> {
        try {
            return this.authRepository.registerUser(request)
        } catch (error: unknown) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }

    async login(request: LoginUserRequest): Promise<string | ServerError> {
        try {
            return this.authRepository.loginUser(request)
        } catch (error: unknown) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }

    async deleteUser(userId: string): Promise<string | ServerError> {
        try {
            return this.authRepository.deleteUser(userId);
        } catch (error: unknown) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }
}


const instance = new AuthController(authRepository)
export default instance
