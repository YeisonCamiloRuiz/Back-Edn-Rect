import connection from "../../config/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();


const login = (email, password) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE Email = ?', [email], async (err, results) => {
            if (err) {
                console.error('Error en la consulta:', err);
                reject('Error en la consulta');
                return;
            }

            if (results.length === 0) {
                console.log("No se encontró el usuario con ese correo electrónico.");
                reject('Usuario no encontrado');
                return;
            }

            const user = results[0];

            const isPasswordValid = await bcrypt.compare(password, user.Password);
            
            if (isPasswordValid) {
                console.log("Inicio de sesión exitoso.");

                const token = jwt.sign(
                    { email: user.Email, name: user.Name },
                    process.env.JWT_SECRET,
                    { expiresIn: process.env.JWT_EXPIRES_IN }
                );

                resolve({token});
            } else {
                console.log("La contraseña es incorrecta.");
                reject('Contraseña incorrecta');
            }
        });
    });
};

export default login;
