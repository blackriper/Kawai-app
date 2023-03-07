<template>
   <Search text="Search anime ..." v-model="search"/>
   <div class="grid grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="animes">
    <Card v-for="anime in animes" :key="anime._id" :dt="anime" :lb="Name.ANIME"/>
   </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Card from '../components/Card/Card.vue';
import Search from '../components/search/Search.vue';
import { Name } from '../types';
import { useAnime } from './composables/useAnime';

const route=useRoute();
const{genre}=route.params;
//nullish operator
const gen=genre??""

const {animes,search}= useAnime(Array.isArray(gen)?"":gen.toString())


</script>

