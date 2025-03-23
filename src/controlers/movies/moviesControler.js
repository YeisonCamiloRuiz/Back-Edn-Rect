import connection from "../../config/config.js"

const getAllMovies = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM movies';

        connection.execute(query,(err,response) => {
            if (err) {
                reject("Ocurrrio un error al obtener la peliculas " , err);
            } else {
                resolve(response)
            }
        })
    })
}

export default getAllMovies;