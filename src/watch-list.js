import React from "react";
import { MoviesContext } from "./context/movies-context.js";
import { MoviesContainer } from "./movies-container.js";

const WatchList = () => {
  return (
    <MoviesContext.Consumer>
      {({ list, updateMovieList }) => (
        <div className="watch-list">
          <h1>Watchlist</h1>
          <MoviesContainer>
            {list["movies-all"] &&
              list["movies-all"].map((movie) => (
                <div className="all" key={movie.title}>
                  <div>
                    <img src={movie.image} height="100px" />
                  </div>
                  <span>
                    <div
                      className="movie-watched"
                      onClick={() => {
                        updateMovieList(movie, "movies-watched", "movies-all");
                      }}
                    >
                      {movie.title}
                    </div>
                  </span>
                  <br />
                  <span>{movie.comment}</span>
                  <br />
                  <br />
                </div>
              ))}
            {list["movies-all"].length === 0 && <h1>No movies to watch</h1>}
          </MoviesContainer>
        </div>
      )}
    </MoviesContext.Consumer>
  );
};

export default WatchList;
