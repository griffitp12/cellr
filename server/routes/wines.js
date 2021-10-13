import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.use('/allWines', async (req, res) => {
    try {
        const wines = await db('wines');
        res.status(200).send(wines);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.post('/postWine', async (req, res) => {
    try {
        const newWine = req.body;
        await db('wines').insert(newWine);
        res.status(200).send(`${newWine.name} posted`);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
