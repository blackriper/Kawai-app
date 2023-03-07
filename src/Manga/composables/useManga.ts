import { useQuery } from 'villus';
import { computed, ref } from 'vue';
import { Manga } from '../../types';

interface ListMangas {
  Mangas: [Manga];
}

interface GenreMangas {
  Genremanga:[Manga];
}


export function useGetmanga(genre: string){
 if(genre!=""){
  return getGenmangas(genre)
 }else{
  return getMangas()
 }
}


function getMangas(){
  const search = ref<string>("")
  const { data } = useQuery<ListMangas>({
    query: `
    {
      Mangas{
        _id
        title
        cover
        description
        genre
        rank
        favorite
        chapters
      }
    }
    `
  })

  const mangas = computed(() => {
    if (search.value) {
      return data.value?.Mangas.filter((manga) => manga.title.toLowerCase().includes(search.value.toLowerCase()))
    } else {
      return data.value?.Mangas
    }
  })

  return{mangas,search}


}

//cargar mangas por generp
function getGenmangas(genre: string){
  const search = ref<string>("")
  const { data } = useQuery<GenreMangas>({
    query: `
    query genre($genre:String!){
      Genremanga(genre:$genre){
         _id
         title
         cover
         description
         rank
         genre
         chapters
       }
     }
    `,
    variables:{
      genre
    }
  })

  const mangas = computed(() => {
    if (search.value) {
      return data.value?.Genremanga.filter((manga) => manga.title.toLowerCase().includes(search.value.toLowerCase()))
    } else {
      return data.value?.Genremanga
    }
  })

  return{mangas,search}


}