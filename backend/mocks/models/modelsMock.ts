import { recipeCategoriesMock } from '../data/recipeCategoriesMock'
import { recipesMock } from '../data/recipesMock'

const recipesFindAllMock = jest.fn().mockResolvedValue(recipesMock)
const recipeCategoriesFindAllMock = jest
  .fn()
  .mockResolvedValue(recipeCategoriesMock)

export const recipeModelMock = {
  recipes: {
    findAll: recipesFindAllMock,
  },
  sequelize: {
    close: jest.fn(),
  },
}

export const recipeCategoriesModelMock = {
  recipeCategories: {
    findAll: recipeCategoriesFindAllMock,
  },
  sequelize: {
    close: jest.fn(),
  },
}
