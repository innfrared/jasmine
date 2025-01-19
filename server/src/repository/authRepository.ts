import authService, {AuthService} from '../service/authService';
import {LoginUserRequest, RegisterUserRequest} from "../models/UserModel";
import ServerError, {ServerErrorCode} from "../ServerError";

export interface AuthRepository {
    registerUser(
        request: RegisterUserRequest
    ) : Promise<string | ServerError>
    loginUser(
        request: LoginUserRequest
    ) : Promise<string | ServerError>
    deleteUser(
        id: string,
    ) : Promise<string | ServerError>
    getIdFromToken(
        token: string
    ) : Promise<number | ServerError>
}

class AuthRepositoryImpl implements AuthRepository {
    private readonly authService: AuthService

    constructor(authService: AuthService) {
        this.authService = authService
    }

    public async registerUser(request: RegisterUserRequest): Promise<string | ServerError> {
        try {
            return this.authService.createUser(request);
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }

    public async loginUser(request: RegisterUserRequest): Promise<string | ServerError> {
        try {
            return this.authService.getTokenByCredentials(request);
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }

    public async deleteUser(id: string): Promise<string | ServerError> {
        try {
            return this.authService.deleteUser(id);
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }

    public async getIdFromToken(token: string): Promise<number | ServerError> {
        try {
            return this.authService.getUserIdByToken(token)
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }
}

const instance = new AuthRepositoryImpl(authService)
export default instance