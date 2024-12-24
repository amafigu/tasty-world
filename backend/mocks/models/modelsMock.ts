import { recipeCategoriesMock } from './recipeCategoriesMock'
import { recipesMock } from './recipesMock'

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

// Maybe a general use case like

/*
export const recipeModelMock = {
  recipes: {
    findAll: recipeFindAllMock,
  },
  recipeCategories: {
    findAll: jest.fn().mockResolvedValue([]),
  },
  sequelize: {
    close: jest.fn(),
  },
}
*/
