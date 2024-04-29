import dotenv from 'dotenv'
const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

import db from '../models/index'

const recipes = 
    [
        {
            id: 1,
            image: "meat.jpg",
            name: 'Barbecue',
            title: 'In a sommer day with friend there are few better options than a barbecue....',
            category: 'meat',
            time: 30,
            ingredients: 'meat, vegetables ... table ingredients',
            instructions: 'first: make fire, second: prepare the meat and the salad'
        },{
            id: 2,
            image: "pizza.jpg",
            name: 'Pizza bianca',
            title: 'There are ocasion where everyone just loves pizza, why not to do that at home....',
            category: 'vegeratian',
            time: 60,
            ingredients: 'flour, tomato souce ... ingredients',
            instructions: 'first: make dough, second: prepare the souce'
        },
        {
            id: 3,
            image: "bowl.jpg",
            name: 'Asia express bowl',
            title: 'Healthy tasty and easy to prepare....',
            category: 'vegeratian',
            time: 30,
            ingredients: 'Eggs, tomato, salad, corn ... ingredients',
            instructions: 'first: slice the ingredients, second: prepare the peanuts souce'
        },
        {
            id: 4,
            image: "fish.jpg",
            name: 'Special fish',
            title: 'Healthy tasty and easy to prepare....',
            category: 'fish',
            time: 40,
            ingredients: 'Fish, tomato, salad, corn ... ingredients',
            instructions: 'first: slice the fish, second: prepare the souce'
        },
        {
            id: 5,
            image: "meatball.jpg",
            name: 'Speedy meat ball',
            title: 'Tasty and easy to prepare....',
            category: 'meat',
            time: 50,
            ingredients: 'Meat, ruccola, salad ... ingredients',
            instructions: 'first: slice the ingredients, second: prepare the peanuts souce'
        },
        {
            id: 6,
            image: "burger.jpg",
            name: 'Veggie Burger Queen',
            title: 'Healthy tasty and easy to prepare....',
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