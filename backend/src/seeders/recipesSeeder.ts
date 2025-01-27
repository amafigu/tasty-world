import dotenv from 'dotenv'
import db from '../models/index'

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'

dotenv.config({ path: envFile })

const recipes = [
  {
    image: 'meat.png',
    name: 'Barbecue with Meat & Veggies',
    title: 'For a summer day with friends.',
    categories: [{ id: 1, name: 'meat' }],
    time: 30,
    peopleToServe: 4,
    difficultyLevel: 2,
    ingredients: [
      { subcategory: 'Meat', quantity: '400g', name: 'Beef' },
      { subcategory: 'Vegetables', quantity: '300g', name: 'Mixed Vegetables' },
    ],
    instructions: [
      { step: 1, description: 'Make fire.' },
      { step: 2, description: 'Prepare the meat and the salad.' },
    ],
  },
  {
    image: 'pizza.png',
    name: 'Pizza Bianca from Toscana',
    title: 'Traditional Italian recipe.',
    categories: [
      { id: 4, name: 'vegetarian' },
      { id: 7, name: 'italian' },
    ],
    time: 60,
    peopleToServe: 2,
    difficultyLevel: 2,
    ingredients: [
      { subcategory: 'Dough', quantity: '200g', name: 'Flour' },
      { subcategory: 'Sauce', quantity: '100ml', name: 'Tomato Sauce' },
      { subcategory: 'Cheese', quantity: '150g', name: 'Mozzarella Cheese' },
    ],
    instructions: [
      { step: 1, description: 'Prepare the dough.' },
      { step: 2, description: 'Spread the tomato sauce over the dough.' },
      { step: 3, description: 'Add mozzarella cheese as topping.' },
      { step: 4, description: 'Bake in the oven at 220°C for 15 minutes.' },
    ],
  },
  {
    image: 'bowl.png',
    name: 'Asia Express Bowl',
    title: 'Healthy, tasty, and easy to prepare.',
    categories: [
      { id: 4, name: 'vegetarian' },
      { id: 8, name: 'asian' },
    ],
    time: 30,
    peopleToServe: 3,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Protein', quantity: '2', name: 'Eggs' },
      { subcategory: 'Vegetables', quantity: '100g', name: 'Tomato' },
      { subcategory: 'Greens', quantity: '50g', name: 'Salad' },
      { subcategory: 'Grains', quantity: '100g', name: 'Corn' },
    ],
    instructions: [
      { step: 1, description: 'Slice the ingredients.' },
      { step: 2, description: 'Prepare the peanut sauce.' },
      { step: 3, description: 'Combine all ingredients in a bowl and drizzle with sauce.' },
    ],
  },
  {
    image: 'fish.png',
    name: 'Special Spicy Salmon',
    title: 'Fresh, good-looking, and delicious.',
    categories: [{ id: 2, name: 'fish' }],
    time: 40,
    peopleToServe: 2,
    difficultyLevel: 2,
    ingredients: [
      { subcategory: 'Fish', quantity: '300g', name: 'Salmon' },
      { subcategory: 'Vegetables', quantity: '100g', name: 'Tomato' },
      { subcategory: 'Greens', quantity: '50g', name: 'Salad' },
      { subcategory: 'Grains', quantity: '100g', name: 'Corn' },
    ],
    instructions: [
      { step: 1, description: 'Slice the salmon.' },
      { step: 2, description: 'Prepare the spicy sauce.' },
      { step: 3, description: 'Grill the salmon and serve with salad.' },
    ],
  },
  {
    image: 'meatball.png',
    name: "Grandma's Meatballs",
    title: 'Impress your friends with this traditional plate.',
    categories: [{ id: 1, name: 'meat' }],
    time: 20,
    peopleToServe: 4,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Meat', quantity: '500g', name: 'Ground Beef' },
      { subcategory: 'Greens', quantity: '50g', name: 'Ruccola' },
      { subcategory: 'Vegetables', quantity: '100g', name: 'Salad' },
    ],
    instructions: [
      { step: 1, description: 'Slice the ingredients.' },
      { step: 2, description: 'Prepare the peanut sauce.' },
      { step: 3, description: 'Mix the meat and form into balls, then cook.' },
    ],
  },
  {
    image: 'burger.png',
    name: 'Vegan Burger Queen',
    title: 'Make your vegan friends happy.',
    categories: [{ id: 5, name: 'vegan' }],
    time: 30,
    peopleToServe: 2,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Buns', quantity: '2', name: 'Burger Buns' },
      { subcategory: 'Vegetables', quantity: '50g', name: 'Tomato' },
      { subcategory: 'Greens', quantity: '50g', name: 'Salad' },
      { subcategory: 'Grains', quantity: '100g', name: 'Corn' },
    ],
    instructions: [
      { step: 1, description: 'Slice the ingredients.' },
      { step: 2, description: 'Prepare the peanut sauce.' },
      { step: 3, description: 'Assemble the vegan burgers with buns and fillings.' },
    ],
  },
  {
    image: 'chicken.png',
    name: 'Lemon Garlic Chicken',
    title: 'Zesty and flavorful.',
    categories: [{ id: 3, name: 'poultry' }],
    time: 35,
    peopleToServe: 3,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Protein', quantity: '500g', name: 'Chicken' },
      { subcategory: 'Flavorings', quantity: '50g', name: 'Lemon' },
      { subcategory: 'Flavorings', quantity: '20g', name: 'Garlic' },
      { subcategory: 'Herbs', quantity: '10g', name: 'Mixed Herbs' },
    ],
    instructions: [
      { step: 1, description: 'Marinate the chicken with lemon and garlic.' },
      { step: 2, description: 'Grill or bake the chicken to perfection.' },
      { step: 3, description: 'Serve with your choice of sides.' },
    ],
  },
  {
    image: 'salad.png',
    name: 'Mediterranean Quinoa Salad',
    title: 'Healthy, tasty, and easy to prepare.',
    categories: [
      { id: 4, name: 'vegetarian' },
      { id: 5, name: 'vegan' },
    ],
    time: 20,
    peopleToServe: 4,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Grains', quantity: '200g', name: 'Quinoa' },
      { subcategory: 'Vegetables', quantity: '100g', name: 'Tomato' },
      { subcategory: 'Vegetables', quantity: '100g', name: 'Cucumber' },
      { subcategory: 'Condiments', quantity: '50g', name: 'Olives' },
    ],
    instructions: [
      { step: 1, description: 'Cook the quinoa according to package instructions.' },
      { step: 2, description: 'Chop the vegetables into bite-sized pieces.' },
      { step: 3, description: 'Mix quinoa and vegetables with dressing.' },
      { step: 4, description: 'Serve chilled or at room temperature.' },
    ],
  },
  {
    image: 'cheesecake.png',
    name: 'New York Cheesecake',
    title: 'Creamy and timeless classic.',
    categories: [{ id: 6, name: 'dessert' }],
    time: 90,
    peopleToServe: 8,
    difficultyLevel: 3,
    ingredients: [
      { subcategory: 'Dairy', quantity: '500g', name: 'Cream Cheese' },
      { subcategory: 'Sweeteners', quantity: '200g', name: 'Sugar' },
      { subcategory: 'Eggs', quantity: '4', name: 'Eggs' },
      { subcategory: 'Crust', quantity: '200g', name: 'Graham Crackers' },
    ],
    instructions: [
      {
        step: 1,
        description: 'Prepare the crust by crushing graham crackers and mixing with melted butter.',
      },
      { step: 2, description: 'Press the crust mixture into the bottom of a springform pan.' },
      { step: 3, description: 'Beat the cream cheese with sugar until smooth.' },
      { step: 4, description: 'Add eggs one at a time, mixing well after each addition.' },
      {
        step: 5,
        description:
          'Pour the filling over the crust and bake in a water bath at 160°C for 50 minutes.',
      },
      {
        step: 6,
        description: 'Allow the cheesecake to cool and chill in the refrigerator before serving.',
      },
    ],
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
    peopleToServe: 6,
    difficultyLevel: 2,
    ingredients: [
      { subcategory: 'Pasta', quantity: '250g', name: 'Pasta Sheets' },
      { subcategory: 'Meat', quantity: '500g', name: 'Ground Beef' },
      { subcategory: 'Sauce', quantity: '500ml', name: 'Tomato Sauce' },
      { subcategory: 'Dairy', quantity: '200g', name: 'Cheese' },
      { subcategory: 'Vegetables', quantity: '100g', name: 'Onions' },
      { subcategory: 'Flavorings', quantity: '20g', name: 'Garlic' },
    ],
    instructions: [
      { step: 1, description: 'Sauté onions and ground beef until browned.' },
      { step: 2, description: 'Add tomato sauce and simmer for 20 minutes.' },
      { step: 3, description: 'Layer pasta sheets, meat sauce, and cheese in a baking dish.' },
      { step: 4, description: 'Repeat layers and finish with a layer of cheese.' },
      { step: 5, description: 'Bake in the oven at 180°C for 30 minutes until golden.' },
    ],
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
    peopleToServe: 2,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Vegetables', quantity: '2', name: 'Tomatoes' },
      { subcategory: 'Dairy', quantity: '200g', name: 'Mozzarella' },
      { subcategory: 'Herbs', quantity: '10g', name: 'Basil' },
      { subcategory: 'Condiments', quantity: '2 tbsp', name: 'Olive Oil' },
    ],
    instructions: [
      { step: 1, description: 'Slice tomatoes and mozzarella.' },
      { step: 2, description: 'Layer the slices with basil leaves.' },
      { step: 3, description: 'Drizzle with olive oil and sprinkle with salt.' },
    ],
  },
  {
    image: 'fish-tacos.png',
    name: 'Fish Tacos',
    title: 'Zesty and flavorful street-style tacos.',
    categories: [{ id: 2, name: 'fish' }],
    time: 25,
    peopleToServe: 3,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Protein', quantity: '300g', name: 'White Fish Fillets' },
      { subcategory: 'Grains', quantity: '8', name: 'Tortillas' },
      { subcategory: 'Vegetables', quantity: '100g', name: 'Cabbage' },
      { subcategory: 'Condiments', quantity: '1', name: 'Lime' },
      { subcategory: 'Sauces', quantity: '50ml', name: 'Salsa' },
    ],
    instructions: [
      { step: 1, description: 'Season the fish and pan-fry until cooked through.' },
      { step: 2, description: 'Assemble the tacos by placing fish in tortillas.' },
      { step: 3, description: 'Top with shredded cabbage, sauce, and a squeeze of lime juice.' },
    ],
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
    peopleToServe: 4,
    difficultyLevel: 1,
    ingredients: [
      { subcategory: 'Protein', quantity: '300g', name: 'Chicken Breast' },
      { subcategory: 'Grains', quantity: '250g', name: 'Fettuccine' },
      { subcategory: 'Dairy', quantity: '200ml', name: 'Cream' },
      { subcategory: 'Dairy', quantity: '100g', name: 'Parmesan Cheese' },
      { subcategory: 'Fats', quantity: '50g', name: 'Butter' },
    ],
    instructions: [
      { step: 1, description: 'Cook the fettuccine according to package instructions.' },
      { step: 2, description: 'Sauté the chicken until cooked through.' },
      { step: 3, description: 'Add cream and parmesan cheese to create the Alfredo sauce.' },
      { step: 4, description: 'Combine the cooked fettuccine with the sauce and chicken.' },
      { step: 5, description: 'Serve hot and garnish with additional parmesan if desired.' },
    ],
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
          const categoryIds = categories.map(cat => cat.id)
          await newRecipe.$set('categories', categoryIds)
          console.log(`Categories ${categories} are settet to recipe ${newRecipe.name}`)
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
