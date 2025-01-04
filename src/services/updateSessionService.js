import connection from "../config/config.js";

const updateSessionId = (email, sessionId) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE users SET SessionId = ? WHERE Email = ?';

        connection.query(query, [sessionId, email], (err, results) => {
            if (err) {
                console.error('Error al actualizar el SessionId:', err);
                reject('Error al actualizar el SessionId');
                return;
            }

            if (results.affectedRows === 0) {
                reject('No se encontró el usuario con ese correo electrónico');
                return;
            }

            resolve('SessionId actualizado correctamente');
        });
    });
};

export default updateSessionId;
