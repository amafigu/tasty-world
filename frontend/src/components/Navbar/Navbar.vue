<template>
  <nav class="navbar">
    <button class="hamburger-menu" @click="isOpen = !isOpen">
      <FontAwesomeIcon icon="fa-solid fa-bars" />
    </button>
    <transition name="slide">
      <div v-if="isOpen" class="mobile-menu-container">
        <MobileMenu @close="isOpen = false"></MobileMenu></div
    ></transition>

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
    <div class="logo-container">
      <RouterLink to="/"><img src="/images/logo.png" alt="logo" /></RouterLink>
    </div>
    <div class="icon-container">
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
    <div class="searchbar-container">
      <Searchbar></Searchbar>
    </div>
  </nav>
</template>

<script setup>
import Searchbar from '@/components/Searchbar/Searchbar.vue'
import MobileMenu from '../MobileMenu/MobileMenu.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const isOpen = ref(false)
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
}

.searchbar-container {
  grid-area: search;
  align-self: center;
  display: flex;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.mobile-menu-container {
  display: block;
  position: fixed;
  width: 80%;
  top: 0;
  left: 0;
  z-index: var(--z-index-mobile-menu);
  box-shadow: var(--box-shadow-primary);
  animation: slide-in 0.5s ease-out forwards;
}

/* desktop */
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

  .mobile-menu-container {
    display: none;
  }
}
</style>
