<template>
  <main>
    <Slider :items="recipes"></Slider>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Slider from '@/components/Slider/Slider.vue'
import { getRecipies } from '@/services/api/getRecipies'

const recipes = ref([])

onMounted(async () => {
  try {
    const recipesResponse = await getRecipies()
    recipes.value = recipesResponse.data
    console.log(recipesResponse)
  } catch (error) {
    console.error('Failed to get recipes:', error)
  }
})
</script>
