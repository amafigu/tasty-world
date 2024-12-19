import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from 'sequelize-typescript'
import Recipe from './recipe'
import RecipeRecipeCategory from './recipeRecipeCategories'

@Table({
  tableName: 'recipe_categories',
  timestamps: true,
})
class RecipeCategory extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public name!: string
  @BelongsToMany(() => Recipe, () => RecipeRecipeCategory)
  public recipes!: Recipe[]
}

export default RecipeCategory
