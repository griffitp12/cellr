import express, {Request, Response} from 'express'
import { UserData } from 'typescript/authTypes.js'
import 'dotenv/config'
// import typeDefs from './graphql/schema.js';
// import resolvers from './graphql/resolvers.js';
// import { ApolloServer } from 'apollo-server-express';
import db from './knex.js'
// import users from './routes/users'
// import wines from './routes/wines'

const app = express()
const port = process.env.EXPRESS_PORT || 3000

const setupServer = async () => {
  console.log('running migrations')
  await db.migrate.latest()
  console.log('running seeds')
  await db.seed.run()

  app.use('/users', async (req: Request, res: Response) => {
    try {
        const users: UserData[] = await db('users')
        res.status(200).send(users)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
  })
  // app.use('/wines', wines)

  app.listen(port, () => {
    console.log('app listening at port: ', port)
  })
}

setupServer()
