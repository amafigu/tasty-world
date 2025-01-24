<template>
  <section class="recipe-details">
    <Breadcrumb />
    <div v-if="loading">Loading recipe...</div>
    <div v-else-if="error">An error occurred: {{ error.message }}</div>
    <div v-else-if="recipeData" class="recipe">
      <div class="title-image-container">
        <div class="image-container">
          <img
            :src="`/images/${recipeData.image}`"
            class="image"
            alt="{{ recipeData.name }}"
            data-testid="recipe-details-image"
          />
        </div>
        <div class="right-column">
          <div class="title-name-container">
            <h1 class="name">{{ recipeData.name }}</h1>
            <span class="title">{{ recipeData.title }}</span>
            <div class="categories-links">
              <span
                class="category-link"
                v-for="category in recipeData.categories"
                :key="category.id"
              >
                <RouterLink
                  :to="`${RECIPES}/${category.name}`"
                  data-testid="recipe-details-category-link"
                >
                  {{ category.name }}
                </RouterLink>
              </span>
            </div>
            <div class="recipe-info-large-screen">
              <RecipeInfo
                :time="recipeData.time"
                :difficultyLevel="recipeData.difficultyLevel"
                :serves="recipeData.peopleToServe"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="recipe-sections-container">
        <div class="recipe-info-small-screen">
          <RecipeInfo
            :time="recipeData.time"
            :difficultyLevel="recipeData.difficultyLevel"
            :serves="recipeData.peopleToServe"
          />
        </div>
        <div class="separator"></div>
        <div class="ingredients-instructions-container">
          <div class="ingredients">
            <h4 class="ingredients-steps-title">Ingredients</h4>
            <ul class="ingredients-list">
              <template
                v-for="(ingredients, category) in ingredientsBySubcategory"
                :key="category"
              >
                <li v-if="category" class="ingredients-category-title">
                  {{ category }}
                </li>
                <li
                  v-for="(ingredient, index) in ingredients"
                  :key="index"
                  class="ingredient-item"
                >
                  {{ ingredient.quantity }} {{ ingredient.name }}
                </li>
              </template>
            </ul>
          </div>
          <div class="instructions">
            <h4 class="instructions-title">Method</h4>
            <ul class="instructions-list">
              <li
                v-for="instruction in sortedInstructions"
                :key="instruction.step"
                class="instruction-item"
              >
                <span class="instruction-step">{{ instruction.step }}</span>
                <p class="instruction-text">{{ instruction.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GET_RECIPE } from '@/graphql/queries'
import type { Ingredient, Recipe } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RECIPES } from '@/constants/routes'
import RecipeInfo from './RecipeInfo/RecipeInfo.vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'
const route = useRoute()
const recipeName = computed(() => route.params.recipe as string)

const { loading, error, result } = useQuery(GET_RECIPE, () => ({
  name: recipeName.value,
}))

const recipeData = computed<Recipe>(() => result.value?.recipe)

const sortedInstructions = computed(() => {
  return [...recipeData.value.instructions].sort((a, b) => a.step - b.step)
})

const ingredientsBySubcategory = computed(() => {
  const sortedIngredients: { [key: string]: Ingredient[] } = {}

  recipeData.value?.ingredients.forEach((ingredient) => {
    const subcategory = ingredient.subcategory || ''
    if (!sortedIngredients[subcategory]) {
      sortedIngredients[subcategory] = []
    }
    sortedIngredients[subcategory].push(ingredient)
  })
  return sortedIngredients
})
</script>

<style scoped>
.title-name-container {
  padding: 2rem;
}

.image-container {
  width: 100%;
  height: fit-content;
}

.title-image-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 0 1rem;
}

.ingredients-instructions-container {
  background-color: #f4f6f7;
}

.title {
  display: block;
  font-size: 1rem;
  line-height: 1.6;
  text-transform: none;
  letter-spacing: 0.01em;
  color: var(--font-color-primary);
  padding-top: 1rem;
  text-align: center;
}

.name {
  font-size: 2rem;
  color: var(--font-color-secondary);
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  margin-block-start: 0;
}

.image-container {
  width: 100%;
  height: auto;
}

.image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: var(--spacing-mobile-page-border);
}

.recipe-info-large-screen {
  display: none;
}

.categories-links {
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.category-link {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 12px;
  background-color: #e8edef;
  font-size: 12px;
  line-height: 1;
  text-overflow: ellipsis;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.category-link a {
  color: var(--font-color-primary);
}

.separator {
  width: 100%;
  height: 1px;
  background-color: #e9edef;
  margin-top: 0.5rem;
}

.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredients-steps-title {
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 1, 5rem;
  text-align: center;
  color: rgb(51, 113, 121);
}

.ingredients-category-title {
  font-weight: 800;
  display: flex;
  letter-spacing: 0.04em;
  align-items: center;
  color: rgb(51, 113, 121);
  font-size: 1.25rem;
  margin: 1rem 0;
}

.ingredients-item:not(:first-child):before {
  content: '';
  display: block;
  margin-block: 16px;
  border-top: 1px solid transparent;
}

.ingredient-item {
  font-size: 16px;
  line-height: 1.6;
  text-transform: none;
  letter-spacing: 0.01em;
  position: relative;
  padding: 0.5rem 0;
}

.ingredient-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e9edef;
}

.categories ul {
  list-style-type: none;
  padding: 0;
}

.categories li {
  margin-bottom: 0.5rem;
}

.ingredients,
.instructions {
  background-color: #fff;
  padding: 1.5rem 1.5rem;
  border-radius: 8px;
}

.instructions {
  background-color: #f4f6f7;
}

.instructions-title {
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: rgb(51, 113, 121);
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 1.5rem;
}

.instructions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.instruction-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.instruction-step {
  font-size: 1.25rem;
  font-weight: 800;
  color: rgb(51, 113, 121);
  margin-right: 1rem;
  flex-shrink: 0;
}

.instruction-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
  flex: 1;
}

@media only screen and (min-width: 601px) {
  .title-image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
    align-items: start;
  }

  .left-column {
    order: 2;
  }

  .image-container {
    order: 1;
  }

  .recipe-info-large-screen {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .recipe-info-small-screen {
    display: none;
  }

  .ingredients-instructions-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .ingredients,
  .instructions {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>
