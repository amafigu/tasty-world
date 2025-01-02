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
  {
    image: 'lasagna.png',
    name: 'Lasagna Bolognese',
    title: 'Classic Italian lasagna with a rich meat sauce.',
    categories: [
      { id: 1, name: 'meat' },
      { id: 7, name: 'italian' },
    ],
    time: 60,
    ingredients:
      'Pasta sheets, ground beef, tomato sauce, cheese, onions, garlic...',
    instructions:
      'Sauté onions and ground beef, add tomato sauce. Layer pasta, sauce, cheese. Bake until golden.',
  },
  {
    image: 'caprese.png',
    name: 'Caprese Salad',
    title: 'Fresh and light Italian starter.',
    categories: [
      { id: 4, name: 'vegetarian' },
      { id: 7, name: 'italian' },
    ],
    time: 15,
    ingredients: 'Tomatoes, mozzarella, basil, olive oil...',
    instructions:
      'Slice tomatoes and mozzarella, layer with basil leaves, drizzle with olive oil and salt.',
  },
  {
    image: 'fish-tacos.png',
    name: 'Fish Tacos',
    title: 'Zesty and flavorful street-style tacos.',
    categories: [{ id: 2, name: 'fish' }],
    time: 25,
    ingredients: 'White fish fillets, tortillas, cabbage, lime, sauce...',
    instructions:
      'Season fish and pan-fry. Assemble in tortillas with shredded cabbage, sauce, and lime juice.',
  },
  {
    image: 'chicken-alfredo.png',
    name: 'Chicken Alfredo',
    title: 'Creamy pasta favorite.',
    categories: [
      { id: 3, name: 'poultry' },
      { id: 7, name: 'italian' },
    ],
    time: 30,
    ingredients: 'Chicken breast, fettuccine, cream, parmesan, butter...',
    instructions:
      'Cook pasta, sauté chicken, add cream and cheese to create sauce, combine and serve.',
  },
  {
    image: 'turkey-pot-pie.png',
    name: 'Turkey Pot Pie',
    title: 'Hearty comfort food in a flaky crust.',
    categories: [{ id: 3, name: 'poultry' }],
    time: 50,
    ingredients: 'Turkey, mixed vegetables, gravy, pie crust...',
    instructions:
      'Cook turkey and vegetables, fill pie crust with mixture, bake until crust is golden.',
  },
  {
    image: 'vegan-chili.png',
    name: 'Vegan Chili',
    title: 'A protein-packed, plant-based stew.',
    categories: [{ id: 5, name: 'vegan' }],
    time: 40,
    ingredients: 'Beans, tomatoes, peppers, onions, spices...',
    instructions:
      'Sauté onions and peppers, add tomatoes, beans, and spices, simmer until flavors merge.',
  },
  {
    image: 'lava-cake.png',
    name: 'Chocolate Lava Cake',
    title: 'Warm, gooey chocolate center.',
    categories: [{ id: 6, name: 'dessert' }],
    time: 25,
    ingredients: 'Chocolate, butter, eggs, sugar, flour...',
    instructions:
      'Melt chocolate and butter, combine with beaten eggs and sugar, bake briefly for molten center.',
  },
  {
    image: 'tiramisu.png',
    name: 'Tiramisu',
    title: 'An Italian classic with coffee and mascarpone.',
    categories: [
      { id: 6, name: 'dessert' },
      { id: 7, name: 'italian' },
    ],
    time: 45,
    ingredients: 'Mascarpone, coffee, ladyfingers, cocoa, sugar...',
    instructions:
      'Dip ladyfingers in coffee, layer with mascarpone mixture, dust with cocoa, chill before serving.',
  },
  {
    image: 'pad-thai.png',
    name: 'Pad Thai',
    title: 'A Thai stir-fried noodle staple.',
    categories: [{ id: 8, name: 'asian' }],
    time: 30,
    ingredients: 'Rice noodles, eggs, bean sprouts, tamarind sauce, peanuts...',
    instructions:
      'Soak noodles, stir-fry with sauce and ingredients, garnish with crushed peanuts and lime.',
  },
  {
    image: 'sushi-rolls.png',
    name: 'Sushi Rolls',
    title: 'Fresh and customizable Japanese favorite.',
    categories: [{ id: 8, name: 'asian' }],
    time: 40,
    ingredients: 'Sushi rice, nori, fillings (fish or veggies), soy sauce...',
    instructions:
      'Prepare sushi rice, place on nori, add fillings, roll tightly, slice into pieces.',
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
