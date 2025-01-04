import express from "express";

const router = express.Router();

router.get('/list',(req,res) => {
    res.send([
        "Matrix","Avengers","Red"
    ])
})

export default router;