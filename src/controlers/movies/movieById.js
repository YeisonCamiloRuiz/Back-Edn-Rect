import connection from "../../config/config.js";

const movieById = async (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM movies WHERE Id = ?'

        connection.execute(query,[id], (err, response) =>{
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    })
}

export default movieById;