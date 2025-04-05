import express from "express";
import { refreshToken } from "../../services/auth.service.js";
import authenticateJWT from "../../middlewares/validateToken.js"

const router = express.Router();

router.post('/refresh-token',authenticateJWT, async (req, res) => {
    const { refreshTokenBody } = req.body;
    try {
        const userSession = await refreshToken(refreshTokenBody);
        res.send(userSession);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al iniciar sesión");
    }
});

export default router;