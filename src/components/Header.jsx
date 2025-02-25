import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userslice"
import { useEffect } from "react";
import { NET_LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
   const dispatch = useDispatch();
  const user = useSelector(store => store.user);

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

  return (
    <div className="absolute w-50 p-3 z-30 flex gap-237">
      <img src={NET_LOGO} alt="netflixlogo"/>
      {user && (<div className="flex gap-4 py-2">
        <img src="https://i.pinimg.com/736x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" className="w-[43px] h-fit mt-3 rounded-[5px]" alt="signInlogo"/>
        <button onClick={handleSignOut} className="bg-red-700 rounded-[5px] p-3 py-1 hover:bg-red-600 cursor-pointer text-white font-semibold">Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header