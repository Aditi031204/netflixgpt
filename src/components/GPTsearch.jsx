import React from 'react'
import GptSearchBar from './GptSearchBar'
import GetMovieSuggetion from './GetMovieSuggetion'
import { IMG_URL } from '../utils/constant';


const GPTsearch = () => {
  return (
    <> 
    <div className="fixed bg-black min-h-f min-w-fit -z-10 box-border">
      <img className=" h-screen object-cover md:w-screen" src= {IMG_URL} alt="logo" />
      <div className="fixed inset-0 bg-black opacity-50"></div>       
    </div>
    <div className=''>
      <GptSearchBar/>
      <GetMovieSuggetion/>
    </div>
    </>
  )
}

export default GPTsearch