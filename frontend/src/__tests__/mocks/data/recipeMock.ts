export const recipeMock = {
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
}
