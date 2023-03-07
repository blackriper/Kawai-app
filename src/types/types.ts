//tipos de datos que recibimos de la base de datos
export interface Manga{
    _id: string;
    title:string;
    cover:string;
    description:string;
    type:string;
    genre:[string]
    rank:string;
    favorite:boolean;
    chapters:number;
}

export interface Anime{
  _id: string;
  title:string;
  cover:string;
  description:string;
  type:string;
  genre:[string]
  rank:string;
  favorite:boolean;
  chapters:number;
  sequel:[SPreq]
  prequels:[SPreq]
  
}

export interface SPreq{
  _id:string;
  title:string
}

//para redireccionar a la ruta Anime o Manga
export enum Name{
  ANIME='Anime',
  MANGA='Manga'  
}


export type Record= 'anime'|'manga';