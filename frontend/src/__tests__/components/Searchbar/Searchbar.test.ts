import { renderUsingRouter } from '@/__tests__/helpers/routing'
import Searchbar from '@/components/Searchbar/Searchbar.vue'
import { fireEvent, waitFor } from '@testing-library/vue'
import { describe, expect, it, beforeEach } from 'vitest'

describe('Searchbar does', async () => {
  let matchers: ReturnType<typeof renderUsingRouter>
  beforeEach(() => {
    matchers = renderUsingRouter(Searchbar)
  })

  it('renders one <SearchItem> per matched element', async () => {
    const { getByTestId, getAllByTestId } = matchers

    const searchInput = getByTestId('search-input')

    fireEvent.update(searchInput, 'a')
    await waitFor(() => {
      expect(getAllByTestId('search-item-link')).toHaveLength(2)
    })
  })

  it('has input with placehoder and class', () => {
    const { getByTestId } = matchers
    const searchInput = getByTestId('search-input')

    expect(searchInput).toHaveAttribute(
      'placeholder',
      'search for a recipe, with ingredients or name',
    )
    expect(searchInput).toHaveClass('searchbar-input')
  })
})
