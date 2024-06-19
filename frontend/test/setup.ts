import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock vue3-carousel to prevent errors by testing
vi.mock('vue3-carousel', () => ({
  Carousel: {
    template: '<div><slot></slot></div>',
  },
}))