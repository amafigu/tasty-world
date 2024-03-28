import express, { Request, Response, Router } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const recipies = [
            {
                id: 1,
                imagePath: "meat.jpg",
                title: 'barbecue',
                subtitle: 'In someplace there is no better option than a barbecue....',
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
            }

        ]
        return res.status(200).json(recipies)
    } catch(error) {
       return res.status(500).json({error: 'error by getting recipies'})
    }
})


export default router