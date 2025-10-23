"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerError = exports.ServerErrorCode = void 0;
var ServerErrorCode;
(function (ServerErrorCode) {
    ServerErrorCode[ServerErrorCode["USER_NOT_FOUND"] = 0] = "USER_NOT_FOUND";
    ServerErrorCode[ServerErrorCode["USERNAME_TAKEN"] = 1] = "USERNAME_TAKEN";
    ServerErrorCode[ServerErrorCode["EMAIL_TAKEN"] = 2] = "EMAIL_TAKEN";
    ServerErrorCode[ServerErrorCode["WRONG_PASSWORD"] = 3] = "WRONG_PASSWORD";
    ServerErrorCode[ServerErrorCode["UNKNOWN"] = 4] = "UNKNOWN";
})(ServerErrorCode = exports.ServerErrorCode || (exports.ServerErrorCode = {}));
function isServerError(obj) {
    return typeof obj === 'object' && obj !== null && 'message' in obj && (typeof obj.message === 'string' || typeof obj.message === "number");
}
exports.isServerError = isServerError;
