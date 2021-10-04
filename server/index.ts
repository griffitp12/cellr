import express from "express";
import 'dotenv/config'
// import typeDefs from './graphql/schema.js';
// import resolvers from './graphql/resolvers.js';
// import { ApolloServer } from 'apollo-server-express';
import db from './knex.js';

const app = express()
const port = process.env.EXPRESS_PORT || 3000;

app.listen(port, () => {
    console.log('app listening at port: ', port)
})