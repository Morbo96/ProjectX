
export interface CRUDServiceInterface<T>{

    itemExists:(id:number) => Promise<boolean>

    getItemById:(id:number) => Promise<T| null>

    update:(item:T)=>Promise<T | null>

    create:(item:T)=>Promise<T | null>

    getAll:()=>Promise<T[] | null>

    deleteItem:(id:number) => Promise<boolean>

    // updateRange:(item:T[])=>Promise<boolean>

    // createRange:(item:T)=>Promise<boolean>

    

    

}