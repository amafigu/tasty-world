<template>
  <nav class="navbar">
    <button
      class="hamburger-menu"
      @click="isOpen = !isOpen"
      aria-label="Open Menu"
    >
      <FontAwesomeIcon icon="fa-solid fa-bars" />
    </button>
    <transition name="slide">
      <div v-if="isOpen" class="menu-container">
        <Menu @close="isOpen = false"></Menu>
      </div>
    </transition>
    <div class="links-container">
      <button
        class="link-header"
        @click="isOpen = !isOpen"
        aria-label="Open Recipes"
      >
        Recipes
      </button>
      <div class="link-header"><RouterLink :to="ABOUT">About</RouterLink></div>
    </div>
    <div class="logo-container">
      <RouterLink :to="HOME"
        ><img src="/images/logo.png" alt="logo"
      /></RouterLink>
    </div>
    <div class="icon-container">
      <FontAwesomeIcon icon="fa-solid fa-user" />
    </div>
    <div class="searchbar-container">
      <Searchbar></Searchbar>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Searchbar from '@/components/Searchbar/Searchbar.vue'
import { ABOUT, HOME } from '@/constants/routes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Ref, ref } from 'vue'
import Menu from './Menu/Menu.vue'

const isOpen: Ref<boolean> = ref(false)
</script>

<style scoped>
.navbar {
  box-sizing: border-box;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'menu logo icon'
    'search search search';
  align-items: center;
  background-color: var(--background-color-secondary);
  margin-bottom: var(--spacing-small);
  padding: var(--spacing-small);
  gap: var(--spacing-small);
}

.links-container {
  display: none;
}

.link-header,
.link-header a,
.link-header {
  width: fit-content;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: var(--font-weight-regular);
  font-size: var(--font-color-primary);
  color: var(--font-color-primary);
}

.link {
  min-height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: var(--font-size-regular);
  font-weight: var(--font-weight-regular);
}

.link:hover,
.link-recipes:hover {
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

.logo-container {
  grid-area: logo;
  justify-self: center;
  max-width: 60px;
  max-height: 60px;
}

.logo-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hamburger-menu {
  display: block;
  grid-area: menu;
  align-self: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--font-color-primary);
}

.searchbar-container {
  grid-area: search;
  align-self: center;
  display: flex;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.menu-container {
  display: block;
  position: fixed;
  width: 80%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: var(--z-index-mobile-menu);
  box-shadow: var(--box-shadow-primary);
  background-color: var(--background-color-primary);
}

@media only screen and (min-width: 978px) {
  .navbar {
    grid-template-rows: 3fr 2fr;
    grid-template-columns: 4fr 1fr 4fr;
    grid-template-areas:
      'links logo icon'
      'search search search';
  }

  .links-container {
    grid-area: links;
    display: grid;
    grid-auto-flow: column;
    align-self: center;
    align-items: center;
    gap: var(--spacing-small);
  }

  .link a {
    text-decoration: none;
    color: var(--font-color-primary);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
  }

  .logo-container {
    grid-area: logo;
    justify-self: center;
    height: 80px;
    width: 80px;
  }

  .logo-container img {
    height: 100%;
    width: 100%;
  }

  .icon {
    height: 100%;
    width: 100%;
  }

  .icon-container {
    grid-area: icon;
    justify-self: flex-end;
    align-self: center;
  }

  .searchbar-container {
    grid-area: search;
    align-self: center;
  }

  .hamburger-menu {
    display: none;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
