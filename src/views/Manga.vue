<template>
    <div class="container mx-auto flex flex-col md:flex-row justify-center my-12 md:my-24">
        <div class="w-full lg:w-1/2">
            <div class="w-full flex justify-center lg:w-1/2 lg:ml-40">
                <!--Add your product image here-->
                <img :src="data?.getManga.cover" class="rounded-none lg:rounded-lg shadow-2xl" />
            </div>
            <div class="top-0 right-0 mt-5 flex items-center gap-4 space-x-1">
                <dt class="sr-only">Genre</dt>
                <dd class="flex items-center" v-for="genre in data?.getManga.genre">
                    <button class="bg-sky-400 rounded-md shadow-md font-bold p-3">{{ genre }}</button>
                </dd>
            </div>
            <div class="mt-5 right-0 flex items-start space-x-1">
                <h1 class="font-bold text-3xl my-4 mr-6">{{ data?.getManga.title }}</h1>
                <dt class="text-sky-500 my-6">
                    <span class="sr-only">Star rating</span>
                    <svg width="16" height="20" fill="currentColor">
                        <path
                            d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"
                        />
                    </svg>
                </dt>
                <dd class="my-6">{{ data?.getManga.rank }}</dd>
            </div>
            <p class="leading-normal mb-4 text-lg text-justify">{{ data?.getManga.description }}</p>
            <button class="favorite" :disabled="data?.getManga.favorite" @click="addfavorite">Add favorite</button>
        </div>
      </div>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from 'villus';
import { useRoute } from 'vue-router';
import { conManga } from '../types/interfaces';
import { ADDFAVORITE, GETMANGA } from '../types/querys';

   
   const route=useRoute();
   const {data}=useQuery<conManga>({
       query:GETMANGA,
       variables:{id:route.params.id}
   })
 
     const { execute}=useMutation(ADDFAVORITE);
        const variables={
            id:route.params.id,
            class:"MANGA"
        }
         const addfavorite=()=>{
           execute(variables)
           alert(`${data.value?.getManga.title} add favorites`)
        }

</script>

<style scoped>

</style>