import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Recipe {
    id: ID!
    image: String!
    name: String!
    title: String!
    categories: [RecipeCategory]!
    time: Int!
    peopleToServe: Int!
    difficultyLevel: Int!
    ingredients: [Ingredient]!
    instructions: [InstructionStep]!
  }

  type Ingredient {
    subcategory: String
    quantity: String!
    name: String!
  }

  type InstructionStep {
    step: Int!
    description: String!
  }

  type RecipeCategory {
    id: ID!
    name: String!
  }

  type Query {
    recipes: [Recipe]
    recipe(name: String!): Recipe
    recipeCategories: [RecipeCategory]
  }
`
/*
TODO: Fix the mutation 


  type 
  input RecipeCategoryInput {
    id: ID!
    name: String!
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
  }*/
