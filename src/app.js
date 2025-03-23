import express from "express";
import cors from "cors";  // Importa el paquete cors
import movieRoutes from "./routes/movies/listMovies.js";
import insertMovieRoute from "./routes/movies/insertMovies.js"
import movieByIdRoute from "./routes/movies/movieById.js"
import loginRoutes from "./routes/auth/login.js"
import registerRoutes from "./routes/auth/register.js"
import updateMovie from "./routes/movies/updateMovie.js";

const app = express();

app.use(express.json())
app.use(cors());

app.use('/movies',movieRoutes);
app.use('/movies', insertMovieRoute);
app.use('/movies', movieByIdRoute);
app.use('/movies', updateMovie);


app.use('/auth',loginRoutes);
app.use('/auth',registerRoutes);

export default app;