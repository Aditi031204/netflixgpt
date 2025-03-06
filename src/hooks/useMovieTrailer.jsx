import { options } from '../utils/constant'
import { addVideoTrailer } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const PlayingTrailer = useSelector((store)=> store.movies.VideoTrailer)

    const getMovieVideos = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options)
        const json = await data.json()
        // console.log(json);
        const trailer = json.results.filter((video)=>video.type === "Trailer");
        const nullTrailer = trailer.length ? trailer[0] : json.results[0];
        // console.log(nullTrailer)
        dispatch(addVideoTrailer(nullTrailer));
    }

    useEffect(()=>{
        !PlayingTrailer && getMovieVideos();
    },[]);
}

export default useMovieTrailer