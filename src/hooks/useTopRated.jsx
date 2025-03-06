import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";

const useTopRated = async() => {
  const dispatch = useDispatch()
  // const TopRatedMovies = useSelector((store)=> store.movies.nowTopRated)
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?page=1', 
    options
  );
  const json = await data.json()
  // console.log(json.results);
  dispatch(addTopRated(json.results));
  // !TopRatedMovies && useTopRated();
  
};

export default useTopRated;
