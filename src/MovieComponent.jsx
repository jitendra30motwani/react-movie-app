import { movies } from "./data/movies";
import MovieListComponent from "./MovieListComponent";

const getMovies = () => {

    return movies;

}

const MovieComponent = () => {

    const moviesLocal = getMovies();

    return (

        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">

                {

                    moviesLocal.map((movie) =>

                        <MovieListComponent key={movie.id} movie={movie} />

                    )

                    /** moviesLocal.map((movie) => {

                        return <MovieListComponent key={movie.id} movie={movie} />

                    })**/


                }

            </ul>

        </div>


    );

}

export default MovieComponent;