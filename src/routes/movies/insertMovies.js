import express from "express";
import insertMovie from "../../controlers/movies/insertMovie.js"

const router = express.Router();

router.post('/insert-movie', async (req,res) => {
    try {
        const { Name, Description, ImgUrl, Score, Comments, Author, TrailerUrl, Genre, Duration, ReleaseDate } = req.body;
        insertMovie(Name,Description, ImgUrl, Score, Comments, Author, TrailerUrl, Genre, Duration, ReleaseDate)
        res.send("Se interto correctamente")
        
    } catch (error) {
        res.status(400).send("Hay algo mal")
    }
});

export default router;