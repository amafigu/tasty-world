<template>
  <button @click="getRecipies">Get Recipes</button>
</template>

<script setup>
import { ref } from 'vue'
import { getRecipies } from '../../services/api/getRecipies'

const recipes = ref([])

const fetchRecipes = async () => {
  try {
    const data = await getRecipies()
    recipes.value = data
    console.log(recipes.value)
  } catch (err) {
    console.error(err)
  }
}
</script>
