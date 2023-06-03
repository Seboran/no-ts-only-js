<template>
  <h1>Javascript</h1>
  {{ afficherText('Bonjour') }}
  {{ afficherTextEnum('World') }}
  {{ response }}
</template>

<script setup>
import { onMounted } from 'vue';
import { useHelloWorld } from '../composables/useHelloWorld';
import { useHelloWorldEnum } from '../composables/useHelloWorldEnum';
import { useGetApiJs } from '../composables/useGetApiJs'

const { afficherText } = useHelloWorld()
const { afficherTextEnum } = useHelloWorldEnum()

const urlJson = new URL(window.location.origin + '/fichier.json')

const { get, response } =  /** @type {typeof useGetApiJs<string>} */(useGetApiJs)(urlJson)

onMounted(() => {
  get()
})
</script>