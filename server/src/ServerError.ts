// export enum ServerErrorCode {
//     USER_NOT_FOUND,
//     USERNAME_TAKEN,
//     EMAIL_TAKEN,
//     WRONG_PASSWORD,
//     UNKNOWN
// }
//
// export interface CustomError {
//     readonly message: string
// }
//
// export type ServerError = ServerErrorCode | CustomError

export enum ServerErrorCode {
    USER_NOT_FOUND,
    USERNAME_TAKEN,
    EMAIL_TAKEN,
    WRONG_PASSWORD,
    UNKNOWN
}

export default interface ServerError {
    readonly message: string | ServerErrorCode
}

export function isServerError(obj: any): obj is ServerError {
    return typeof obj === 'object' && obj !== null && 'message' in obj && ( typeof obj.message === 'string' || typeof obj.message === "number")
}