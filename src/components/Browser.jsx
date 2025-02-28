import React from "react";
import Header from "./Header";
import usenowPlayingMovies from "../hooks/usenowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browser = () => {
  usenowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/> 
    </div>
  )
};

export default Browser