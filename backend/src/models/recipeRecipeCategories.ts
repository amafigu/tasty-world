import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript'
import Recipe from './recipe'
import RecipeCategory from './recipeCategories'

@Table({
  tableName: 'recipe_recipe_categories',
  timestamps: true,
})
class RecipeRecipeCategory extends Model {
  @ForeignKey(() => Recipe)
  @Column({ type: DataType.INTEGER })
  recipeId!: number

  @ForeignKey(() => RecipeCategory)
  @Column({ type: DataType.INTEGER })
  recipeCategoryId!: number
}

export default RecipeRecipeCategory
