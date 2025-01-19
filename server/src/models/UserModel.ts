export interface User {
    readonly id?: number;
    readonly username?: string;
    readonly password_hash?: string;
    readonly email?: string;
    readonly first_name?: string;
    readonly last_name?: string;
}

export interface RegisterUserRequest {
    readonly email: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly username: string;
    readonly password: string;
}

export interface LoginUserRequest {
    readonly password: string;
    readonly username: string;
}
