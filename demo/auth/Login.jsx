import React, { useState } from 'react';
import backgroundImage from '../data/Group 557.png'; 
import logo from '../data/Group 558.png'; // Adjust the path as necessary
import AuthTab from '../common/authTab/authTab';
import googleImg from '../data/google.png'; 
import GreenDotWithText from '../common/components/loginInstruction';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Icons for show/hide password
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";

import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('Sign up');
  const menuItems = ['Sign up', 'Log in'];
  const role = useSelector((state) => state.role);

  const [showPassword, setShowPassword] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const handleSelect = (label) => {
    setSelected(label);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleButton = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className="flex h-screen bg-background-color">
      {/* Left side with green background and image */}
      <div className="w-2/5 flex items-center justify-between" style={{ backgroundColor: '#00A762' }}>
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="object-cover h-full w-auto"
        />
         <AuthTab items={menuItems} selected={selected} onSelect={handleSelect} />
      </div>

      {/* Right side with form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-background-color rounded-lg align-middle">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-auto h-auto" />
          </div>

          {selected === 'Sign up' ? (
            <div>
              <h1 className="text-2xl font-bold text-center text-custom-green text-4xl">Getting started</h1>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='olivia@fidifunding.com'
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white">
                    <span className="ml-1 bg-white px-3 py-2">
                      {showPassword ? (
                        <IoLockClosedOutline style={{color:"#0A2759"}} onChange={togglePasswordVisibility} className="inline-block text-xl font-m" />
                      ) : (
                        <IoLockOpenOutline style={{color:"#0A2759"}} onChange={togglePasswordVisibility} className="inline-block text-xl font-m" />
                      )}
                    </span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'password' : 'text'}
                      autoComplete="current-password"
                      placeholder="************"
                      required
                      className="mt-1 block w-full px-3 py-2 sm:text-sm outline-none"
                    />
                    <span className="ml-1 bg-white px-3 py-2">
                      {showPassword ? (
                        <AiOutlineEyeInvisible style={{color:"#0A2759"}} onClick={togglePasswordVisibility} className="cursor-pointer inline-block font-m text-xl" />
                      ) : (
                        <AiOutlineEye style={{color:"#0A2759"}} onClick={togglePasswordVisibility} className="cursor-pointer inline-block font-m text-xl" />
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                    <div className='flex'>
                      <GreenDotWithText text="At least one letter" />
                      <GreenDotWithText text="At least 8 characters" />
                      </div>
                      <GreenDotWithText text="At least one number" />
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div>
                      {
                        toggleBtn? 
                        <BiSolidToggleRight onClick={toggleButton} className='text-custom-green text-4xl cursor-pointer'/> 
                        : <BiSolidToggleLeft onClick={toggleButton} className='text-slate-300 text-4xl cursor-pointer'/>
                      }
                    </div>
                    <div className={`${toggleBtn ? 'text-custom-green font-normal text-m' : 'text-slate-500 font-normal text-m'}`} >I agree to the <span className='font-medium'>Terms & Conditions</span></div>
                  </div>
                  <button
                  onClick={(() => navigate(role  == 'admin' ? '/business-analytics' : '/dashboard'))}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4" style={{ backgroundColor: '#00A762' }}
                  >
                    Sign up
                  </button>
                  <div className="flex justify-center mt-4">
                    Already have an account ? <span className='text-custom-green font-bold ml-1'> Sign in</span></div>
                </div>
                <div className="border-t-2 border-green-500 mt-2 w-36 mx-auto"></div>
                <button
                style={{color: '#0A2759'}}
                    type="submit"
                    className="w-full flex justify-center gap-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-google-button-color hover:bg-google-button-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green mt-8"
                  >
                  <img src={googleImg} alt="googleIcon" />  Sign up with Google
                  </button>
              </form>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-center text-custom-green text-4xl">Welcome again</h1>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='olivia@fidifunding.com'
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white">
                    <span className="ml-1 bg-white px-3 py-2">
                      {showPassword ? (
                        <IoLockClosedOutline style={{color:"#0A2759"}} onChange={togglePasswordVisibility} className="inline-block text-xl font-m" />
                      ) : (
                        <IoLockOpenOutline style={{color:"#0A2759"}} onChange={togglePasswordVisibility} className="inline-block text-xl font-m" />
                      )}
                    </span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'password' : 'text'}
                      autoComplete="current-password"
                      placeholder="************"
                      required
                      className="mt-1 block w-full px-3 py-2 sm:text-sm outline-none"
                    />
                    <span className="ml-1 bg-white px-3 py-2">
                      {showPassword ? (
                        <AiOutlineEyeInvisible style={{color:"#0A2759"}} onClick={togglePasswordVisibility} className="cursor-pointer inline-block font-m text-xl" />
                      ) : (
                        <AiOutlineEye style={{color:"#0A2759"}} onClick={togglePasswordVisibility} className="cursor-pointer inline-block font-m text-xl" />
                      )}
                    </span>
                  </div>
                </div>
                <div>
                <button
                  onClick={(() => {navigate('/dashboard') ; setSelected('Sign up')})}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-8" style={{ backgroundColor: '#00A762' }}
                  >
                    Log in
                  </button>
                  
                </div>
                <div className="flex justify-center mt-4">
                    Already have an account ? <span className='text-custom-green font-bold ml-1'> Sign in</span></div>
                    <div className="border-t-2 border-green-500 mt-2 w-36 mx-auto"></div>
                <button
                style={{color: '#0A2759'}}
                    type="submit"
                    className="w-full flex justify-center gap-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-google-button-color hover:bg-google-button-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green mt-8"
                  >
                   <img src={googleImg} alt="googleIcon" /> Sign up with Google
                  </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
