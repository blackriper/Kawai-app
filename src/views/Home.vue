<script setup lang="ts">
import { ref } from 'vue';
import FavanimesVue from '../components/home/Favanimes.vue';
import FavmangasVue from '../components/home/Favmangas.vue';
import FormAnime from '../components/home/FormAnime.vue';
import FormManga from '../components/home/FormManga.vue';


const favan= ref(true)
const favman=ref(false)
const entryAn= ref(false)
const entryMa=ref(false)

const  handlean=()=>{
   favman.value=false;
   favan.value=true
   entryAn.value=false
   entryMa.value=false
}
const handleman=()=>{
    favman.value=true;
    favan.value=false
    entryAn.value=false
    entryMa.value=false
}
const handleanime=()=>{
    favman.value=false;
    favan.value=false
    entryAn.value=true
    entryMa.value=false
}
const handlemanga=()=>{
    favman.value=false;
    favan.value=false;
    entryAn.value=false;
    entryMa.value=true;
}
</script>

<template>
   <div class="flex justify-center mt-9 gap-8" >
      <button class="navfavorite" @click="handlean">Favorite Animes</button>
      <button class="navfavorite" @click="handleman">Favorite Mangas</button>
      <button class="navfavorite" @click="handleanime">New Anime</button>
      <button class="navfavorite" @click="handlemanga">New Manga</button>
  </div>

  <FavanimesVue v-if="favan"/>
  <FavmangasVue v-if="favman"/>
  <FormAnime v-if="entryAn"/>
  <FormManga v-if="entryMa"/>
</template>

<style>

</style>