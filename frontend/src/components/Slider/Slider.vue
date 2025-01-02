<template>
  <div>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="slider">
      <Slide class="slider-item" v-for="item in items" :key="item">
        <RecipeCard :recipe="item" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
  items: Array,
})

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
  //  autoplay: 6000,
}

const breakpoints = {
  // Mobile
  600: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // Tablet
  768: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  // Tablet Wide
  900: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  // Desktop
  1024: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  // Widescreen
  1280: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // Fullscreen
  1600: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
}
</script>

<style scoped>
.slider {
  width: 100%;
  display: flex;
}
</style>
