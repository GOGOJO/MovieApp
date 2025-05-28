


const MovieList = (props) => {

  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies && props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div className="image-container col-auto" key={movie.imdbID || index}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ height: "300px", width: "200px", objectFit: "cover" }}
            />
            <div onClick = {props.handleFavouriteClick} className="overlay d-flex align-items-center justify-content-center">
              <FavouriteComponent/>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No movies found.</p>
      )}
    </>
  );
};

export default MovieList;
