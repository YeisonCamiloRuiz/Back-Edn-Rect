import express from "express";
import cors from "cors";  // Importa el paquete cors
import movieRoutes from "./routes/movies.js";
import loginRoutes from "./routes/login.js"
import registerRoutes from "./routes/register.js"

const app = express();

app.use(express.json())

app.use('/',movieRoutes);

app.use(cors());

app.use('/auth',loginRoutes);

app.use('/auth',registerRoutes);

export default app;