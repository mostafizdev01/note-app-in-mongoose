// export interface IAddress {
//     city: string,
//     street: string,
//     zip: number,

import { Model } from "mongoose"

// }
export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: 'user' | 'admin'
}

export interface UserIntenceMethods {
    hashPassword(password: string): string
}

export interface UserStaticMethods extends Model<IUser> {
    hashPassword(password: string): string
}