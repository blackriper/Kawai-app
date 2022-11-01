<template>
   <Searchvue text="Search anime ..." v-model="search"/>
   <div class="grid grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="mangas">
    <FavMangaitem v-for="manga in mangas" :key="manga._id" :manga="manga"/>
   </div>
</template>

<script lang="ts">
import { useQuery } from 'villus';
import {computed, defineComponent,ref } from 'vue';
import FavMangaitem from '../cards/FavMangaitem.vue';
import Searchvue from '../search/Search.vue';
import { Fav, Manga } from '../../types/interfaces';
import { FAVORITESMANGA } from '../../types/querys';


export default defineComponent({
   
    setup() {
         const search=ref<string>("")      
         const { data } = useQuery<Fav<Manga>>({
            query: FAVORITESMANGA
        });
        
           const mangas= computed(()=>{
             if(search.value){
                 return data.value?.Favorites.filter((manga)=>manga.title.toLowerCase().includes(search.value.toLowerCase()))
             }else{
                 return data.value?.Favorites
             }
         })
        
              
        return {mangas,search};
    },
    components: {
      FavMangaitem,
      Searchvue
     }
   
})
</script>