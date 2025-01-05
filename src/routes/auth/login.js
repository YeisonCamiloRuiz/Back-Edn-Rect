import express from "express";
import login from "../../controlers/auth/loginCotroler.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    
    try {
        const userSession = await login(Email, Password);
        console.log(userSession + "Hola");
        res.send(userSession);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al iniciar sesión");
    }
});

export default router;

