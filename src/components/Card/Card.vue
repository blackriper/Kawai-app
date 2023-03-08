<template>
  <article class="header-card">
    <img 
       :src="dt.cover"
       alt="cover image"
       width="120"
       height="100" 
       class="card-image" />
    <div class="card-body">
      <h2 class="card-title">{{ dt.title }}</h2>
      <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
       <Rank :rank="dt.rank" />
        <blockquote>
          <p class="text-xs font-light text-justify text-black">
            {{ dt.description }}
          </p>
        </blockquote>
      </dl>
      <div>
        <router-link :to="{ name:lb, params: { id: dt._id } }"
          class="block text-slate-800 mt-3 hover:text-yellow-500"> Ver mas</router-link>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Name, SPreq } from '../../types';
import Rank from './components/Rank.vue';
interface Data {
    _id: string;
    title: string;
    cover: string;
    description: string;
    type: string;
    genre: [string]
    rank: string;
    favorite: boolean;
    chapters: number;
    sequel?: [SPreq];
    prequels?: [SPreq];
  }


defineProps<{ dt:Data, lb:Name}>()

</script>

<style scoped>

</style>