<template>
   <h1 class="text-center pt-4 font-extrabold text-cyan-800">Mangas Favoritos</h1> 
   <div class="grid grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="data">
    <FavCard v-for="manga in data.Favsmanga" :key="manga._id" :data="manga" :lb="Name.MANGA"/>
   </div>
</template>

<script lang="ts" setup>
import { useQuery } from 'villus';
import FavCard from '../../components/Card/FavCard.vue';
import { Manga, Name } from '../../types';


interface FavManga{
    Favsmanga:[Manga]
}

const FAVMANGA:string=`
{
  Favsmanga{
    _id
    title
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
     
const { data } = useQuery<FavManga>({
       query: FAVMANGA
 });
       
  
   

</script>