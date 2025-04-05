import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config();

export const refreshToken = async (refreshToken) => {
    if (!refreshToken) throw new Error("El refreshToken es requerido");

    let payload;
    try {
        payload = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
        throw new Error("Refresh token inválido");
    }

    const newAccessToken = jwt.sign(
        { userId: payload.userId },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );
    
    const newRefreshToken = jwt.sign(
        { userId: payload.userId },
        process.env.REFRESH_SECRET,
        { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }
    );

    return { newAccessToken, newRefreshToken };
   
}