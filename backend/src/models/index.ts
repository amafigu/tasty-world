import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import Recipe from './recipe'
import RecipeCategory from './recipeCategories'
import RecipeRecipeCategory from './recipeRecipeCategories'

dotenv.config()
const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

const sequelize = new Sequelize(process.env.DB_URL!, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  models: [Recipe, RecipeCategory, RecipeRecipeCategory],
})

interface Db {
  Sequelize: typeof Sequelize
  sequelize: Sequelize
  recipes: typeof Recipe
  recipeCategories: typeof RecipeCategory
  recipeRecipeCategories: typeof RecipeRecipeCategory
}

const db: Db = {
  Sequelize,
  sequelize,
  recipes: Recipe,
  recipeCategories: RecipeCategory,
  recipeRecipeCategories: RecipeRecipeCategory,
}

export default db
