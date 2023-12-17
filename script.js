// Q1 https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {

    constructor(title, studios, rating = "PG") {

        this.title = title;
        this.studios = studios;
        this.rating = rating;
    }

    get PG() {
        return `${this.studios} Produces, the movie name is ${this.title}, this Movie Got Highest Rating in this Year which is ${this.rating}`
    }
}
const Movie1 = new Movie("Casino Royale", "Eon Productions");
const Movie2 = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(Movie1.PG);
