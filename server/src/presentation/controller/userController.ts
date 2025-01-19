import {Request, Response} from 'express'
import userRepository, {UserRepository} from "../../repository/userRepository";
import {User} from "../../models/UserModel";
import ServerError, {ServerErrorCode} from "../../ServerError";

class UserController {
    private readonly userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async currentUser(req: Request, res: Response): Promise<User | ServerError> {
        const id = req.body.userId;
        try {
            const user = await userRepository.getUserFromID(id);
            res.status(201).json(user);
            return user;
        } catch (error: unknown) {
            return { message: ServerErrorCode.UNKNOWN }
        }
    }
}

const instance = new UserController(userRepository)
export default instance