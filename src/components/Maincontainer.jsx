import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer';
import VideoTitle from './VideoTitle';

const Maincontainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null ) return; //early return

    const mainmovie = movies[0];
    console.log(mainmovie);

    const {original_title, overview} = mainmovie;
    
  return (
    <div>
        <VideoContainer title={original_title} overview={overview}/>
        <VideoTitle/>
    </div>
  )
}

export default Maincontainer