import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import Recipe from './recipe'
dotenv.config()
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  host: 'localhost',
  dialect: 'postgres',
  models: [Recipe]
})

interface Db {
  Sequelize: typeof Sequelize
  sequelize: Sequelize
  recipe: typeof Recipe
}

const db: Db = {
  Sequelize,
  sequelize,
  recipe: Recipe
}

export default db