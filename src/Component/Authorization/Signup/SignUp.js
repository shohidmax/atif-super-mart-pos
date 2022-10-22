import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const HandleSignup = () =>{
    console.log(password && confirmPassword);
    if (password && confirmPassword) {
      
    }
    createUserWithEmailAndPassword(email, password);
  }

  if (user) {
      navigate(from, { replace: true });
    }

console.log(user);

  // if (password !== confirmpassword) {
    //     setError("Please Provide Same password");
    //     return;
    //   }
    //   if (password.length < 6) {
    //     setError("Minimum 6 caracters Or More");
    //     return;
    //   }
    //   if(loading){
    //     return <Spinner></Spinner>
    //   }
    //   console.log(email, password);
    //   createUserWithEmailAndPassword(email, password);
    // };
    // if (user) {
    //   navigate(from, { replace: true });
    // }



  
  // const handleCreateUser = event => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
    
  //   const password = event.target.password.value;
  //   const confirmpassword = event.target.confirmpassword.value;
  //   console.log(email, password);
  //   if (password !== confirmpassword) {
  //     setError("Please Provide Same password");
  //     return;
  //   }
  //   if (password.length < 6) {
  //     setError("Minimum 6 caracters Or More");
  //     return;
  //   }
  //   if(loading){
  //     return <Spinner></Spinner>
  //   }
  //   console.log(email, password);
  //   createUserWithEmailAndPassword(email, password);
  // };
  // if (user) {
  //   navigate(from, { replace: true });
  // }

  

    return (
        <div>
            <h1>Please Login</h1>
            <div className=' lg:w-3/4 mx-auto'>
            <div class="hero min-h-screen bg-base-000">
                  <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                      <h1 class="text-5xl font-bold">SignUp now!</h1>
                      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <div class="card-body">
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Name</span>
                          </label>
                          <input type="text" placeholder="Your Name" class="input input-bordered" required/>
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Email</span>
                          </label>
                          <input type="text" onChange={handleEmailBlur} placeholder="Email" class="input input-bordered" required/>
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Password</span>
                          </label>
                          <input type="password" onChange={handlePasswordBlur} placeholder="Password" class="input input-bordered" required/>
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Password</span>
                          </label>
                          <input type="password" onChange={handleConfirmPasswordBlur} placeholder="Password" class="input input-bordered" required />
                          <label class="label">
                            <button href="#" class="label-text-alt link link-hover">Forgot password?</button>
                            <Link to='/login' class="label-text-alt btn-link link-hover">Signin</Link>
                          </label>
                        </div>
                        <div class="form-control mt-6">
                          <button onClick={HandleSignup} class="btn btn-primary">SignUp</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;