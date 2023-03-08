<template>
    <div class="flex justify-center mt-10">
       <input type="text"
        :placeholder="text"
        :value="modelValue"
        @input='$emit("update:modelValue", ($event.target as HTMLInputElement).value)'
        class="search"/>
          
   </div>
</template>

<script setup lang="ts">

  //props
  defineProps<{
     modelValue: String,
     text:string
  }>()
  
   
</script>

<style scoped>

</style>