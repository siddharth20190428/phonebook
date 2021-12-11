import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../actions";
// import { db, auth, provider } from "../firebase";
import { LockClosedIcon } from "@heroicons/react/solid";
import "./home.css";

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
    <div className="home">
      <div className="center-box">
        <div className="left"></div>
        <div className="right">
          <div className="bg-sky-900 text-4xl p-4">hey</div>
          <div className="signUp"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
