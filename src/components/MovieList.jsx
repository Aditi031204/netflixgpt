import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies);
  return (
    <div className="px-6 py-1"> 
        <h1 className="m-2 font-bold text-xl text-gray-400">{title}</h1>
        <div className="flex overflow-x-scroll scroll-smooth no-scrollbar space-x-4 py-2 snap-x snap-mandatory">
            <div className="flex snap-center">
                {movies && movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}                
            </div>
        </div>
    </div>
  )
}

export default MovieList