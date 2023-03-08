<template>
  <FormData :query="NEWMANGA" title="Nuevo Manga" type="manga"/>
</template>

<script setup lang="ts">
import FormData from '../components/Form/FormData.vue';
import { NEWMANGA } from '../types';

</script>
