import express from 'express'
import 'dotenv/config'
import db from './knex.js'
import users from './routes/users'
import wines from './routes/wines'

const app = express()
const port = process.env.EXPRESS_PORT || 3000

const setupServer = async () => {
  // migrations and seeds
  console.log('running migrations')
  await db.migrate.latest()
  console.log('running seeds')
  await db.seed.run()

  // API routes
  app.use('/users', users)
  app.use('/wines', wines)

  app.listen(port, () => {
    console.log('app listening at port: ', port)
  }) 
}

setupServer()
