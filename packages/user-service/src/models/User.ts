import { v4 as uuidv4 } from 'uuid';

export interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}

export class User implements IUser{
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;


    constructor(email: string, password: string, firstName: string, lastName: string){
        this.id = uuidv4();
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}