import { createRouter, createWebHistory } from "vue-router";
import { Home } from "../Home";



const routes=[
    {
        path:"/",
        name:"Home",
        component: Home
    },

    {
        path:"/newmanga",
        name:"NewManga",
        component: ()=>import("../Manga/FormManga.vue")
    },
    {
        path:"/newanime",
        name:"NewAnime",
        component: ()=>import("../Anime/FormAnime.vue")
    },
    
    {
        path:"/mangas",
        name:"Mangas",
        component:()=> import("../Manga/Mangas.vue")
    },
    {
        path:"/mangas/:genre",
        name:"MangasGen",
        component:()=> import("../Manga/Mangas.vue")
    },
    
    {
        path:"/animes",
        name:"Animes",
        component:()=> import("../Anime/Animes.vue")
    },
    {
        path:"/animes/:genre",
        name:"AnimesGen",
        component:()=> import("../Anime/Animes.vue")
    },
    {
        path:"/anime/:id",
        name:"Anime",
        component:()=> import("../Anime/Animeinfo.vue")
    },
    
    {
        path:"/manga/:id",
        name:"Manga",
        component:()=> import("../Manga/MangaInfo.vue")
    }
     

]

const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router