import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = async() => {
  const dispatch = useDispatch()
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/popular?page=1', 
    options
  );
  const json = await data.json()
  // console.log(json.results);
  dispatch(addPopularMovies(json.results));
  
};

export default usePopularMovies;
