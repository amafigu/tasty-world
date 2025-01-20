export const recipesMock = [
  {
    id: '1',
    image: 'meat.png',
    name: 'Barbecue with Meat & Veggies',
    title: 'For a summer day with friends.',
    categories: [{ id: '1', name: 'meat' }],
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
    id: '2',
    image: 'pizza.png',
    name: 'Pizza Bianca from Toscana',
    title: 'Traditional Italian recipe.',
    categories: [
      { id: '4', name: 'vegetarian' },
      { id: '7', name: 'italian' },
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
]
