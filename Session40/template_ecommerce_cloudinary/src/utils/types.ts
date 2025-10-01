export type Category = {
    id: number, 
    name: string 

}
export type Product = {
    id?: number, 
    name: string , 
    image : string , 
    price: number,
    status: string ,
    cateforyId: number|string
}