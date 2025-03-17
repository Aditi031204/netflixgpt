import React, { useRef, useState } from "react";
import { IMG_URL } from "../utils/constant";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handelButtonClick=()=>{
    //validate the data 
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if(!isSignInForm){
      //Sign Up logic   
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-" + errorMessage)
        });
    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
  }

  const toggleSignInForm= () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header/>      
      <div className="absolute h-full">
          <img className="h-screen object-cover md:w-screen md:h-145.6" src= {IMG_URL} alt="logo" />
          <div className="absolute inset-0 bg-black opacity-50"></div>       
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-12/12 md:w-4/12 md:h-[94.5%] md:mt-7.5 h-8/12 absolute px-7 py-8 bg-black my-36 z-30 mx-auto right-0 left-0 text-white opacity-80">
        <h1 className="font-bold text-2xl md:text-[30px] m-2 ml-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text" placeholder="Email or mobile number" className="my-2 p-4 mt-4 mb-3 ml-6 h-15 border border-gray-400 w-80 rounded-[5px]" ref={email}/>
        <input type="password" placeholder="Password" className="my-2 p-4 mt-1 mb-3 ml-6 h-15 border border-gray-400 w-80 rounded-[5px]" ref={password}/>
        <p className="text-red-600 ml-5 p-2">{errorMessage}</p>
        <button className="my-2 p-2 ml-6 w-80 bg-red-600 hover:bg-red-700 opacity-100 rounded-[5px] font-semibold cursor-pointer text-white transition-all duration-300 ease-in-out shadow-lg" onClick={handelButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <h1 className="text-gray-200 text-center my-1">OR</h1>
        {isSignInForm && (<button className="my-2 p-2 ml-6 w-80 bg-[rgba(136,135,135,0.4)] hover:bg-[rgba(104,103,103,0.4)] rounded-[5px] font-semibold cursor-pointer text-white transition-all duration-300 ease-in-out shadow-lg">Use a sign-in code</button>)}
        <h1 className="text-gray-200 text-center my-1 cursor-pointer hover:underline hover:text-[rgba(225,221,221,0.87)]">Forgot password?</h1>
        <label className="ml-6 mt-4 flex items-center gap-2.5">
          <input type="checkbox" className="scale-150 cursor-pointer" />
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