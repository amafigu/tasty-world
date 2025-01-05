import { recipeCategoriesMock } from '../data/recipeCategoriesMock'
import { recipeMock } from '../data/recipeMock'
import { recipesMock } from '../data/recipesMock'

const recipesFindAllMock = jest.fn().mockResolvedValue(recipesMock)
const recipeCategoriesFindAllMock = jest
  .fn()
  .mockResolvedValue(recipeCategoriesMock)

const recipesFindOneMock = jest.fn().mockResolvedValue(recipeMock)

export const recipesModelMock = {
  recipes: {
    findAll: recipesFindAllMock,
    findOne: recipesFindOneMock,
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
