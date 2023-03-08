<template>
    <div class="detail-container">
        <div class="w-full lg:w-1/2">
            <div class="w-full flex justify-center lg:w-1/2 lg:ml-40">
                <!--Add your product image here-->
                <img :src="data?.getManga?.cover" class="detail-cover" />
            </div>
            <div class="detail-genre-container">
                <dt class="sr-only">Genre</dt>
                <dd class="flex items-center" v-for="genre in data?.getManga?.genre">
                    <button 
                       class="detail-breadcrumb"
                       @click="handleGenre(genre)">
                       {{ genre }}</button>
                </dd>
            </div>
            <div class="mt-5 right-0 flex items-start space-x-1">
                <h1 class="font-bold text-3xl my-4 mr-6">{{ data?.getManga?.title }}</h1>
                <dt class="text-sky-500 my-6">
                    <span class="sr-only">Star rating</span>
                    <svg width="16" height="20" fill="currentColor">
                        <path
                            d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"
                        />
                    </svg>
                </dt>
                <dd class="my-6">{{ data?.getManga?.rank }}</dd>
            </div>
            <p class="detail-description">{{ data?.getManga?.description }}</p>
            <label class="font-bold text-purple-700 text-2xl my-4 mr-6">
                Capitulos: {{ data?.getManga?.chapters }}
            </label>
            <button
             class="favorite"
             :disabled="data?.getManga?.favorite"
              @click="addfavorite(data?.getManga?.title)">Add favorite</button>
        </div>
      </div>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useAFav, useDetail } from '../composables';
import router from '../router/routes';


const route=useRoute();
const {data}=useDetail(route.params.id,'manga')
const{addfavorite}=useAFav(route.params.id,'MANGA')

const handleGenre=(genre:string)=>{
   router.push({ name: 'MangasGen', params: { genre } })
}

onBeforeRouteUpdate((to,from)=>{
    if (to.name !== from.name) {
        window.location.reload()

    }
})

</script>

<style scoped>

</style>