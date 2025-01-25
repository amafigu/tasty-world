export type Recipe = {
  id: string
  image: string
  name: string
  title: string
  categories: RecipeCategory[]
  time: number
  ingredients: Ingredient[]
  instructions: InstructionStep[]
  difficultyLevel: number
  peopleToServe: number
}

export type Ingredient = {
  subcategory: string
  quantity: string
  name: string
}

export type InstructionStep = {
  step: number
  description: string
}

export type RecipeCategory = {
  id: string
  name: string
}

export type RecipeCategories = {
  recipeCategories: RecipeCategory[]
}

export type RecipeInfo = {
  time: Number
  difficultyLevel: Number
  serves: Number
}
