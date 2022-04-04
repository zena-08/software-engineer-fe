import React from "react";
import { MoviesContext } from "./context/movies-context.js";
import { MoviesContainer } from "./movies-container.js";

const WatchedMovies = () => {
  return (
    <MoviesContext.Consumer>
      {({ list, updateMovieList }) => (
        <div className="watched-movies">
          <h1>Already Watched</h1>
          <MoviesContainer>
            {list["movies-watched"] &&
              list["movies-watched"].map((movie) => (
                <div className="all" key={movie.title}>
                  <div>
                    <img alt="movie-pic" src={movie.image} height="100px" />
                  </div>
                  <span>
                    <div
                      className="movie-title"
                      onClick={() => {
                        updateMovieList(movie, "movies-all", "movies-watched");
                      }}
                    >
                      {movie.title}
                    </div>
                  </span>
                  <span>{movie.comment}</span>
                </div>
              ))}
            {list["movies-watched"].length === 0 && (
              <h1>You haven't watched any movies yet...</h1>
            )}
          </MoviesContainer>
        </div>
      )}
    </MoviesContext.Consumer>
  );
};

export default WatchedMovies;
