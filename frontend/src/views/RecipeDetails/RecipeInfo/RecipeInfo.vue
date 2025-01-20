<template>
  <div class="recipe-info">
    <div class="recipe-info-item">
      <span class="recipe-info-item-icon">
        <FontAwesomeIcon
          data-testid="recipe-info-clock-icon"
          icon="fa-solid fa-clock"
        />
      </span>
      <h6 class="recipe-info-item-text" data-testid="time">{{ time }} mins</h6>
    </div>
    <div class="recipe-info-item">
      <span v-if="difficultyLevel === 3" class="recipe-info-item-icon">
        <FontAwesomeIcon
          data-testid="recipe-info-high-difficulty-icon"
          icon="fa-solid fa-temperature-full"
        />
      </span>
      <span v-else-if="difficultyLevel === 2" class="recipe-info-item-icon">
        <FontAwesomeIcon
          data-testid="recipe-info-medium-difficulty-icon"
          icon="fa-solid fa-temperature-half"
        />
      </span>
      <span v-else-if="difficultyLevel === 1" class="recipe-info-item-icon">
        <FontAwesomeIcon
          data-testid="recipe-info-low-difficulty-icon"
          icon="fa-solid fa-temperature-quarter"
        />
      </span>
      <h6 class="recipe-info-item-text">{{ difficultyText }}</h6>
    </div>
    <div class="recipe-info-item">
      <span class="recipe-info-item-icon">
        <FontAwesomeIcon
          data-testid="recipe-info-user-icon"
          icon="fa-solid fa-user"
        />
      </span>
      <h6 class="recipe-info-item-text">serves {{ serves }}</h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import type { RecipeInfo } from '@/types/types'

const { time, difficultyLevel, serves } = defineProps<RecipeInfo>()

const difficultyText = computed(() => {
  switch (difficultyLevel) {
    case 1:
      return 'Easy'
    case 2:
      return 'Not that easy'
    case 3:
      return 'Tricky'
    default:
      return ''
  }
})
</script>

<style scoped>
.recipe-info {
  display: flex;
  align-items: flex-start;
  padding-block-start: 2rem;
}

.recipe-info-item {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0.5rem;
  margin: 0;
  flex: 1;
}

.recipe-info-item-icon {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.recipe-info-item-text {
  font-size: 14px;
  letter-spacing: 0.045em;
  line-height: 1;
  font-weight: 500;
  color: var(--font-color-tertiary);
  text-transform: uppercase;
  margin: 0.75rem 0;
  text-align: center;
  word-wrap: break-word;
}

.recipe-info-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 90%;
  width: 1px;
  background-color: #e9edef;
}
</style>
