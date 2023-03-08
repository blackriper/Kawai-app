import { useQuery } from "villus";
import { computed, ref } from "vue";
import { Anime } from "../../types";

interface ListAnimes{
  Animes:[Anime]
}

interface GenreAnimes{
  Genreanime:[Anime]
}

const GETANIMES:string=`
{
  Animes{
    _id
    title
    cover
    description
    type
    genre
    rank
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

const GETGENRE:string=`
query genre($genre:String!){
  Genreanime(genre:$genre){
     _id
     title
     cover
     description
     rank
     genre
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
 }`

export function useAnime(genre:string) {
  if(genre!=""){
    return getGenanimes(genre)
   }else{
    return getAnimes()
   }
  
 
}

function getAnimes(){
  const search = ref<string>("")
  const { data } = useQuery<ListAnimes>({
    query: GETANIMES
  });

  const animes = computed(() => {
    if (search.value) {
      return data.value?.Animes.filter((anime) => anime.title.toLowerCase().includes(search.value.toLowerCase()))
    } else {
      return data.value?.Animes
    }
  })


  return { animes, search };
}


function getGenanimes(genre: string){
  const search = ref<string>("")
  const { data } = useQuery<GenreAnimes>({
    query: GETGENRE,
    variables:{
      genre
    }
  });

  const animes = computed(() => {
    if (search.value) {
      return data.value?.Genreanime.filter((anime) => anime.title.toLowerCase().includes(search.value.toLowerCase()))
    } else {
      return data.value?.Genreanime
    }
  })


  return { animes, search };

}