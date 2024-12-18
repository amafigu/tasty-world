import { fireEvent } from '@testing-library/vue'
import { describe, it, expect, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import Navbar from '@/components/Navbar/Navbar.vue'
import { renderUsingRouter } from '../../helpers/routing'

describe('Navbar', () => {
  let matchers: ReturnType<typeof renderUsingRouter>
  beforeEach(() => {
    // Ensure a fresh render before each test.
    matchers = renderUsingRouter(Navbar)
  })

  it('renders all links correctly', async () => {
    const { getByText, getByAltText } = matchers

    expect(getByAltText('logo')).toBeInTheDocument()
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

  it('closes mobile menu when close button is clicked', async () => {
    const { getByLabelText, queryByRole } = matchers

    const openMenuBtn = getByLabelText('Open Menu')
    await fireEvent.click(openMenuBtn)

    expect(queryByRole('mobile-menu')).toBeInTheDocument()

    const closeMenuBtn = getByLabelText('Close Menu')
    await fireEvent.click(closeMenuBtn)

    expect(queryByRole('mobile-menu')).not.toBeInTheDocument()
  })
})
