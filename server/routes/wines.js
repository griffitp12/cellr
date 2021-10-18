import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/allWines', async (req, res) => {
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
routes.delete('/deleteWine/:wine_id', async (req, res) => {
    try {
        const { wine_id } = req.params;
        const int_wine_id = +wine_id;
        await db('wines').where('id', int_wine_id).del();
        res.status(200).end();
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
