<template>
  <RouterLink
    :to="`${RECIPES}/${recipe.categories[0].name}/${recipe.name}`"
    class="router-link"
  >
    <article class="recipe-card">
      <div class="image-container">
        <img class="image" :src="`/images/${recipe.image}`" />
      </div>
      <span class="recipe-name">{{ recipe.name }}</span>
      <div class="details">
        <FontAwesomeIcon icon="fa-solid fa-clock" /> {{ recipe.time }}
      </div>
    </article>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { RECIPES } from '@/constants/routes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { Recipe } from '@/types'

interface RecipeCardProps {
  recipe: Recipe
}

const props = defineProps<RecipeCardProps>()
</script>

<style scoped>
.recipe-card {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.router-link {
  color: black;
  text-decoration: none;
}

.image-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 16px;
  margin-block-end: 1rem;
}

.image {
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-small);
  aspect-ratio: 3 / 4;
}

.recipe-name {
  margin-top: 0.5rem;
  color: var(--font-color-secondary);
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: 600;
}

.details {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--font-color-secondary);
}

@media (min-width: 900px) {
  .cards-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
