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
// Still trying to get this route to go through. FOr some reason, the .del() is giving a weird error.
routes.delete('/delete/:encounterId', async (req, res) => {
    try {
        const { encounterId } = req.params;
        const intEncounterId = +encounterId;
        await db('encounters').where('id', intEncounterId).del();
        res.status(200).send(intEncounterId);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
