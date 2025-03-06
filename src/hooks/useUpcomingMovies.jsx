import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = async() => {
  const dispatch = useDispatch()
  // const UpcomingMovies = useSelector((store)=> store.movies.nowUpcomingMovies)
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?page=1', 
    options
  );
  const json = await data.json()
  // console.log(json.results);
  dispatch(addUpcomingMovies(json.results));
  // !UpcomingMovies && useUpcomingMovies();
  
};

export default useUpcomingMovies;
