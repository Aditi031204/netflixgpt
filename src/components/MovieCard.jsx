import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addBriefMovie } from '../utils/moviesSlice';

const MovieCard = ({posterPath, movie}) => {
  // console.log(movie)
  const dispatch = useDispatch();
  if (!posterPath) return null;
  const handleBriefPage = (BriefDetail) => {
    dispatch(addBriefMovie(BriefDetail))
    // console.log(BriefDetail);
  }
  return (
    <> 
    <div className="w-30 m-2 hover:scale-115 cursor-pointer" onClick={() => handleBriefPage(movie)}>
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
    </>
  )
};

export default MovieCard