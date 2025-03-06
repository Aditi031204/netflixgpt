import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const usenowPlayingMovies = async() => {
  const dispatch = useDispatch()
  // const PlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)  //Memoization
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?page=1', 
    options
  );
  const json = await data.json()
  // console.log(json.results);
  dispatch(addNowPlayingMovies(json.results));

  // !PlayingMovies && usenowPlayingMovies();
  
};


export default usenowPlayingMovies;
