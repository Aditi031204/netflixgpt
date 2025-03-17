import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBriefMovie } from '../utils/moviesSlice';
import VideoBackground from './VideoBackground';
import { useEffect } from 'react';
import { options } from '../utils/constant';

const BrifeMovieCard = ({movieDetail}) => {
  const dispatch = useDispatch();
  const [movieTrailer, setMovieTrailer] = useState(null);
  console.log(movieDetail)
  const handleClose = () => {
    dispatch(addBriefMovie(null));
  }

  useEffect(()=>{getMovieVideos()},[])
  // console.log(movieTrailer)

  const getMovieVideos = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieDetail.id+"/videos?language=en-US", options)
        const json = await data.json()
        // console.log(json);
        const trailer = json.results.filter((video)=>video.type === "Trailer");
        const nullTrailer = trailer.length ? trailer[0] : json.results[0];
        // console.log(nullTrailer)
        setMovieTrailer(nullTrailer)
  }
  return (
    <div className='flex justify-between shadow-lg'>
      {console.log(movieTrailer)}
      <div>
      {movieTrailer && movieTrailer!== undefined ? <iframe 
            className="absolute w-full h-full aspect-video z-10 rounded-2xl"
            src={"https://www.youtube.com/embed/"+movieTrailer?.key + "?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0" }  
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> : <div className="absolute w-full h-full aspect-video z-10 rounded-2xl bg-black"></div>}
      </div>
      <div className='z-20 bg-gradient-to-r from-black md:h-[79vh] h-[50vh]'>
        <div className='flex-col'>
          <div className='p-2 m-2 ml-1 text-2xl text-white font-bold'>{movieDetail.title}</div>
          <div className='p-2 m-2 text-lg text-white'>[{movieDetail.release_date}]</div>
        </div>
        <div className='p-2 m-2 ml-1 text-white font-semibold md:w-8/12 w-full'>{movieDetail.overview}</div>
      </div> 
      <div className='z-20'>
        <button onClick={handleClose} className='cursor-pointer p-4 m-2 flex items-end'>❌</button>
      </div> 
    </div>
  )
}

export default BrifeMovieCard;