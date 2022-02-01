<template>
    <div class="w-[1920px] sm:w-full mx-auto">
      <nav class="bar">
         <div class="flex items-center flex-shrink-0 text-white m-3 ml-5 w-1/5">
                <img src="../../assets/logo.png" width="50" alt="logo">
                <span class="font-semibold text-xl tracking-tight">Kawai anime</span>
            </div>
            <div class="lg:block hidden w-1/6 md:w-4/6">
              <div class="flex menu items-center justify-start gap-5"> 
                  <router-link to="/" class="link">Home</router-link>
                  <router-link to="animes" class="link">Anime</router-link>
                  <router-link to="mangas" class="link">Mangas</router-link>
             </div>  
            </div>   
            <div class="block lg:hidden w-1/6 lg:w-4/6">
               <a href="#" class="link" @click="view=!view" >Menu</a>
               <div :class="view?'menu_mobile':' hidden menu_mobile'">
                  <router-link to="/" class="link">Home</router-link>
                  <router-link to="animes" class="link">Anime</router-link>
                  <router-link to="mangas" class="link">Mangas</router-link> 
               </div>
            </div>             
      </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    setup () {
        let view= ref<boolean>(false)

        return {view}
    }
})
</script>

<style scoped>
   
</style>