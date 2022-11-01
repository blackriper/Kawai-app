<template>
     <SearchVue text="Search manga ..." v-model="search"/>
     <div class="grid  grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="data">
      <Mangaitem v-for="manga in mangas" :key="manga._id" :manga="manga"/>
     </div>
   </template>

<script setup lang="ts">
import { useQuery } from 'villus';
import { ListItems, Manga} from '../types/interfaces';
import Mangaitem from '../components/cards/Mangaitem.vue';
import SearchVue from '../components/search/Search.vue';
import { GETMANGAS } from '../types/querys';
import { computed, ref } from 'vue';

 const search=ref<string>("")
 const {data}=useQuery<ListItems<Manga>>({
     query:GETMANGAS
 })

 const mangas= computed(()=>{
     if(search.value){
         return data.value?.Items.filter((manga)=> manga.title.toLowerCase().includes(search.value.toLowerCase()))
     }else{
        return data.value?.Items
     }
 })



</script>

<style scoped>

</style>