import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { handlers } from '../src/__tests__/mocks/msw/handlers'

// Mock html to avoid errors by testing

vi.mock('vue3-carousel', () => ({
  Carousel: {
    template: '<div><slot></slot></div>',
  },
  Slide: {
    template: '<div data-test="slide"><slot /></div>',
  },
}))

vi.mock('@fortawesome/vue-fontawesome', () => ({
  FontAwesomeIcon: {
    template: '<svg></svg>',
  },
}))

// Create the server for msw
const server = setupServer(...handlers)

// Start listening before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

// Reset handlers after each test
afterEach(() => {
  server.resetHandlers()
})

// Close server after all tests
afterAll(() => {
  server.close()
})
