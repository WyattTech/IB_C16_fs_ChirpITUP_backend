import db from './db';

const express = require('express');
const router = express.Router();
const chirpsRouter = require("./chirps");

// localhost:3000/api/chirps/
router.use("/chirps", chirpsRouter);

router.get('/api/content', async(req, res) =>{
    try {
        res.json(await db.Content.all());
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.export = router;