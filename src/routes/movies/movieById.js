import express from "express";
import movieById from "../../controlers/movies/movieById.js";

const router = express.Router();

router.get('/movie-by-id', async (req, res) => {
    try {
        const { Id } = req.query;
        const movie = await movieById(Id)
        res.send(movie)
    } catch (error) {
        res.status(500).send("Hubu un error interno")
    }
});

export default router;