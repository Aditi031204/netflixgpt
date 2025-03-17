import React, { useEffect, useState } from "react";
import Header from "./Header";
import usenowPlayingMovies from "../hooks/usenowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";
import BrifeMovieCard from "./BriefMovieCard";

const Browser = () => {
  const showGPTSearch = useSelector((store) => store.gpt.ShowGPTsearch)

  usenowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  
  return (
    <div className="no-scrollbar">
      <Header/>
      {showGPTSearch ? (<GPTsearch/>) : (
        <div>
          <Maincontainer/>
          <SecondaryContainer/> 
        </div>
      ) }
    </div>
  )
};

export default Browser