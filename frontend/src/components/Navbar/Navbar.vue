<template>
  <nav class="navbar">
    <div class="container">
      <div class="img-container">
        <RouterLink to="/"
          ><img src="../../../public/images/logo.png" alt="logo"
        /></RouterLink>
      </div>
      <div class="link"><RouterLink to="/meat-recipies">Meat</RouterLink></div>
      <div class="link"><RouterLink to="/fish-recipies">Fish</RouterLink></div>
      <div class="link">
        <RouterLink to="/vegetarian-recipies">Vegetarian</RouterLink>
      </div>
      <div class="link"><RouterLink to="/about">About</RouterLink></div>
      <Searchbar></Searchbar>
    </div>
  </nav>
</template>

<script setup>
import Searchbar from "@/components/Searchbar/Searchbar.vue";
</script>

<style scoped>
.navbar {
  background-color: #f8f6f5;
  margin-bottom: var(--spacing-small);
}
.container {
  height: 92px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.link {
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;

  a {
    text-decoration: none;
    color: black;
  }
}

.img-container {
  height: 80px;
  width: 80px;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
