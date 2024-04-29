<template>
  <article class="card-body">
    <img class="image" :src="`/images/${recipe.image}`" />
    <h3>{{ recipe.title }}</h3>
    <p>{{ recipe.subtitle }}</p>
    <div class="recipe-details">
      <span>{{ recipe.category }}</span>
      <span>{{ recipe.readyIn }}</span>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  recipe: Object
})
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
