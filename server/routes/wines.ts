import { Router, Request, Response } from 'express'
import { Wine } from '../../typescript/wineTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.use('/allWines', async (req: Request, res: Response) => {
  try {
    const wines: Wine[] = await db('wines')
    res.status(200).send(wines)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.post('/postWine', async (req: Request, res: Response) => {
  try {
    const newWine = req.body
    await db('wines').insert(newWine)
    res.status(200).send(`${newWine.name} posted`)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

export default routes
