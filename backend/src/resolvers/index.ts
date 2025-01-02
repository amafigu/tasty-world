import db from '../models/index'

interface RecipeArgs {
  image?: string
  name?: string
  title?: string
  categories?: { id: number; name: string }[]
  time?: number
  ingredients?: string
  instructions?: string
}

export const resolvers = {
  Query: {
    recipes: async () => {
      try {
        return await db.recipes.findAll({
          include: { model: db.recipeCategories },
        })
      } catch (error) {
        console.error('Error fetching recipes:', error)
        return []
      }
    },
    // In resolvers, the 2nd argument is an object containing all the arguments passed to the field
    // id is the arguments object with the shape { id: <ID> }.
    // need to destructure the argument, like so:
    recipe: async (_: any, { id }: { id: string }) => {
      try {
        return await db.recipes.findByPk(Number(id))
      } catch (error) {
        console.error('Error fetching recipe: ', error)
        return null
      }
    },

    recipeCategories: async () => {
      try {
        return await db.recipeCategories.findAll()
      } catch (error) {
        console.error('Error fetching recipe categories : ', error)
        return null
      }
    },
  },

  Mutation: {
    addRecipe: async (_: any, args: RecipeArgs) => {
      try {
        const recipe = await db.recipes.create(args as any)
        return recipe
      } catch (error) {
        console.error('Error adding recipe:', error)
        return null
      }
    },
  },
}
