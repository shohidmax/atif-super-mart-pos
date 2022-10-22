import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleSignin from '../GoogleSignin/GoogleSignin';

const Login = () => {

  const emailRe = useRef('');
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleEmailBlur = event => {
      setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
      setPassword(event.target.value);
  }
  
  if (user) {
      navigate(from, {replace: true});
  }

  const handleUserSignIn = event => {
      event.preventDefault();
      signInWithEmailAndPassword(email, password);
  }
  const resetPassword = async () => {
      const email = emailRe.current.value;
      if (email) {
          await sendPasswordResetEmail(email);
          alert('Password Reset send');
      }
      else{
          
        <>
        <div class="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Your purchase has been confirmed!</span>
            </div>
          </div>
        </>
      }
  }


    return (
        <div>
            <h1>Please Login</h1>
            <div className=' lg:w-3/4 mx-auto'>
            <div class="hero min-h-screen bg-base-000">
                  <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                      <h1 class="text-5xl font-bold">Login now!</h1>
                      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <div class="card-body">
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Email</span>
                          </label>
                          <input type="text" onBlur={handleEmailBlur} placeholder="email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Password</span>
                          </label>
                          <input type="text" placeholder="password" required onBlur={handlePasswordBlur} class="input input-bordered" />
                          <label class="label">
                            <button href="#" class="label-text-alt link link-hover">Forgot password?</button>
                            <Link to='/signup' class="label-text-alt link link-hover">Signup</Link>
                          </label>
                        </div>
                        <div class="form-control mt-6">
                          <button onClick={handleUserSignIn} class="btn btn-primary">Login</button>
                        </div>
                        <div>
                          <GoogleSignin></GoogleSignin>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;