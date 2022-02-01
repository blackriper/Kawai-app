<template>
   <Searchvue text="Search anime ..." v-model="search"/>
   <div class="grid grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="animes">
    <FavAnimeitem v-for="anime in animes" :key="anime._id" :anime="anime"/>
   </div>
</template>

<script lang="ts">
import { useQuery } from 'villus';
import {computed, defineComponent,ref } from 'vue';
import FavAnimeitem from '../cards/FavAnimeitem.vue';
import Searchvue from '../search/Search.vue';
import { favAnime } from '../../types/interfaces';
import { FAVORITESANINE } from '../../types/querys';


export default defineComponent({
   
    setup() {
         const search=ref<string>("")      
         const { data } = useQuery<favAnime>({
            query: FAVORITESANINE
        });
        
           const animes= computed(()=>{
             if(search.value){
                 return data.value?.Favorites.filter((anime)=>anime.title.toLowerCase().includes(search.value.toLowerCase()))
             }else{
                 return data.value?.Favorites
             }
         })
        
              
        return {animes,search};
    },
    components: {
      FavAnimeitem,
      Searchvue
     }
   
})
</script>

<style scoped>

</style>