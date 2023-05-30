
const MovieListComponent = ({ movie }) => {

    return (

        <li className="movie" key={movie.id} >

            <p>{movie.title} directed by {movie.director} in year {movie.year}</p>
            <img src={movie.poster} alt={movie.title}></img>
            <p>Rating: {movie.rating}</p>

        </li >

    );

}

export default MovieListComponent;