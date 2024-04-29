import Recipe from "../models/recipe"
import db from "../models/index"

interface RecipeArgs {
    image?: string;
    name?: string;
    title?: string;
    category?: string;
    time?: number;
    ingredients?: string;
    instructions?: string;
}

export const resolvers = {
    Query: {
        recipes: async () => {
            try {
                return await db.recipe.findAll();
            } catch (error) {
                console.error('Error fetching recipes:', error);
                return [];
            }
        },
        recipe: async (_:any,  id:any) => {
            try {
                return await Recipe.findByPk(id as any);
            } catch (error) {
                console.error('Error fetching recipe:', error);
                return null;
            }
        }
    },
   
        
    
    Mutation: {
        addRecipe: async (_:any, args:RecipeArgs) => {
            try {
                const recipe = await Recipe.create(args as any);
                return recipe;
            } catch (error) {
                console.error('Error adding recipe:', error);
                return null;
            }
        }
    }
};