import { fireEvent } from '@testing-library/vue'
import { describe, it, expect, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import MobileMenu from '@/components/MobileMenu/MobileMenu.vue'
import { renderUsingRouter } from '../../helpers/routing'

describe('MobileMenu', () => {
  let matchers: ReturnType<typeof renderUsingRouter>
  beforeEach(() => {
    matchers = renderUsingRouter(MobileMenu)
  })

  it('renders all navigation links correctly', () => {
    const { getByText } = matchers

    expect(getByText('Meat')).toBeInTheDocument()
    expect(getByText('Fish')).toBeInTheDocument()
    expect(getByText('Vegetarian')).toBeInTheDocument()
    expect(getByText('About')).toBeInTheDocument()
  })

  it('navigates to Meat recipes page', async () => {
    const { getByText, findByText } = matchers

    await fireEvent.click(getByText('Meat'))
    expect(await findByText('Meat')).toBeInTheDocument()
  })

  it('navigates to Fish recipes page', async () => {
    const { getByText, findByText } = matchers

    await fireEvent.click(getByText('Fish'))
    expect(await findByText('Fish')).toBeInTheDocument()
  })

  it('navigates to Vegetarian recipes page', async () => {
    const { getByText, findByText } = matchers

    await fireEvent.click(getByText('Vegetarian'))
    expect(await findByText('Vegetarian')).toBeInTheDocument()
  })

  it('emits "@close" event when close button is clicked', async () => {
    const { getByLabelText, emitted } = matchers
    const closeButton = getByLabelText('Close Menu')

    await fireEvent.click(closeButton)

    expect(emitted()).toHaveProperty('close')
    // expect that it was triggered once
    expect(emitted().close.length).toBe(1)
  })
})
