import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/:wineName', async (req, res) => {
    try {
        const { wineName } = req.params;
        const encounters = await db('encounters').where('name', wineName);
        res.status(200).send(encounters);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
