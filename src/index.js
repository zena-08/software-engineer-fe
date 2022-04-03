import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export function getWatchedMovies() {
	var movies = localStorage.getItem('movies-watched');

	if (!movies) {
		return [];
	} else {
		return JSON.parse(movies);
	}
}

export function getAllMovies() {
	var movies = localStorage.getItem('movies-all');
	/* the default list of movies could probably be saved in a constant.
	You could then set it as initial state in case nothing is found in local storage. */
	if (!movies) {			
		return [
		{
			title: 'The Avengers',
			image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
			comment: 'New York blows up in this!'
		},
		{
			title: 'Dark City',
			image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
			comment: 'This looks mysterious. Cool!'
		},
		{
			title: 'Hot Tub Time Machine',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
			comment: 'Someone said this was fun. Maybe!'
		},
		];
	} else {
		return JSON.parse(movies);
	}
}

// You could replace the following three functions with a common function and add or remove movies based on the parameters

export function add(title, description, image) {
	var movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;

	var movies = getAllMovies();
	movies.push(movie);

	localStorage.setItem('movies-all', JSON.stringify(movies));

	render();
}

export function addWatchedMovie(title, description, image) {	
	/* I noticed we can keep adding the same movie to the watched list more than once.
	We should also remove movie from Watch List. */
	var movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;

	var movies = getWatchedMovies();
	movies.push(movie);

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

export function removeWatchedMovie(title) {
	// Again I would assume we want to move it back to the Watch List on removing from here.
	var movies = getWatchedMovies();

	for (var i = 0; i < movies.length; i++) {
	   if (!movies[i]) continue;
		if (movies[i].title == title) {
			movies[i] = null
		}
	}

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

function render() {
	ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render(); 
/* You shouldn't have to call the render function each time there's a change. 
The purpose of using react is it will rerender anytime there's a change in it's state.
Perhaps you could make use of react hooks for this */

