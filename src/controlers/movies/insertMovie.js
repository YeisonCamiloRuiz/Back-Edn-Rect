import connection from "../../config/config.js";

const insertMovie = async ( name, description, imgUrl, score, comments, author, trailerUrl, genre, duration, releaseDate) => {
    new Promise((resolve, reject) => {
        const query = 'INSERT INTO movies (Name, Description, ImgUrl, Score, Comments, Author, TrailerUrl, Genre, Duration, ReleaseDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        connection.execute(query, [name,description,imgUrl,score,comments,author,trailerUrl,genre,duration,releaseDate], (err, response) => {
            if(err){
                reject(err);
            } else {
                resolve(response)
            }
        })
    })
}

export default insertMovie;