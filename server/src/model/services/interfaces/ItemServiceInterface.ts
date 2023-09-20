import { Model } from "sequelize-typescript";

export interface ItemServiceInterface<T extends {}>{

    itemExists:(id:number) => Promise<boolean>

    update:(item:T)=>Promise<boolean>

    create:(item:T)=>Promise<T>

    // updateRange:(item:T[])=>Promise<boolean>

    // createRange:(item:T)=>Promise<boolean>

    // getItemById:(id:number) => Promise<T>// не bool

    // deleteItem:(id:number) => Promise<boolean>

    // getAllRecords:()=> Promise<T[]>
}