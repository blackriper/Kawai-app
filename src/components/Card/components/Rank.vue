<template>
  <div class="absolute top-0 right-0 flex items-center space-x-1">
    <dt class="text-sky-500">
      <span class="sr-only">Star rating</span>
      <svg width="16" height="20" fill="currentColor">
        <path
          d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
      </svg>
    </dt>
    <dd>{{ rank }}</dd>
  </div>
</template>

<script setup lang="ts">
 defineProps<{ rank:string }>()

</script>

<style scoped>

</style>