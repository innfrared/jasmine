import userService, {UserService} from '../service/userService';
import {User} from "../models/UserModel";
import ServerError, {ServerErrorCode} from "../ServerError";

export interface UserRepository {
    getUserFromID(id: string) : Promise<User | ServerError>
}

class UserRepositoryImpl implements UserRepository {
    private readonly userService: UserService

    constructor(authService: UserService) {
        this.userService = authService
    }

    public async getUserFromID(id: string): Promise<User | ServerError> {
        try {
            return await this.userService.getUserByID(id)
        } catch (e) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }
}

const instance = new UserRepositoryImpl(userService)
export default instance