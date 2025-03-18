import React from 'react'
import {useSelector} from "react-redux";
import MovieList from './MovieList';


const GetMovieSuggetion = () => {
  const {MovieNames, MovieResults} = useSelector((store) => store.gpt);
  if (!MovieNames) return null;
  // console.log(MovieNames)

  return (
    <div className="bg-black p-3 mt-5 mx-3 opacity-85">
      <div>
        {MovieNames.map((MovieNames, index) => (
          <MovieList 
            key={MovieNames}
            title={MovieNames}
            movies={MovieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GetMovieSuggetion