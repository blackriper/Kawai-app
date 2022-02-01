import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes=[
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/mangas",
        name:"Mangas",
        component:()=> import("../views/Mangas.vue")
    },
    {
        path:"/animes",
        name:"Animes",
        component:()=> import("../views/Animes.vue")
    },
    {
        path:"/anime/:id",
        name:"Anime",
        component:()=> import("../views/Anime.vue")
    },
    {
        path:"/manga/:id",
        name:"Manga",
        component:()=> import("../views/Manga.vue")
    }
    

]

const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router