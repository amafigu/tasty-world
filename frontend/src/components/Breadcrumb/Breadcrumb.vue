<template>
  <div class="links-container">
    <RouterLink :to="'/'" data-testid="breadcrumb-home-link" class="breadcrumb-link">
      Home /
    </RouterLink>
    <RouterLink :to="categoryLink" data-testid="breadcrumb-category-link" class="breadcrumb-link">
      {{ categoryName }} /
    </RouterLink>
    <RouterLink :to="recipeLink" data-testid="breadcrumb-recipe-link" class="breadcrumb-link">
      {{ recipeName }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RECIPES } from '@/constants/routes'
import { computed } from 'vue'
const route = useRoute()

const recipeName = computed<string | string[]>(() =>
  route.params?.recipe ? route.params?.recipe : ''
)

const categoryLink = computed<string>(() => {
  const category = route.params.category || ''
  return `${RECIPES}/${category}`
})

const categoryName = computed<string | string[]>(() => route.params.category)

const recipeLink = computed<string>(() => {
  const category = route.params?.category ? route.params?.category : ''
  const recipe = recipeName.value

  return `${RECIPES}/${category}/${recipe}`
})
</script>

<style scoped>
.links-container {
  display: flex;
}

.breadcrumb-link {
  text-decoration: none;
  color: var(--font-color-secondary);
  text-transform: uppercase;
}
</style>
