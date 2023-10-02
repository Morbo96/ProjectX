import { User } from "../../domain/entities/users";
import { UserPet } from "../../domain/entities/usersPets";

export interface UserServiceInterface{
    
    getByLogin:(login:string) => Promise<User| null>

    getUsersPets:(userId:number) => Promise<UserPet[]|null>

}