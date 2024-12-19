import dotenv from 'dotenv'
import db from '../models/index'

const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'

dotenv.config({ path: envFile })

const recipes = [
  {
    image: 'meat.png',
    name: 'Barbecue with meat & veggies',
    title: 'For a sommer day with friends.',
    categories: [{ id: 1, name: 'meat' }],
    time: 30,
    ingredients: 'meat, vegetables ... table ingredients',
    instructions: 'first: make fire, second: prepare the meat and the salad',
  },
  {
    image: 'pizza.png',
    name: 'Pizza bianca from toscana',
    title: 'Tradicional italian recipe',
    categories: [
      { id: 4, name: 'vegetarian' },
      { id: 7, name: 'italian' },
    ],
    time: 60,
    ingredients: 'flour, tomato souce ... ingredients',
    instructions: 'first: make dough, second: prepare the souce',
  },
  {
    image: 'bowl.png',
    name: 'Asia express bowl',
    title: 'Healthy tasty and easy to prepare',
    categories: [
      { id: 4, name: 'vegetarian' },
      { id: 8, name: 'asian' },
    ],
    time: 30,
    ingredients: 'Eggs, tomato, salad, corn ... ingredients',
    instructions:
      'first: slice the ingredients, second: prepare the peanuts souce',
  },
  {
    image: 'fish.png',
    name: 'Special spyci salmon',
    title: 'Fresh, good looking and delicious',
    categories: [{ id: 2, name: 'fish' }],
    time: 40,
    ingredients: 'Fish, tomato, salad, corn ... ingredients',
    instructions: 'first: slice the fish, second: prepare the souce',
  },
  {
    image: 'meatball.png',
    name: 'Grandma meat balls',
    title: 'Impress your friend with this tradicional plate',
    categories: [{ id: 1, name: 'meat' }],
    time: 20,
    ingredients: 'Meat, ruccola, salad ... ingredients',
    instructions:
      'first: slice the ingredients, second: prepare the peanuts souce',
  },
  {
    image: 'burger.png',
    name: 'Vegan Burger Queen',
    title: 'Make your vegan frieds happy.',
    categories: [{ id: 5, name: 'vegan' }],
    time: 30,
    ingredients: 'Tomato, salad, corn ... ingredients',
    instructions:
      'first: slice the ingredients, second: prepare the peanuts souce',
  },
  {
    image: 'meat.png',
    name: 'Barbecue with meat & veggies',
    title: 'For a summer day with friends.',
    categories: [{ id: 1, name: 'meat' }],
    time: 30,
    ingredients: 'meat, vegetables ... table ingredients',
    instructions: 'first: make fire, second: prepare the meat and the salad',
  },
  {
    image: 'fish.png',
    name: 'Special spicy salmon',
    title: 'Fresh, good looking and delicious',
    categories: [{ id: 2, name: 'fish' }],
    time: 40,
    ingredients: 'Fish, tomato, salad, corn ... ingredients',
    instructions: 'first: slice the fish, second: prepare the souce',
  },
  {
    image: 'chicken.png',
    name: 'Lemon garlic chicken',
    title: 'Zesty and flavorful',
    categories: [{ id: 3, name: 'poultry' }],
    time: 35,
    ingredients: 'Chicken, lemon, garlic, herbs ...',
    instructions: 'Marinate the chicken, then grill or bake to perfection',
  },
  {
    image: 'salad.png',
    name: 'Mediterranean Quinoa Salad',
    title: 'Healthy, tasty, and easy to prepare',
    categories: [
      { id: 4, name: 'vegetarian' },
      { id: 5, name: 'vegan' },
    ],
    time: 20,
    ingredients: 'Quinoa, tomato, cucumber, olives ...',
    instructions: 'Cook quinoa, chop veggies, mix with dressing',
  },
  {
    image: 'cheesecake.png',
    name: 'New York Cheesecake',
    title: 'Creamy and timeless classic',
    categories: [{ id: 6, name: 'dessert' }],
    time: 90,
    ingredients: 'Cream cheese, sugar, eggs, graham crackers ...',
    instructions: 'Prepare crust, whip filling, bake in a water bath',
  },
]

async function seed() {
  try {
    for (const recipeData of recipes) {
      // Because of the many to many is needed to first extract categories, create and then set
      const { categories, ...otherFields } = recipeData
      const repeatedRecipeName = await db.recipes.findOne({
        where: { name: recipeData.name },
      })
      if (repeatedRecipeName) {
        console.log(
          `Recipe with name: ${recipeData.name} already exists, please choose another name`
        )
        continue
      } else {
        const newRecipe = await db.recipes.create(otherFields)
        if (categories && categories.length > 0) {
          const categoryIds = categories.map((cat) => cat.id)
          await newRecipe.$set('categories', categoryIds)
          console.log(
            `Categories ${categories} are settet to recipe ${newRecipe.name}`
          )
        }
      }
    }
    console.log('Recipes seeding completed successfully.')
    process.exit(0)
  } catch (err) {
    console.error('Recipes failed:', err)
    process.exit(1)
  }
}

seed()
