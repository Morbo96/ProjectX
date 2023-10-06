import { Folder } from "../../domain/entities/tasks/folders";
import { User } from "../../domain/entities/user/users";
import { UserPet } from "../../domain/entities/user/usersPets";

export interface UserServiceInterface{
    
    getByLogin:(login:string) => Promise<User| null>

    getUsersPets:(userId:number) => Promise<UserPet[]|null>

    getFolders:(userId:number) => Promise<Folder[]|null>

    changePassword:(id:number, newPassword:string) => Promise<boolean>

}