import dotenv from 'dotenv'
const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

import db from '../models/index'

const recipes = 
    [
        {
            id: 1,
            image: "meat.png",
            name: 'Barbecue with meat & veggies',
            title: 'For a sommer day with friends.',
            category: 'meat',
            time: 30,
            ingredients: 'meat, vegetables ... table ingredients',
            instructions: 'first: make fire, second: prepare the meat and the salad'
        },{
            id: 2,
            image: "pizza.png",
            name: 'Pizza bianca from toscana',
            title: 'Tradicional italian recipe',
            category: 'vegeratian',
            time: 60,
            ingredients: 'flour, tomato souce ... ingredients',
            instructions: 'first: make dough, second: prepare the souce'
        },
        {
            id: 3,
            image: "bowl.png",
            name: 'Asia express bowl',
            title: 'Healthy tasty and easy to prepare',
            category: 'vegeratian',
            time: 30,
            ingredients: 'Eggs, tomato, salad, corn ... ingredients',
            instructions: 'first: slice the ingredients, second: prepare the peanuts souce'
        },
        {
            id: 4,
            image: "fish.png",
            name: 'Special spyci salmon',
            title: 'Fresh, good looking and delicious',
            category: 'fish',
            time: 40,
            ingredients: 'Fish, tomato, salad, corn ... ingredients',
            instructions: 'first: slice the fish, second: prepare the souce'
        },
        {
            id: 5,
            image: "meatball.png",
            name: 'Grandma meat balls',
            title: 'Impress your friend with this tradicional plate',
            category: 'meat',
            time: 20,
            ingredients: 'Meat, ruccola, salad ... ingredients',
            instructions: 'first: slice the ingredients, second: prepare the peanuts souce'
        },
        {
            id: 6,
            image: "burger.png",
            name: 'Veggie Burger Queen',
            title: 'Make your vegetarian frieds happy.',
            category: 'vegeratian',
            time: 30,
            ingredients: 'Eggs, tomato, salad, corn ... ingredients',
            instructions: 'first: slice the ingredients, second: prepare the peanuts souce'
        }
    ]


async function seed() {
  try {
    for (const recipe of recipes) {
      await db.recipe.create(recipe)
    }
    console.log('Seeding completed successfully.')
    process.exit(0)
  } catch (err) {
    console.error('Seeding failed:', err)
    process.exit(1)
  }
}

seed()