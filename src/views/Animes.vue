<template>
   <Searchvue text="Search anime ..." v-model="search"/>
   <div class="grid grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="animes">
    <Animeitem v-for="anime in animes" :key="anime._id" :anime="anime"/>
   </div>
</template>

<script lang="ts">
import { useQuery } from 'villus';
import {computed, defineComponent,ref } from 'vue';
import Animeitem from '../components/cards/Animeitem.vue';
import Searchvue from '../components/search/Search.vue';
import {AnimesList } from '../types/interfaces';
import { GETANIMES } from '../types/querys';


export default defineComponent({
   
    setup() {
         const search=ref<string>("")      
         const { data } = useQuery<AnimesList>({
            query: GETANIMES
        });
        
           const animes= computed(()=>{
             if(search.value){
                 return data.value?.Animes.filter((anime)=>anime.title.toLowerCase().includes(search.value.toLowerCase()))
             }else{
                 return data.value?.Animes
             }
         })
        
              
        return {animes,search};
    },
    components: {
      Animeitem,
      Searchvue
     }
   
})
</script>

<style scoped>

</style>