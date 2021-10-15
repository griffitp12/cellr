import { Router, Request, Response } from 'express'
import { WineEncounter } from '../../typescript/wineTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.get('/:wineName', async (req: Request, res: Response) => {
  try {
    console.log('hi')
    const wineName  = req.params
    console.log(req.params)
    //const encounters: WineEncounter[] = await db('encounters').where()
    res.status(200).send(wineName)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

export default routes
