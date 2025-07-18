import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { userLogin,signUp } from '../firebase';
import netflex_spinner from '../assets/netflix_spinner.gif';
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmail('');
    setPassword('');
    setName('');
    if (isSignUp) {
      await signUp(name, email, password);
    } else {
      await userLogin(email, password);
    }
    setLoading(false);
  }

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    loading ? <div className='w-full h-screen bg-black flex items-center justify-center'> <img className='w-[50px]' src={netflex_spinner} alt="Loading..." /> </div> :
    <div id='mydiv' className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-12 mb-6" />

      {/* Form Box */}
      <div id='formdiv' className="  text-white p-8 rounded-md w-full max-w-sm shadow-md">
        <h2 className="text-2xl font-bold mb-6">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

        <form className="flex flex-col gap-4">
          {isSignUp && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Full Name"
              className="bg-[#333] text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email or phone number"
            className="bg-[#333] text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="bg-[#333] text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={user_auth}
            type="submit"
            className="bg-red-600 cursor-pointer hover:bg-red-700 transition-colors py-2 rounded-sm font-semibold"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {!isSignUp && (
          <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Need help?</a>
          </div>
        )}

        {/* Toggle Text */}
        <div className="mt-6 text-sm text-gray-400">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span onClick={toggleMode} className="text-white hover:underline cursor-pointer">
                Sign In
              </span>
            </>
          ) : (
            <>
              New to Netflix?{' '}
              <span onClick={toggleMode} className="text-white hover:underline cursor-pointer">
                Sign up now
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
