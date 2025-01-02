import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from 'sequelize-typescript'
import RecipeCategory from './recipeCategories'
import RecipeRecipeCategory from './recipeRecipeCategories'

@Table({
  tableName: 'recipes',
  timestamps: true,
})
class Recipe extends Model {
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
  public image!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public title!: string

  @BelongsToMany(() => RecipeCategory, () => RecipeRecipeCategory)
  public categories!: RecipeCategory[]

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  public time!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public ingredients!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public instructions!: string
}

export default Recipe
