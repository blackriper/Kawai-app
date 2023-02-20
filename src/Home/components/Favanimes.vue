<template>
   <h1 class="text-center pt-4 font-extrabold text-green-500">Animes Favoritos</h1> 
   <div class="grid grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="data">
    <FavCard v-for="anime in data?.Favsanime" :key="anime._id" :data="anime" :lb="Name.ANIME"/>
   </div>
</template>

<script lang="ts" setup>
import { useQuery } from 'villus';
import FavCard from '../../components/Card/FavCard.vue';
import { Anime,Name } from '../../types';


interface FavAnime{
    Favsanime:[Anime]
}
const FAVANIME:string=`
{
  Favsanime{
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

const { data } = useQuery<FavAnime>({
    query: FAVANIME
});



</script>

<style scoped>

</style>