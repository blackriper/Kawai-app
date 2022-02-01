<template>
    <div class="grid grid-row-1 justify-items-center">
        <h1 class="font-bold text-center text-xl text-purple-500 mt-10"> New Manga</h1>
        <form class="w-4/5 sm:w-1/4 " @submit.prevent="handlesubmit">
            <input type="text" placeholder="Title" class="entry" v-model="newentry.title" required />
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

<script lang="ts">
import { useMutation } from 'villus'
import { defineComponent, reactive } from 'vue'
import { Entry } from '../../types/interfaces'
import {NEWMANGA } from '../../types/querys'


export default defineComponent({
    setup() {
        const newentry = reactive<Entry>({
            title: "",
            cover: "",
            description: "",
            genre: "",
            rank: 0,
        });

        const { execute } = useMutation(NEWMANGA);


        const handlesubmit = () => {
            const variables = {
                "manga": {
                    "title": newentry.title,
                    "cover": newentry.cover,
                    "description": newentry.description,
                    "genre": newentry.genre.split(","),
                    "rank": newentry.rank.toString()

                }
            }
            execute(variables)
            alert(`New Manga added correctly`)
        }

        return { handlesubmit, newentry }
    }
})
</script>

<style scoped>
</style>