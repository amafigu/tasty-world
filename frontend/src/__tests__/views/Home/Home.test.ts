import Home from '@/views/Home/Home.vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { renderUsingRouter } from '../../helpers/routing' // or define your own test router

describe('Home view', () => {
  let matchers: ReturnType<typeof renderUsingRouter>

  beforeEach(async () => {
    matchers = renderUsingRouter(Home)
  })
  it('renders recipe card', async () => {
    const { findByText, queryByText } = matchers

    // loading text appears while the query is resolving.
    expect(await findByText('Loading recipes...')).toBeInTheDocument()
    // wait for query to resolve and read data from card
    expect(await findByText('Barbecue with meat & veggies')).toBeInTheDocument()
    // loading test is gone
    expect(queryByText('Loading recipes...')).not.toBeInTheDocument()
  })
})
