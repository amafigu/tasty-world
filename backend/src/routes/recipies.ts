import express, { Request, Response, Router } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        return res.status(200).json({message: 'GET R'})
    } catch(error) {
       return res.status(500).json({error: 'error by getting recipies'})
    }
})


export default router