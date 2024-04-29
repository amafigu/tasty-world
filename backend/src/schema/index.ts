import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Recipe {
    id: ID!
    image: String!
    name: String!
    title: String!
    category: String!
    time: Int!
    ingredients: String!
    instructions: String!
  }

  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
  }

  type Mutation {
    addRecipe(
      image: String!,
      name: String!,
      title: String!,
      category: String!,
      time: Int!,
      ingredients: String!,
      instructions: String!
    ): Recipe
  }
`;