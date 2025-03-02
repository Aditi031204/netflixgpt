import React from "react";
import Header from "./Header";
import usenowPlayingMovies from "../hooks/usenowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGPTSearch = useSelector((store) => store.gpt.ShowGPTsearch)

  usenowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  
  return (
    <div>
      <Header/>
      {showGPTSearch ? (<GPTsearch/>) : (
        <>
          <Maincontainer/>
          <SecondaryContainer/> 
        </>
      ) }
    </div>
  )
};

export default Browser