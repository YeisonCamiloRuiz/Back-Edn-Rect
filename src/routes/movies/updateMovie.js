import express from "express";
import {updateMovie} from "../../controlers/movies/updateMovie.js";

const router = express.Router();

router.put('movie', async (req, res) => {
    try {
        const { Id } = req.query;

        const movie = await updateMovie(Id);

        res.send(movie)
    } catch (error) {
        res.statusCode(500)
    }
})

export default router;