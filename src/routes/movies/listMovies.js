import express from "express";
import { getAllMovies } from "../../controlers/movies/moviesControler.js"

const router = express.Router();

router.get('/list',async (req,res) => {
    try {
        const movies = await getAllMovies();
        res.send(movies);
    } catch (error) {
        res.status(500).send("Error interno")
    }
})

export default router;