import {Request} from 'express'
import {LoginUserRequest, RegisterUserRequest} from "../../models/UserModel";
import ServerError, {ServerErrorCode} from "../../ServerError";

class AuthValidator {
    validateRegister(request: Request): RegisterUserRequest | ServerError {
        const first_name = request.body.first_name
        const last_name = request.body.last_name
        const username = request.body.username
        const email = request.body.email
        const password = request.body.password

        // first name rules
        if (typeof first_name !== 'string' || first_name.length == 0) return { message: "Name must be string" }

        // username rules
        if (typeof username !== 'string' || username.length < 6 || username.length > 20) return { message: "Username must be 6 and 20 characters long" }
        const usernameRegex = /^[a-z0-9._]+$/;
        if (!usernameRegex.test(username)) return { message: 'Username can only contain a-z, 0-9, _, and .' }

        // email rules
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof email !== 'string' || !emailRegex.test(email)) return { message: "Invalid email format" }

        // password rules
        if (typeof password !== 'string' || password.length < 8) return { message: "Password must be at least 8 characters long" }
        const hasUpperCase = /[A-Z]/.test(password);
        if (!hasUpperCase) return { message: 'Password must contain at least one uppercase letter' }
        const hasLowerCase = /[a-z]/.test(password);
        if (!hasLowerCase) return { message: 'Password must contain at least one lowercase letter' }
        const hasDigit = /\d/.test(password);
        if (!hasDigit) return { message: 'Password must contain at least one digit' }
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        if (!hasSpecialChar) return { message: 'Password must contain at least one special character' }

        return {
            email: email,
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password
        }
    }

    validateLogin(request: Request): LoginUserRequest | ServerError {
        const username = request.body.username
        const password = request.body.password

        if (typeof username !== 'string' || username.length < 6 || username.length > 20) return { message: "Username must be 6 and 20 characters long" }
        if (typeof password !== 'string' || password.length < 8) return { message: "Password must be at least 8 characters long" }

        return {
            password: password,
            username: username
        }
    }
}


const instance = new AuthValidator();
export default instance
