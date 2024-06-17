<template>
  <main>
    <Slider :items="recipes" />
    <p v-if="loading">Loading recipes...</p>
    <p v-if="error">An error occurred: {{ error.message }}</p>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import Slider from "@/components/Slider/Slider.vue";
import { GET_RECIPES } from "@/graphql/queries";

const { result, loading, error } = useQuery(GET_RECIPES);

const recipes = computed(() => {
  if (result.value && result.value.recipes) {
    console.log(result.value.recipes);
    return result.value.recipes;
  }
  return [];
});
</script>
