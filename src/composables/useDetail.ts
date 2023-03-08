import { useQuery } from "villus";
import { Anime, GETANIME, GETMANGA, Manga } from "../types";

interface Result{
  getManga?:Manga
  getAnime?:Anime
}

type cl= string |string[];

export function useDetail(id:cl,type:string){

   const { data } = useQuery<Result>({
    query: getCursor(type),
    variables: { _id:id }
  })
   
   return{data}
}

const getCursor=(type:string)=>{
   if(type === 'anime'){
    return GETANIME
   }else if(type === 'manga'){
    return GETMANGA
   }
}