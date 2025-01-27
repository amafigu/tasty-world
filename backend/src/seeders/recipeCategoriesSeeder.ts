import dotenv from 'dotenv'
import db from '../models/index'

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'

dotenv.config({ path: envFile })

const recipeCategories = [
  { id: 1, name: 'meat' },
  { id: 2, name: 'fish' },
  { id: 3, name: 'poultry' },
  { id: 4, name: 'vegetarian' },
  { id: 5, name: 'vegan' },
  { id: 6, name: 'dessert' },
  { id: 7, name: 'italian' },
  { id: 8, name: 'asian' },
]

async function seed() {
  try {
    for (const recipeCategory of recipeCategories) {
      const repeatedId = await db.recipeCategories.findByPk(recipeCategory.id)
      const repeatedCategoryName = await db.recipeCategories.findOne({
        where: { name: recipeCategory.name },
      })
      if (repeatedId || repeatedCategoryName) {
        console.log(
          `Category with id:${recipeCategory.id} or name:${recipeCategory.name} already exists`
        )
        continue
      } else {
        await db.recipeCategories.create(recipeCategory)
        console.log(`Category ${recipeCategory.name} created`)
      }
    }
    process.exit(0)
  } catch (error) {
    console.error('Error by seeding product categories: ', error)
    process.exit(1)
  }
}

seed()
