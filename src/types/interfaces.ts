

export interface MangasList {
    Mangas: Manga[];
}

export interface AnimesList{
    Animes: Anime[]
}

export interface getAnime{
    getAnime:Anime
}

export interface conManga{
    getManga:Manga
}

export interface favAnime{
    Favorites:Anime[]
}

export interface favManga{
    Favorites:Manga[]
}

export interface Manga{
    _id:string,
    title:string,
    cover:string,
    description:string,
    genre?:string,
    rank:string,
    favorite?:boolean
}

export interface Anime{
    _id:string,
    title:string,
    cover:string,
    description:string,
    genre?:string,
    rank:string,
    favorite?:boolean
}

export interface Entry{
    title:string,
    cover:string,
    description:string,
    genre:string,
    rank:number
}

 