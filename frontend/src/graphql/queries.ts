import { gql } from '@apollo/client/core'

export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      name
      image
      category
      time
      ingredients
      instructions
    }
  }
`

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      name
      image
      category
      time
      ingredients
      instructions
    }
  }
`
