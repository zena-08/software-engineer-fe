import React, { useState, useEffect } from "react";
import { MoviesContext } from "./context/movies-context.js";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (title && image) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }, [title, image]);

  const addMovie = (updateMovieList) => {
    updateMovieList({ title, image, comment }, "movies-all");
    setAdd(false);
    setTitle("");
    setImage("");
    setComment("");
  };

  return (
    <MoviesContext.Consumer>
      {({ updateMovieList }) => (
        <div className="add-movie">
          <h1>Add movie!</h1>
          <b>
            TITLE:
            <br />
            <input
              type="text"
              value={title}
              maxLength="100"
              onChange={(e) => {
                if (e.target.value.replace(/\s/g, '').length > 0) {
                    setTitle(e.target.value);
                } else {
                    setTitle('');
                }
              }}
            />
          </b>
          <br />
          <b>
            IMAGE URL:
            <br />
            <input
              type="text"
              value={image}
              onChange={(e) => {
                if (e.target.value.replace(/\s/g, '').length > 0) {
                    setImage(e.target.value);
                } else {
                    setImage('');
                }
              }}
            />
          </b>
          <br />
          <b>
            COMMENT:
            <br />
            <input
              type="text"
              maxLength="100"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </b>
          <br />
          <input
            className="add-movie-button"
            type="button"
            disabled={!add}
            onClick={() => addMovie(updateMovieList)}
            value="ADD MOVIE"
          />
        </div>
      )}
    </MoviesContext.Consumer>
  );
};

export default AddMovie;
