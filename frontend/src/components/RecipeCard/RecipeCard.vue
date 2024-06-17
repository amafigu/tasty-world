<template>
  <article class="card-body">
    <img class="image" :src="`/images/${recipe.image}`" />
    <h3>{{ recipe.name }}</h3>

    <div class="recipe-details">
      <div>{{ recipe.category }}</div>
      <div>{{ recipe.time }} minutes</div>
      <p>{{ recipe.ingredients }}</p>
      <p>{{ recipe.instructions }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  recipe: Object,
});
</script>

<style scoped>
.card-body {
  width: 300px;
}
.image {
  width: 100%;
  height: 300px;
}
</style>
