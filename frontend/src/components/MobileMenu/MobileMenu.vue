<template>
  <div class="mobile-menu">
    <div class="close-button-container">
      <button @click="$emit('close')" class="close-button">
        <FontAwesomeIcon icon="fa-solid fa-times" />
      </button>
    </div>

    <div class="links-container">
      <div class="link">
        <RouterLink to="/meat-recipies">Meat</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/fish-recipies">Fish</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/vegetarian-recipies">Vegetarian</RouterLink>
      </div>
      <div class="link"><RouterLink to="/about">About</RouterLink></div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.mobile-menu {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: var(--border-radius-small);
  padding: 2rem 1rem;
  background-color: var(--background-color-primary);
  overflow-y: auto;
}

.close-button {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--font-color-primary);
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.link {
  min-height: 40px;
  display: flex;
  align-items: stretch;
  width: 100%;
  border-radius: var(--border-radius-small);
  cursor: pointer;
}

.link:hover {
  background-color: var(--background-color-secondary);
}

.link a {
  text-decoration: none;
  color: var(--font-color-primary);
  font-size: 1.25rem;
  font-weight: 500;
  transition: color 0.3s ease;
  transition: text-decoration-color;
  text-decoration: underline 1px solid rgb(0, 0, 0);
  text-underline-offset: 0.15em;
}

.link a:hover {
  color: var(--font-color-secondary);
}

.close-button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.close-button {
  cursor: pointer;
  background: none;
  border: none;
}
</style>
