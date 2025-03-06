import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className="w-30 m-2 hover:scale-115 cursor-pointer">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
};

export default MovieCard