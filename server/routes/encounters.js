import { Router } from 'express';
const routes = Router();
routes.get('/:wineName', async (req, res) => {
    try {
        console.log('hi');
        const wineName = req.params;
        console.log(req.params);
        //const encounters: WineEncounter[] = await db('encounters').where()
        res.status(200).send(wineName);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
