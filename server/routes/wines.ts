import { Router, Request, Response } from 'express'
import { Wine } from '../../typescript/wineTypes'
import db from '../knex'

const routes: Router = Router()

routes.use('/wines', async (req: Request, res: Response) => {
  try {
    const wines: Wine[] = await db('wines')
    res.status(200).send(wines)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.post('/wines', (req: Request, res: Response) => {
  const newWine: Wine = req.body
  return newWine
})

export default routes
