import React from "react";
import logo from "./google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const GoogleSignin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth, {sendEmailVerification: true});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
      navigate(from, { replace: true });
    }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Please wait...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Successfully Loged</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className=" btn bg-succes w-100 mx-auto border">
      <img style={{ width: "30px" }} src={logo} alt="" />
      <button
        onClick={() => signInWithGoogle()}
        style={{ background: "border-box" }}
        className="border-0"
      >
        Google Sign In
      </button>
    </div>
  );
};

export default GoogleSignin;