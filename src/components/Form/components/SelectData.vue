<template>
  <select 
     class="combo-box"
     :value="modelValue"
     @input='$emit("update:modelValue", ($event.target as HTMLSelectElement).value)'
      >
     <option disabled selected>- - -{{ text }}- - -</option>
     <option v-for="sl in data?.Animes" :value="sl._id">{{ sl.title }}</option>
  </select>
</template>

<script setup lang="ts">
import { useQuery } from 'villus';
import { Anime, AUTOANIMES } from '../../../types';

defineProps<{ modelValue:String,text: string }>()

type Record = Partial<Anime>

  interface Records {
  Animes: Record[]
}

const { data } = useQuery<Records>({
  query: AUTOANIMES
});


</script>

<style scoped></style>