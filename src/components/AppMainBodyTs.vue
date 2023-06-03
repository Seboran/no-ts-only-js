<template>
  <h1>
    Typescript
  </h1>
  {{ afficherText('Bonjour') }}
  {{ afficherTextEnum('World') }}
  {{ responseTs }}
  {{ responseJs }}
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useHelloWorld } from '../composables/useHelloWorld';
import { useHelloWorldEnum } from '../composables/useHelloWorldEnum';
import { useGetApi } from '../composables/useGetApi';
import { useGetApiJs } from '../composables/useGetApiJs'

const { afficherText } = useHelloWorld()
const { afficherTextEnum } = useHelloWorldEnum()

const urlJson = new URL(window.location.origin + '/fichier.json')
const { get, response: responseTs } = useGetApi<string>(urlJson)
const { get: getJs, response: responseJs } = useGetApiJs<string>(urlJson)

onMounted(() => {
  get()
  getJs()
})
</script>