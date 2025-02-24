import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut= () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-50 p-3 z-30 flex gap-237">
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflixlogo"/>
      {user && (<div className="flex gap-4 py-2">
        <img src="https://i.pinimg.com/736x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" className="w-[43px] h-fit mt-3 rounded-[5px]" alt="signInlogo"/>
        <button onClick={handleSignOut} className="bg-red-700 rounded-[5px] p-3 py-1 hover:bg-red-600 cursor-pointer text-white font-semibold">Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header