<template>
  <div class="searchbar-wrapper">
    <FontAwesomeIcon icon="fa-solid fa-search" class="search-icon" />
    <input
      type="text"
      placeholder="search for a recipe, with ingredients or name"
      class="searchbar-input"
    />
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
</style>
