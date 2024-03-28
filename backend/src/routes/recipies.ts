import express, { Request, Response, Router } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const recipies = [
            {
                id: 1,
                imagePath: "meat.jpg",
                title: 'Barbecue',
                subtitle: 'In a sommer day with friend there are few better options than a barbecue....',
                category: 'meat',
                readyIn: '70 minutes',
                recipeIngredients: 'meat, vegetables ... table ingredients',
                cookingStepts: 'first: make fire, second: prepare the meat and the salad'
            },{
                id: 2,
                imagePath: "pizza.jpg",
                title: 'Pizza bianca',
                subtitle: 'There are ocasion where everyone just loves pizza, why not to do that at home....',
                category: 'vegeratian',
                readyIn: '50 minutes',
                recipeIngredients: 'flour, tomato souce ... ingredients',
                cookingStepts: 'first: make dough, second: prepare the souce'
            },
            {
                id: 3,
                imagePath: "bowl.jpg",
                title: 'Asia express bowl',
                subtitle: 'Healthy tasty and easy to prepare....',
                category: 'vegeratian',
                readyIn: '20 minutes',
                recipeIngredients: 'Eggs, tomato, salad, corn ... ingredients',
                cookingStepts: 'first: slice the ingredients, second: prepare the peanuts souce'
            },
            {
                id: 4,
                imagePath: "fish.jpg",
                title: 'Special fish',
                subtitle: 'Healthy tasty and easy to prepare....',
                category: 'fish',
                readyIn: '40 minutes',
                recipeIngredients: 'Fish, tomato, salad, corn ... ingredients',
                cookingStepts: 'first: slice the fish, second: prepare the souce'
            },
            {
                id: 5,
                imagePath: "meatball.jpg",
                title: 'Speedy meat ball',
                subtitle: 'Tasty and easy to prepare....',
                category: 'meat',
                readyIn: '40 minutes',
                recipeIngredients: 'Meat, ruccola, salad ... ingredients',
                cookingStepts: 'first: slice the ingredients, second: prepare the peanuts souce'
            },
            {
                id: 6,
                imagePath: "burger.jpg",
                title: 'Veggie Burger Queen',
                subtitle: 'Healthy tasty and easy to prepare....',
                category: 'vegeratian',
                readyIn: '30 minutes',
                recipeIngredients: 'Eggs, tomato, salad, corn ... ingredients',
                cookingStepts: 'first: slice the ingredients, second: prepare the peanuts souce'
            }

        ]
        return res.status(200).json(recipies)
    } catch(error) {
       return res.status(500).json({error: 'error by getting recipies'})
    }
})


export default router