import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setUser } from "../../actions";
// import { db, auth, provider } from "../firebase";
import "./home.css";
import Card from "./Card";
import SignUp from "./SignUp";

const Home = () => {
  // SignIn / SignUp Logic
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     authUser ? dispatch(setUser(authUser)) : dispatch(setUser(null));
  //   });

  //   return () => {
  //     // perform some cleanup actions
  //     unsubscribe();
  //   };
  // }, [user, username]);

  // const signUp = (event) => {
  //   event.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((authUser) => {
  //       return authUser.user.updateProfile({
  //         displayName: username,
  //       });
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const signIn = (event) => {
  //   event.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((error) => alert(error.message));
  // };

  // const signInWithGoogle = () => {
  //   auth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       dispatch(setUser(result.user));
  //     })
  //     .catch((error) => alert(error.message));
  // };
  return (
    <div className="home bg-[#0047bc]">
      <div className="center-box">
        <div className="left ">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="right pt-12 px-8">
          <div className="">
            <button className="bg-green-500 py-2 px-4 rounded-3xl text-white shadow-sm outline-none ">
              Sign Up
            </button>
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
