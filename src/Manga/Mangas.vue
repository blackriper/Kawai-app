<template>
     <Search text="Search manga ..." v-model="search"/>
     <div class="grid  grid-cols-1 p-4 lg:grid-cols-3 gap-4" v-if="mangas">
      <Card v-for="manga in mangas" :key="manga._id" :dt="manga" :lb="Name.MANGA" />
     </div>
   </template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Card from '../components/Card/Card.vue';
import Search from '../components/Search/Search.vue';
import {Name } from '../types';
import { useGetmanga } from './composables/useManga';

const route=useRoute();
const{genre}=route.params;
//nullish operator
const gen=genre??""

const{search,mangas}=useGetmanga(Array.isArray(gen)?"":gen.toString())

</script>

<style scoped>

</style>