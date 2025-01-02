import Navbar from '@/components/Navbar/Navbar.vue'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { renderUsingRouter } from '../../helpers/routing'

describe('Navbar', () => {
  let matchers: ReturnType<typeof renderUsingRouter>
  beforeEach(() => {
    matchers = renderUsingRouter(Navbar)
  })

  it('renders all links correctly', async () => {
    const { getByText, getByAltText } = matchers

    expect(getByAltText('logo')).toBeInTheDocument()
    expect(getByText('Recipes')).toBeInTheDocument()
    expect(getByText('About')).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', async () => {
    const { getByLabelText, queryByRole } = matchers

    const openMenuBtn = getByLabelText('Open Menu')
    await fireEvent.click(openMenuBtn)

    expect(queryByRole('menu')).toBeInTheDocument()

    const closeMenuBtn = getByLabelText('Close Menu')
    await fireEvent.click(closeMenuBtn)

    expect(queryByRole('menu')).not.toBeInTheDocument()
  })
})
