<template>
    <div class="grid grid-row-1 justify-items-center">
        <h1 class="font-bold text-center text-xl text-purple-500 mt-10">{{ title }}</h1>
        <form class="w-4/5 sm:w-1/4 " @submit.prevent="handlesubmit">
            <input 
                type="text"
                placeholder="Title"
                class="entry"
                v-model="newentry.title"
                required
            />
            <input
                type="url"
                placeholder="Cover image"
                class="entry"
                v-model="newentry.cover"
                required
            />
            <input
                type="number"
                step=".01"
                placeholder="Rank"
                class="entry"
                v-model="newentry.rank"
                required
            />

            <input
                type="text"
                placeholder="Romance,Comedy,etc.."
                class="entry"
                v-model="newentry.genre"
                required
            />
            <input
                type="number"
                step=".01"
                placeholder="Chapters"
                class="entry"
                v-model="newentry.chapters"
                required
            />
            <SelectData 
                v-model="preq" 
                text="seleciona las precuelas"
                v-if="type==='anime'" />

            <SelectData 
                v-model="seq" 
                text="seleciona las secuelas"
                v-if="type==='anime'" />    
           
            <textarea
                placeholder="Description"
                cols="30"
                rows="10"
                class="entry"
                v-model="newentry.description"
                required
            ></textarea>
            <div class="mt-5 text-center">
                <button class="favorite" type="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>

import SelectData from './components/SelectData.vue';
import {Record} from '../../types';
import { useEntry } from './composables/useEntry';

 const{type,query}=defineProps<{type:Record,title:string,query:string}>()

 const {newentry,seq,preq,handlesubmit}=useEntry(type,query);
 
</script>

<style scoped>
</style>