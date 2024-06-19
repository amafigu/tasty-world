<template>
  <article class="slider-card">
    <img class="image" :src="`/images/${recipe.image}`" />
    <h3>{{ recipe.name }}</h3>
    <div class="details">
      <h4>{{ recipe.title }}</h4>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  recipe: Object,
});
</script>

<style scoped>
.slider-card {
  width: 300px;
  height: 420px;
  box-shadow: var(--box-shadow-primary);
  overflow: hidden;
}

@media (min-width: 600px) {
  .slider-card {
    width: 320px;
    height: 460px;
  }
}

.image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius-small);
}

@media (min-width: 600px) {
  .image {
    height: 320px;
  }
}

.details {
  padding: 0 1.5rem;
}
</style>
