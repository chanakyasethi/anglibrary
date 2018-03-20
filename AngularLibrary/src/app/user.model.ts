import{RequestedBooks} from './requestedbooks.model'
import {IssuedBooks} from './issuedbooks.model'
export class User {
    _id?:string;      
    name:string;
    dob:string;
    gender:string;
    phone:string;
    username: string;
    password: string;
    booksissued: IssuedBooks[]
}
