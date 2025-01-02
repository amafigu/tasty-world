export const GET_RECIPES = `
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

export const GET_RECIPE = `
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

export const GET_RECIPE_CATEGORIES = `
  query GetRecipeCategories {
    recipeCategories {
      id
      name
    }
  }
`
