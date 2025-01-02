export type Recipe = {
  id: string
  image: string
  name: string
  title: string
  categories: { id: string; name: string }[]
  time: number
  ingredients: string
  instructions: string
}

export type RecipeCategory = {
  id: string
  name: string
}

export type RecipeCategories = {
  recipeCategories: RecipeCategory[]
}
