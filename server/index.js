import express from 'express';
import 'dotenv/config';
// import typeDefs from './graphql/schema.js';
// import resolvers from './graphql/resolvers.js';
// import { ApolloServer } from 'apollo-server-express';
import db from './knex.js';
// import users from './routes/users'
// import wines from './routes/wines'
const app = express();
const port = process.env.EXPRESS_PORT || 3000;
const setupServer = async () => {
    console.log('running migrations');
    await db.migrate.latest();
    console.log('running seeds');
    await db.seed.run();
    app.use('/users', async (req, res) => {
        try {
            const users = await db('users');
            res.status(200).send(users);
        }
        catch (err) {
            res.status(500);
            res.send(err);
        }
    });
    app.use('/wines', async (req, res) => {
        try {
            const wines = await db('wines');
            res.status(200).send(wines);
        }
        catch (err) {
            res.status(500);
            res.send(err);
        }
    });
    app.listen(port, () => {
        console.log('app listening at port: ', port);
    });
};
setupServer();
