import connection from "../../config/config.js";
import generateId from "../../services/encryptionService.js"
import  Permissions from "../../models/enums/persmission-enum.js"

const register = async (email, password, userName, phone) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (Name, Email, Phone, Password, SessionId, Permissions) VALUES (?, ?, ?, ?, ?, ?)';

        const sessionId = generateId();

        connection.execute(query, [userName, email, phone, password, sessionId, Permissions.clinent], (err, results) => {
            if (err) {
                reject('Error al registrar el usuario:', err);
            } else {
                resolve(results);
            }
        });
    });
}

export default register;
