import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usenowPlayingMovies = async() => {
  const dispatch = useDispatch()
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?page=1', 
    options
  );
  const json = await data.json()
  // console.log(json.results);
  dispatch(addNowPlayingMovies(json.results));
  
};


export default usenowPlayingMovies;
