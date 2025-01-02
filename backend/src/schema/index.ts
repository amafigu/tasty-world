import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Recipe {
    id: ID!
    image: String!
    name: String!
    title: String!
    categories: [RecipeCategory]!
    time: Int!
    ingredients: String!
    instructions: String!
  }

  type RecipeCategory {
    id: ID!
    name: String!
  }

  input RecipeCategoryInput {
    id: ID!
    name: String!
  }

  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
    recipeCategories: [RecipeCategory]
  }

  type Mutation {
    addRecipe(
      image: String!
      name: String!
      title: String!
      categories: [RecipeCategoryInput]!
      time: Int!
      ingredients: String!
      instructions: String!
    ): Recipe
  }
`
