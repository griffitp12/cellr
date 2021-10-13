import express, { Request, Response } from 'express'
import 'dotenv/config'
import db from './knex.js'
import users from './routes/users.js'
import wines from './routes/wines.js'

const port = process.env.EXPRESS_PORT || 3000

const setupServer = async () => {
  // Initialize express
  const app = express()
  // migrations and seeds
  console.log('running migrations')
  await db.migrate.latest()
  console.log('running seeds')
  await db.seed.run()

  //Middleware
  app.use(express.json())

  // API routes
  app.use('/users', users)
  app.use('/wines', wines)

  

  app.listen(port, () => {
    console.log('app listening at port: ', port)
  })
}

setupServer()