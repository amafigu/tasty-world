<template>
  <section class="recipes-view">
    <span class="recipes-title">{{ `${pageCategorie} recipes` }}</span>
    <div v-if="error">
      <span>There is an error fetching recipes</span>
    </div>
    <div v-else-if="loading">Loading recipes</div>
    <div v-else class="cards-container">
      <div v-for="item in filteredRecipes">
        <RecipeCard :recipe="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import { GET_RECIPES } from '@/graphql/queries'
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'

const { result, loading, error } = useQuery(GET_RECIPES)
const route = useRoute()
const pageCategorie = computed(() => route.params.category)

const filteredRecipes = computed(() => {
  const categoriesParam = route.params.category
  const recipes = result.value?.recipes ?? []

  return recipes.filter((recipe) =>
    recipe.categories.some((cat) => cat.name === categoriesParam)
  )
})
</script>

<style scoped>
.recipes-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards-container {
  display: grid;
  width: 80%;
  margin: 0 auto;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .cards-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .cards-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1200px) {
  .cards-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
.page-container {
  width: 80%;
}
.slider-container {
  width: 100%;
}

.recipes-title {
  padding: 2.5rem;
  margin-bottom: var(--spacing-regular);
  font-size: var(--font-size-huge);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}
</style>
