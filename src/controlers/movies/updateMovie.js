import connection from "../../config/config.js";

export const updateMovie = (id, data) => {
    return new Promise((resolve, reject) => {
        let fields = Object.keys(data).map(key => `${key} = ?`).join(", ");
        let values = Object.values(data);
        
        const query = `UPDATE movies SET ${fields} WHERE id = ?`;
        values.push(id); 
        
        connection.query(query, values, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

export default updateMovie;