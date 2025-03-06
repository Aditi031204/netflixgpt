import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userslice"
import { useEffect } from "react";
import { Language, NET_LOGO, SignIn_URL } from "../utils/constant";
import { toggleGPTsearchView } from "../utils/GptSlice";
import { changelanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const ShowGPTsearch = useSelector((store) => store.gpt.ShowGPTsearch)

  const handleSignOut= () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  },[]);

  const handleGPTsearchClick = () => {
    dispatch(toggleGPTsearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changelanguage(e.target.value))
  }

  return (
    <div className="fixed w-screen px-8 py-2 z-30 flex flex-col justify-between md:flex-row">
      <img src={NET_LOGO} alt="netflixlogo" className="w-44 justify-center mx-auto md:mx-0" />
      {user && (<div className="flex gap-4 py-2">
        {ShowGPTsearch && <select className="text-white" onChange={handleLanguageChange}>
          {Language.map((lang) => (<option className="bg-black" key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
        </select>}
        <button className="bg-purple-700 text-white px-3 py-0.5 m-2 rounded-md cursor-pointer hover:bg-purple-800" onClick={handleGPTsearchClick}>{ShowGPTsearch? "Homepage" : "GPT Search"}</button>
        <img src={SignIn_URL} className="w-[43px] h-fit mt-3" alt="signInlogo"/>
        <button onClick={handleSignOut} className="bg-red-700 rounded-[5px] px-2 hover:bg-red-600 cursor-pointer text-white font-semibold">Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header