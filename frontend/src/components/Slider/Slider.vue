<template>
  <div class="slider-container">
    <Flicking
      :options="{
        circularFallback: 'bound',
        circular: true,
        panelsPerView: 3,
        align: 'prev',
        infinite: true
      }"
    >
      <div v-for="item in items" :key="item.id" class="flicking-panel">
        <RecipeCard :recipe="item" />
      </div>
    </Flicking>
  </div>
</template>

<script setup>
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'
import RecipeCard from '@/components/RecipeCard.vue'

const props = defineProps({
  items: Array
})
</script>

<style scoped>
.slider-container {
  width: 1200px;
}
.flicking-panel {
  width: 100%;
}
</style>
