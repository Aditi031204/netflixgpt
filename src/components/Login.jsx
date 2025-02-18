import React, { useState } from "react";
import { IMG_URL } from "../utils/constant";
import Header from "./header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm= () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>      
      <div className="absolute">
          <img className="bg-black bg-opacity-60" src= {IMG_URL} alt="logo" />       
      </div>
      <form className="w-4/12 h-12/12 absolute px-7 py-8 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-20">
        <h1 className="font-bold text-[30px] m-2 ml-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text" placeholder="Email or mobile number" className="my-2 p-4 mt-4 mb-3 ml-6 h-15 border border-gray-400 w-80 rounded-[5px]"/>
        <input type="password" placeholder="Password" className="my-2 p-4 mt-1 mb-3 ml-6 h-15 border border-gray-400 w-80 rounded-[5px]"/>
        <button className="my-2 p-2 ml-6 w-80 bg-red-700 rounded-[5px] font-semibold">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <h1 className="text-gray-200 text-center my-1">OR</h1>
        {isSignInForm && (<button className="my-2 p-2 ml-6 w-80 bg-gray-600 rounded-[5px] font-semibold">Use a sign-in code</button>)}
        <h1 className="text-gray-200 text-center my-1">Forgot password?</h1>
        <label className="ml-6 mt-4 flex items-center gap-2.5">
          <input type="checkbox" className="scale-150" />
          Remember me
        </label>
        <div className="flex flex-row">
          <h1 className="text-gray-200 mt-4 ml-5">{isSignInForm ? "New to netflix?" : "Already Registred?"}</h1>
          <h1 className="text-gray-200 mt-4 px-1 font-semibold cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign in now."}</h1>
        </div>
      </form>
    </div>
  )
};

export default Login