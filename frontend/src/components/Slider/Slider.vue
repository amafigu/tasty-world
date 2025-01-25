<template>
  <div>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="slider">
      <Slide class="slider-item" v-for="item in items" :key="item.id">
        <RecipeCard :recipe="item" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import type { Recipe } from '@/types/types'
import 'vue3-carousel/dist/carousel.css'

interface SliderProps {
  items: Recipe[]
}

defineProps<SliderProps>()

type SnapAlignOptions = 'center' | 'start' | 'end' | 'center-even' | 'center-odd'

interface CarouselSettings {
  itemsToShow: number
  snapAlign: SnapAlignOptions
}

const settings: CarouselSettings = {
  itemsToShow: 1,
  snapAlign: 'center',
}

interface BreakpointSettings {
  itemsToShow: number
  snapAlign: SnapAlignOptions
}

const breakpoints: Record<number, BreakpointSettings> = {
  600: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  900: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  1280: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
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
