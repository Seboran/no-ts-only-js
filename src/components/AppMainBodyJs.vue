<template>
  <h1>Javascript</h1>
  {{ afficherText('Bonjour') }}
  {{ afficherTextEnum('World') }}
  {{ responseTs }}
  {{ responseJs }}
</template>

<script setup>
import { onMounted } from 'vue';
import { useHelloWorld } from '../composables/useHelloWorld';
import { useHelloWorldEnum } from '../composables/useHelloWorldEnum';
import { useGetApi } from '../composables/useGetApi';
import { useGetApiJs } from '../composables/useGetApiJs'

const { afficherText } = useHelloWorld()
const { afficherTextEnum } = useHelloWorldEnum()

const urlJson = new URL(window.location.origin + '/fichier.json')

const { get, response: responseTs } = /** @type {typeof useGetApi<string>} */ (useGetApi)(urlJson)
const { get: getJs, response: responseJs } =  /** @type {typeof useGetApiJs<string>} */(useGetApiJs)(urlJson)


onMounted(() => {
  get()
  getJs()
})
</script>