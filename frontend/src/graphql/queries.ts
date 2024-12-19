import { gql } from '@apollo/client/core'

export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      name
      image
      categories {
        id
        name
      }
      time
      ingredients
      instructions
      title
    }
  }
`

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      name
      image
      categories {
        id
        name
      }
      time
      ingredients
      instructions
      title
    }
  }
`

export const GET_RECIPE_CATEGORIES = gql`
  query GetRecipeCategories {
    recipeCategories {
      id
      name
    }
  }
`
