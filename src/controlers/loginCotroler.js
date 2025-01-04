import connection from "../config/config.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import updateSessionId from "../services/updateSessionService.js";

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

                const newSessionId = uuidv4();

                await updateSessionId(email, newSessionId);

                const userSession = {
                    Name: user.Name,
                    Email: user.Email,
                    SessionId: newSessionId
                };

                resolve(userSession);
            } else {
                console.log("La contraseña es incorrecta.");
                reject('Contraseña incorrecta');
            }
        });
    });
};

export default login;
