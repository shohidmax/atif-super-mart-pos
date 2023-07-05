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
        <div className="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
            <div className="hero min-h-screen bg-base-000">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                      <h1 className="text-5xl font-bold">Login now!</h1>
                      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <div className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input type="text" onBlur={handleEmailBlur} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Password</span>
                          </label>
                          <input type="text" placeholder="password" required onBlur={handlePasswordBlur} className="input input-bordered" />
                          <label className="label">
                            <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                            <Link to='/signup' className="label-text-alt linknpm install react-hot-toast link-hover">Signup</Link>
                          </label>
                        </div>
                        <div className="form-control mt-6">
                          <button onClick={handleUserSignIn} className="btn btn-primary">Login</button>
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