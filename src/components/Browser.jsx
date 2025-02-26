import React from "react";
import Header from "./Header";
import usenowPlayingMovies from "../hooks/usenowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  usenowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/> 
      {/*
        MainContainer
         - VideoContainer
         - VideoTitle
        SecondaryContainer
         - MoviesList *n
            - Cards * n
      */}
    </div>
  )
};

export default Browser