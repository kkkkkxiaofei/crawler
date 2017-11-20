import express from 'express';

const getRouter = () => {
    const router = express.Router();
    router.get('/start', (req, res) => {
        try {
            res.status(200).end();
        } catch(e) {
            console.log('failed caused by - ', e.message);
            res.status(500).end();
        }
    });
    return router;
};

export default getRouter;
