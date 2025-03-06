import React from 'react';
import MovieList from './MovieList';
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className="bg-black">
      <div className="mt:0 md:-mt-45 relative z-20 ml-2">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPopularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.nowTopRated}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer