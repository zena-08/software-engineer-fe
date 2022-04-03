import React, { useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./add-movie.js";
import WatchList from "./watch-list.js";
import WatchedMovies from "./watched-movies.js";
import { MoviesContext } from "./context/movies-context.js";

const baseMovieList = {
  "movies-all": [
    {
      title: "The Avengers",
      image:
        "http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg",
      comment: "New York blows up in this!"
    },
    {
      title: "Dark City",
      image: "https://i.chzbgr.com/full/5569379584/hA96709E0/",
      comment: "This looks mysterious. Cool!"
    },
    {
      title: "Hot Tub Time Machine",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg",
      comment: "Someone said this was fun. Maybe!"
    }
  ],
  "movies-watched": []
};

export default function App() {
  const [moviesList, setMoviesList] = useState();

  useEffect(() => {
    // set initial state when component mounts
    const localStorageList = localStorage;
    if (localStorageList?.length > 0) {
      let newList = {};
      newList["movies-all"] = JSON.parse(localStorage.getItem("movies-all"));
      newList["movies-watched"] = JSON.parse(
        localStorage.getItem("movies-watched")
      );
      setMoviesList(newList);
    } else {
      setMoviesList(baseMovieList);
      localStorage.setItem(
        "movies-all",
        JSON.stringify(baseMovieList["movies-all"])
      );
      localStorage.setItem(
        "movies-watched",
        JSON.stringify(baseMovieList["movies-watched"])
      );
    }
  }, []);

  const updateMovieList = (movie, addTo, removeFrom) => {
    // common function to add and remove movies to and from the lists
    let updatedList = moviesList;
    updatedList[addTo].push(movie);
    if (removeFrom) {
      for (var i = 0; i < updatedList[removeFrom].length; i++) {
        if (!updatedList[removeFrom][i]) continue;
        if (updatedList[removeFrom][i].title === movie.title) {
          updatedList[removeFrom].splice(i, 1);
        }
      }
    }
    setMoviesList({ ...updatedList });
    localStorage.setItem(
      "movies-all",
      JSON.stringify(updatedList["movies-all"])
    );
    localStorage.setItem(
      "movies-watched",
      JSON.stringify(updatedList["movies-watched"])
    );
  };

  return (
    <MoviesContext.Provider
      value={{ list: moviesList, updateMovieList: updateMovieList }}
    >
      <div className="App">
        <h1>Codest Movies!</h1>
        <AddMovie />
        {moviesList && (
          <>
            <WatchList key="watch-list-component"/>
            <WatchedMovies key="watched-movies-component"/>
          </>
        )}
      </div>
    </MoviesContext.Provider>
  );
}
