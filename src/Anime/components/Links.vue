<template>
  <h3 class="font-bold text-3xl my-4 mr-6" v-if="data?.length">{{ title }}</h3>
  <section v-for="seq in data " :key="seq._id">
    <a :href="'/anime/' + seq._id" class="block font-bold text-slate-800 mt-3 hover:text-purple-700">{{ seq.title }}</a>
  </section>
</template>

<script setup lang="ts">
import { SPreq } from '../../types';

 defineProps<{data:SPreq[],title:string}>()

</script>

<style scoped>

</style>