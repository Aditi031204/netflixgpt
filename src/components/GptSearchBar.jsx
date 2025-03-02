import React from 'react';
import lang from '../utils/LanguageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12">
        <input type='text' className="p-4 col-span-10 m-3 bg-white" placeholder={lang[langKey].placeholder}/>
        <button className="py-2 px-4 col-span-2 cursor-pointer hover:bg-red-700 m-4 bg-red-600 font-semibold text-white rounded-md">{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar