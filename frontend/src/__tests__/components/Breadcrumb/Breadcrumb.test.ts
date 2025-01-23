import { describe, it, beforeEach, expect } from 'vitest'
import { renderUsingRouter, router } from '../../helpers/routing'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'
import Home from '@/views/Home/Home.vue'
import Recipes from '@/views/Recipes/Recipes.vue'
import { fireEvent, waitFor } from '@testing-library/vue'

describe('Breadcrumb does ', () => {
  let matchers: ReturnType<typeof renderUsingRouter>
  beforeEach(() => {
    matchers = renderUsingRouter(Breadcrumb)
  })
  it('navigates to home page', async () => {
    const { getByTestId } = matchers
    const { findByText } = renderUsingRouter(Home)
    const homeLink = getByTestId('breadcrumb-home-link')

    await fireEvent.click(homeLink)
    await waitFor(async () => {
      expect(await findByText('Loading recipes...')).toBeInTheDocument()
    })
  })

  it('navigates to category view', async () => {
    const { getAllByTestId } = matchers
    const { findByText } = renderUsingRouter(Recipes)
    const categoryLinks = getAllByTestId('breadcrumb-category-link')
    const link = categoryLinks[1]

    await fireEvent.click(link)
    router.push('/recipes/meat')

    await waitFor(async () => {
      expect(await findByText('meat recipes')).toBeInTheDocument()
    })
  })
})
