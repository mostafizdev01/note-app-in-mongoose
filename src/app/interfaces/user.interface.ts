// export interface IAddress {
//     city: string,
//     street: string,
//     zip: number,
// }
export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: 'user' | 'admin'
}