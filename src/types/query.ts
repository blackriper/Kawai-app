//querys de grapql que se utlizan en varios modulos de la aplicacion

export const GETMANGA: string = `
query getManga($_id:ID!){
  getManga(id:$_id){
    _id
    title
    cover
    description
    type
    genre
    rank
    favorite
    chapters
  }
}
`

export const GETANIME: string = `
query getAnime($_id:ID!){
  getAnime(id:$_id){
    _id
    title
    cover
    description
    type
    rank
    genre
    favorite
    chapters
    sequel{
      _id
      title
    }
    prequels{
      _id
      title
    }
  }
}
`

export const ADDFAVORITE: string = `
mutation addFavorite($_id:ID!,$class:Classification!){
  addFavorite(id:$_id,classi:$class)
} `

export const DELFAVORITE: string = `
mutation deleteFavorite($_id:ID!,$class:Classification){
  deleteFavorite(id:$_id,classi:$class)
}
`

export const NEWMANGA: string = ` 
mutation newManga($manga:NewMangaInput!){
  newManga(manga:$manga)
}`

export const NEWANIME:string = ` 
mutation newAnime($anime:NewAnimeInput!){
  newAnime(anime:$anime)
}`


export const AUTOANIMES:string=`
{
  Animes{
    _id
    title
  
   
  }
}
`