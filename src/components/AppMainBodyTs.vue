<template>
  <h1>
    Typescript
  </h1>
  {{ afficherText('Bonjour') }}
  {{ afficherTextEnum('World') }}
  {{ responseTs }}
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useHelloWorld } from '../composables/useHelloWorld';
import { useHelloWorldEnum } from '../composables/useHelloWorldEnum';
import { useGetApi } from '../composables/useGetApi';

const { afficherText } = useHelloWorld()
const { afficherTextEnum } = useHelloWorldEnum()

const urlJson = new URL(window.location.origin + '/fichier.json')
const { get, response: responseTs } = useGetApi<string>(urlJson)

onMounted(() => {
  get()
})
</script>