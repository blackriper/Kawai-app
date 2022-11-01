
export interface ListItems<T> {
    Items: T[];
}

export interface getAnime{
    getAnime:Anime
}

export interface conManga{
    getManga:Manga
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

export interface Manga extends Item{
   
}

export interface Anime extends Item{
    
}

export interface Entry{
    title:string,
    cover:string,
    description:string,
    genre:string,
    rank:number
}

 