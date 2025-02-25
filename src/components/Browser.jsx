import React from "react";
import Header from "./Header";
import usenowPlayingMovies from "../hooks/usenowPlayingMovies";

const Browser = () => {
  usenowPlayingMovies();
  
  return (
    <div>
      <Header/>
    </div>
  )
};

export default Browser