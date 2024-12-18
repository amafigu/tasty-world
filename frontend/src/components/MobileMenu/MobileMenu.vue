<template>
  <nav class="mobile-menu" role="mobile-menu">
    <div class="close-button-container">
      <button
        @click="$emit('close')"
        class="close-button"
        aria-label="Close Menu"
      >
        <FontAwesomeIcon icon="fa-solid fa-times" />
      </button>
    </div>
    <div class="links-container">
      <div class="separator" role="separator"></div>
      <div class="link">
        <RouterLink :to="MEAT_RECIPES">Meat</RouterLink>
      </div>
      <div class="link">
        <RouterLink :to="FISH_RECIPES">Fish</RouterLink>
      </div>
      <div class="link">
        <RouterLink :to="VEGETARIAN_RECIPES">Vegetarian</RouterLink>
      </div>
      <div class="link"><RouterLink :to="ABOUT">About</RouterLink></div>
    </div>
  </nav>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
import {
  ABOUT,
  FISH_RECIPES,
  HOME,
  MEAT_RECIPES,
  VEGETARIAN_RECIPES,
} from '@/constants/routes'
</script>

<style scoped>
.mobile-menu {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: var(--border-radius-small);
  padding: var(--spacing-small) var(--spacing-small) var(--spacing-regular)
    var(--spacing-small);
  background-color: var(--background-color-primary);
  overflow-y: auto;
}

.close-button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0.8rem;
}

.close-button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--font-color-primary);
}

.separator {
  width: 100%;
  display: flex;
  align-items: center;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-top: 1px solid rgb(227, 227, 227);
}

.separator::before {
  margin-left: 0.5rem;
}

.separator::after {
  margin-right: 0.5rem;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.link {
  min-height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: var(--background-color-secondary);
}

.link a {
  text-decoration: none;
  color: var(--font-color-primary);
  font-size: 1.25rem;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
  text-decoration: underline 1px solid rgb(0, 0, 0);
  text-underline-offset: 0.15em;
}

.link a:hover {
  color: var(--font-color-secondary);
}

@media (min-width: 978px) {
  .mobile-menu {
    display: none;
  }
}
</style>
