import connection from "../../config/config.js"

export const getAllMovies = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM movies';

        connection.execute(query,(err,respone) => {
            if (err) {
                reject("Ocurrrio un error al obtener la peliculas " , err);
            } else {
                resolve(respone)
            }
        })
    })
}