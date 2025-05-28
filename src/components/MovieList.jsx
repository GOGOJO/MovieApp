const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="movie-scroll-container">
      {props.movies && props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div className="image-container" key={movie.imdbID || index}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ height: "300px", width: "200px", objectFit: "cover" }}
            />
            <div
              onClick={() => props.handleFavouriteClicks(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;