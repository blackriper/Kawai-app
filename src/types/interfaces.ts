
export interface ListItems<T> {
    Items: T[];
}

export interface getItem<T>{
    getItem:T
}


export interface Fav<T>{
    Favorites:T[]
}

export interface Item{
    _id:string,
    title:string,
    cover:string,
    description:string,
    genre?:string,
    rank:string,
    favorite?:boolean
}

export type Manga=Item;
   
export type Anime=Item;
    


export interface Entry{
    title:string,
    cover:string,
    description:string,
    genre:string,
    rank:number
}

 