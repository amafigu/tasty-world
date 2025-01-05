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
      peopleToServe
      difficultyLevel
      ingredients {
        subcategory
        quantity
        name
      }
      instructions {
        step
        description
      }
      title
    }
  }
`

export const GET_RECIPE = gql`
  query GetRecipe($name: String!) {
    recipe(name: $name) {
      id
      name
      image
      categories {
        id
        name
      }
      time
      peopleToServe
      difficultyLevel
      ingredients {
        subcategory
        quantity
        name
      }
      instructions {
        step
        description
      }
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
