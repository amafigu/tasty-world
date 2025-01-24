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

export const GET_RECIPE = `
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

export const GET_RECIPE_CATEGORIES = `
  query GetRecipeCategories {
    recipeCategories {
      id
      name
    }
  }
`
