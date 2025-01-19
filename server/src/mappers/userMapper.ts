import {User} from '../models/UserModel';

export class UserMapper {

    mapUserFromDb(row: any): User {
        return {
            id: row.id,
            username: row.username,
            password_hash: row.password_hash,
            email: row.email,
            first_name: row.first_name,
            last_name: row.last_name,
        };
    }

}