<template>
  <article class="header-card">
    <img 
      :src="data.cover" 
      alt="cover image"
      width="120"
      height="100"
      class="card-image" />
    <div class="card-body">
      <h2 class="card-title">{{ data.title }}</h2>
      <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
       <Rank :rank="data.rank" />
        <div class="mt-5 flex justify-center">
          <button class="delfavorite" @click="delfavorite">Delete favorite</button>
        </div>
      </dl>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useMutation } from 'villus';
import {DELFAVORITE, Name, SPreq } from '../../types';
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


const props = defineProps<{ data: Data ,lb:Name}>();
const {_id,title}=props.data;
//add favoritr
const { execute } = useMutation(DELFAVORITE);
const variables = {
  _id: _id,
  class: props.lb.toUpperCase()
}
const delfavorite = () => {
  if (window.confirm(`Do you delete ${title} the favorite list?`)) {
    execute(variables)
    alert(`${title} delete favorites`)
  }
}


</script>
