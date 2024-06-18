<template>
  <div class="searchbar-container">
    <input
      type="text"
      placeholder="search for a recipe, with ingredients or name"
    />
    <icon-mdi-magnify class="search-icon" />
  </div>
</template>

<script setup>
import IconMdiMagnify from "~icons/mdi/magnify";
</script>

<style scoped>
.searchbar-container {
  width: 30%;
  display: flex;
  align-items: center;

  input {
    height: 28px;
    margin-right: 1rem;
    width: 100%;
    border-radius: var(--border-radius-small);
  }

  .search-icon {
    height: 32px;
    width: 32px;
  }
}
</style>
