import db from '../models/index'

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
    recipe: async (_: any, { name }: { name: string }) => {
      try {
        return await db.recipes.findOne({
          where: {
            name: String(name),
          },
          include: { model: db.recipeCategories },
        })
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
}
