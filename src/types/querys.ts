export const GETANIMES: string = `
{
  Animes{
    _id
    title
    cover
    rank
    description
  }
 }
`;

export const GETMANGAS:string=`
{
  Mangas{
   _id
   title
   cover
   rank
   description
  }
 }
`;

export const GETMANGA:string=`
  query getManga($id:ID!){
    getManga(id:$id){
      _id
      title
      cover
      description
      rank
      genre
      favorite
    }
  }    
`;

export const GETANIME:string=`
  query getAnime($id:ID!){
    getAnime(id:$id){
      _id
      title
      cover
      description
      rank
      genre
      favorite
    }
  }    
`;

export const ADDFAVORITE:string=`
  mutation addFavorite($id:ID!,$class:Classification!){
    addFavorite(id:$id,classi:$class)
  }
`;

export const FAVORITESANINE:string=`
{
  Favorites(classi:ANIME){
    _id
    title
    cover
    rank
    favorite
  }
}
`;
export const FAVORITESMANGA:string=`
{
  Favorites(classi:MANGA){
    _id
    title
    cover
    rank
    favorite
  }
}
`;

export const DELFAVORITE:string=`
  mutation deleteFavorite($id:ID!,$class:Classification!){
    deleteFavorite(id:$id,classi:$class)
  }
`;

export const NEWMANGA:string=`
  mutation newManga($manga:NewMangaInput!){
    newManga(manga:$manga)
  }  
`

export const NEWANIME:string=`
  mutation newAnime($anime:NewAnimeInput!){
    newAnime(anime:$anime)
  }  
`