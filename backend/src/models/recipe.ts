import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { Ingredient, InstructionStep } from '../types/types'
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  public time!: number

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  public ingredients!: Ingredient[]

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  public instructions!: InstructionStep[]

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
    },
    field: 'people_to_serve',
  })
  public peopleToServe!: number

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    validate: {
      min: 1,
      max: 3,
    },
    field: 'difficulty_level',
  })
  public difficultyLevel!: number
}

export default Recipe
