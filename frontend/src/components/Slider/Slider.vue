<template>
  <div class="slider-container">
    <div>
      <div v-for="item in items" :key="item.id" class="flicking-panel">
        <RecipeCard :recipe="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import RecipeCard from "@/components/RecipeCard/RecipeCard.vue";

const props = defineProps({
  items: Array,
});
</script>

<style scoped>
.slider-container {
  width: 1200px;
}
.flicking-panel {
  width: 100%;
}
</style>
