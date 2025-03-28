import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const Maincontainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null ) return; //early return

    const mainmovie = movies[0];
    // console.log(mainmovie);

    const {original_title, overview, id} = mainmovie;
    
  return (
    <div className='pt-[37%] w-full h-full md:pt-0 scrollbar-hide::-webkit-scrollbar scrollbar-hide'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId ={id}/>
    </div>
  )
}

export default Maincontainer