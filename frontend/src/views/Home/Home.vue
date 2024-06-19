<template>
  <main class="home-view">
    <div class="page-container">
      <section class="slider-container">
        <Slider :items="recipes" />
        <p v-if="loading">Loading recipes...</p>
        <p v-if="error">An error occurred: {{ error.message }}</p>
      </section>
    </div>
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

<style scoped>
.home-view {
  display: flex;
  justify-content: center;
}
.page-container {
  width: 80%;
}
.slider-container {
  width: 100%;
}
</style>
