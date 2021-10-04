import express from 'express'
import 'dotenv/config'
// import typeDefs from './graphql/schema.js';
// import resolvers from './graphql/resolvers.js';
// import { ApolloServer } from 'apollo-server-express';
import db from './knex.js'

const app = express()
const port = process.env.EXPRESS_PORT || 3000

const setupServer = async () => {
  console.log('running migrations')
  await db.migrate.latest()
  console.log('running seeds')
  await db.seed.run()
  app.listen(port, () => {
    console.log('app listening at port: ', port)
  })
}

setupServer()
