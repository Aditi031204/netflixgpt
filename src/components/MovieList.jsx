import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';
import BrifeMovieCard from './BriefMovieCard';

const MovieList = ({title, movies}) => {
    // console.log(movies);
const BriefMovieDetail = useSelector((store) => store.movies.BriefMovie);
  // console.log(briefMovieId)
  return (
    <div className="px-0 md:px-6 py-1"> 
        <h1 className="m-2 font-bold text-xl text-gray-400">{title}</h1>
        <div className="flex overflow-x-scroll scroll-smooth no-scrollbar space-x-4 py-2 snap-x snap-mandatory">
            <div className="flex snap-center">
                {movies && movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie}/>)}                
            </div>
            {BriefMovieDetail && <div className='fixed md:h-[79vh] h-[50vh] w-[65vw] md:top-[18%] top-[25%] left-[18%]'><BrifeMovieCard movieDetail={BriefMovieDetail}/></div>}
        </div>
    </div>
  )
}

export default MovieList