const MovieList = (props) => {
  return (
    <>
      {props.movies && props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div className="col-auto" key={movie.imdbID || index}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ height: "300px", width: "200px", objectFit: "cover" }}
            />
          </div>
        ))
      ) : (
        <p className="text-white">No movies found.</p>
      )}
    </>
  );
};

export default MovieList;
