import { Router, Request, Response } from 'express'
import { WineEncounter } from '../../typescript/wineTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.get('/:wineName', async (req: Request, res: Response) => {
  try {
    const { wineName }  = req.params
    const encounters: WineEncounter[] = await db('encounters').where('name', wineName)
    res.status(200).send(encounters)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

// Still trying to get this route to go through. FOr some reason, the .del() is giving a weird error.
routes.get('/delete/:encounterId', async (req: Request, res: Response) => {
  try {
    const { encounterId }  = req.params
    const intEncounterId: number = +encounterId
    const encounter = await db('encounters').where('id', intEncounterId).del()
    res.status(200).send(encounter)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

export default routes
