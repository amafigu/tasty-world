export interface Ingredient {
  subcategory?: string
  quantity: string
  name: string
}

export interface InstructionStep {
  step: number
  description: string
}

interface Category {
  id: number
  name: string
}

export interface RecipeArgs {
  image?: string
  name?: string
  title?: string
  categories?: Category[]
  time?: number
  ingredients?: Ingredient[]
  instructions?: InstructionStep[]
  peopleToServe: number
  difficultyLevel: number
}

export interface Recipe {
  image: string
  name: string
  title: string
  categories: Category[]
  time: number
  ingredients: Ingredient[]
  instructions: InstructionStep[]
  peopleToServe: number
  difficultyLevel: number
}
