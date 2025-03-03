import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGPTsearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to get Movie Results
    const gptQuery = "Act as a movie recomendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example given ahead. Example Result: Bhool bhulaiya, Shaadi mai jaroor aana, Koi mill gaya, Kabhi khushi kabhi gum, Andhadhun."
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GENAI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = searchText.current.value;
    const result = await model.generateContent(gptQuery);
    console.log(result.response.text());
    if (!result.response){
      // TODO: Writing Error Handling
    }
    const GenMovies = result.response.text().split(",")
    console.log(GenMovies);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 col-span-10 m-3 bg-white"
          placeholder={lang[langKey].placeholder}
        />
        <button
          className="py-2 px-4 col-span-2 cursor-pointer hover:bg-red-700 m-4 bg-red-600 font-semibold text-white rounded-md"
          onClick={handleGPTsearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
