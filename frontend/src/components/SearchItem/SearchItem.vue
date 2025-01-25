<template>
  <RouterLink
    :to="`${RECIPES}/${recipe.categories[0].name}/${recipe.name}`"
    class="router-link"
    data-testid="search-item-link"
  >
    <div class="search-item">
      <div class="image-container">
        <img class="image" :src="`/images/${recipe.image}`" />
      </div>
      <div class="name-details-container">
        <span class="recipe-name">{{ recipe.name }}</span>
        <div class="details"><FontAwesomeIcon icon="fa-solid fa-clock" /> {{ recipe.time }}</div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { RECIPES } from '@/constants/routes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { Recipe } from '@/types/types'

interface RecipeCardProps {
  recipe: Recipe
}

defineProps<RecipeCardProps>()
</script>

<style scoped>
.search-item {
  height: 120px;
  display: flex;
  background-color: white;
  gap: 16px;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 16px;
  transition: background-color 0.3s;
}

.search-item:hover {
  background-color: #f4f6f7;
}

.router-link {
  color: black;
  text-decoration: none;
}

.image-container {
  overflow: hidden;
  flex-grow: 1;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 103px;
  height: 100%;
  max-height: 103px;
  background: #e9edef;
  border-radius: 12px;
}

.image {
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.recipe-name {
  color: var(--font-color-secondary);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.045em;
  line-height: 1;
  text-transform: uppercase;
}

.details {
  display: flex;
  align-items: flex-start;
  padding-block-start: 8px;
  font-size: 12px;
  line-height: 16.8px;
  color: #254a5d;
  gap: 0.5rem;
}

@media (width >= 900px) {
  .cards-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
