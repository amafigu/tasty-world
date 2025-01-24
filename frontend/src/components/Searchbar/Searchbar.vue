<template>
  <div class="searchbar-wrapper">
    <FontAwesomeIcon icon="fa-solid fa-search" class="search-icon" />
    <input
      type="text"
      placeholder="search for a recipe, with ingredients or name"
      class="searchbar-input"
      data-testid="search-input"
      v-model="search"
    />
    <div class="search-list">
      <SearchItem
        v-for="item in filteredItems"
        :recipe="item"
        @click="search = ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref, Ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_RECIPES } from '@/graphql/queries'
import { RECIPES } from '@/constants/routes'
import { Recipe } from '@/constants/types'
import SearchItem from '@/components/SearchItem/SearchItem.vue'

const { loading, error, result } = useQuery(GET_RECIPES)
const search: Ref<string> = ref('')
const filteredItems = computed<Recipe[]>(() => {
  const recipes = result.value?.recipes ?? []

  if (!search.value) {
    return []
  }

  return recipes
    .filter((item) =>
      item.name.toLowerCase().includes(search.value.trim().toLowerCase()),
    )
    .slice(0, 5)
})
</script>

<style scoped>
.searchbar-wrapper {
  width: 100%;
  min-height: 40px;
  position: relative;
}

.searchbar-input {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding-left: var(--spacing-regular);
  border-radius: var(--border-radius-small);
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.search-list {
  display: flex;
  flex-direction: column;
  z-index: 100000;
  background-color: white;
  position: absolute;
  width: 100%;
  gap: 0.5rem;
  margin-top: 1.25rem;
}
</style>
