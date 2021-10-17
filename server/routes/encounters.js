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

routes.delete('/delete/:encounterId', async (req, res) => {
    try {
        const { encounterId } = req.params;
        const intEncounterId = +encounterId;
        await db('encounters').where('id', intEncounterId).del()
        res.status(200).end()
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});

routes.delete('/deleteAll/:wineName', async (req, res) => {
    try {
        const { wineName } = req.params;
        await db('encounters').where('name', wineName).del()
        res.status(200).end()
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
