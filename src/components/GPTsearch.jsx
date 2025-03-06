import React from 'react'
import GptSearchBar from './GptSearchBar'
import GetMovieSuggetion from './GetMovieSuggetion'
import { IMG_URL } from '../utils/constant';


const GPTsearch = () => {
  return (
    <div>
      <div className="fixed bg-black min-h-f min-w-fit -z-10 box-border">
          <img className="z-0 max-w-full" src= {IMG_URL} alt="logo" />
          <div className="absolute inset-0 bg-black opacity-50"></div>       
      </div>
      <GptSearchBar/>
      <GetMovieSuggetion/>
    </div>
  )
}

export default GPTsearch