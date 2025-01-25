<template>
  <section class="recipes-view">
    <h1 class="recipes-title">{{ `${pageCategorie} recipes` }}</h1>
    <Breadcrumb />
    <div v-if="error">
      <span>There is an error fetching recipes</span>
    </div>
    <div v-else-if="loading">Loading recipes</div>
    <div v-else class="cards-container">
      <template v-for="item in filteredRecipes">
        <RecipeCard :recipe="item" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import { GET_RECIPES } from '@/graphql/queries'
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'
import { Recipe } from '@/types/types'

const { result, loading, error } = useQuery(GET_RECIPES)
const route = useRoute()
const pageCategorie = computed(() => route.params.category)

const filteredRecipes = computed(() => {
  const categoriesParam = route.params.category
  const recipes = result.value?.recipes ?? []

  return recipes.filter((recipe: Recipe) =>
    recipe.categories.some(cat => cat.name === categoriesParam)
  )
})
</script>

<style scoped>
.recipes-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-small);
}

.cards-container {
  display: grid;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

.page-container {
  width: 80%;
}

.slider-container {
  width: 100%;
}

.recipes-title {
  font-weight: 800;
  margin-bottom: var(--spacing-regular);
  line-height: 1;
  color: #337179;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

@media only screen and (width >= 600px) {
  .cards-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (width >= 900px) {
  .cards-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (width >= 1200px) {
  .cards-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
