import express from "express";
import login from "../../controlers/auth/loginCotroler.js";
import authenticateJWT  from "../../middlewares/validateToken.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        console.log(email)
        const userSession = await login(email, password);
        console.log(userSession + "Hola");
        res.send(userSession);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al iniciar sesión");
    }
});

export default router;

