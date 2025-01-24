import { describe, expect, it } from 'vitest'
import SearchItem from '@/components/SearchItem/SearchItem.vue'
import { renderUsingRouter } from '@/__tests__/helpers/routing'
import { recipeMock } from '@/__tests__/mocks/data/recipeMock'

describe('<SearchItem /> ', async () => {
  it('renders recipe image, name and cooking time', async () => {
    const { findByText } = renderUsingRouter(SearchItem, {
      props: {
        recipe: recipeMock,
      },
    })

    expect(await findByText('Barbecue with Meat & Veggies')).toBeInTheDocument()
  })
})
