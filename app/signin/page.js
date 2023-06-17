'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  signin,
  bgSignInDark,
  bgSignInLight,
  signInDarkImg,
  signInLightImg,
} from '@/public/assets/images/index.js';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [focusedField, setFocusedField] = useState('');

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    }
  };

  const handleChange = (event, field) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
  };

  return (
    <div className='mx-auto w-[95%]'>
      <div className='flex flex-col justify-center'>
        <h1 className=' w-full py-5 text-center text-5xl'>
          Pass through the gate,{' '}
          <span className='text-blue-500'> to a future</span> that's great!
        </h1>
        <h1 className='text-md xm:bg-yellow-600 m-auto mb-5 flex w-[80%] items-center justify-center py-4 text-center text-gray-400 md:hidden'>
          {/* Invalid email or password. Please check your credentials and try again. */}
          Stay organized, never miss a deadline, and streamline your job search
          process with our Job Hunt app. Sign in to access your personalized
          dashboard and take control of your career today.
        </h1>
        <h1 className=' text-md align-center m-auto mb-5 flex items-center justify-center bg-yellow-600 py-4 text-center text-white'>
          Invalid email or password. Please check your credentials and try
          again.
        </h1>
      </div>

      <div className='mx-auto flex w-full flex-col-reverse p-4 md:flex-row md:items-center md:justify-between'>
        <form className='flex flex-col pt-5 md:w-3/6'>
          {/* <h1 className='text-center text-4xl sm:text-left sm:text-center md:hidden'>
            Pass through the gate,{' '}
            <span className='text-blue-500'> to a future</span> that's great!
          </h1> */}

          {/* email */}
          <div className='relative my-4 mt-8'>
            <input
              required
              type='email'
              className='w-full border-b-2 border-gray-500 bg-transparent px-2 py-3 text-base outline-none focus:border-[#A88BFA]'
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              onChange={(event) => handleChange(event, 'email')}
              value={inputValues.email}
            />
            <label
              style={{
                top:
                  focusedField === 'email' || inputValues.email
                    ? '-10px'
                    : '10px',
                fontSize:
                  focusedField === 'email' || inputValues.email
                    ? '14px'
                    : '18px',
                color:
                  focusedField === 'email' || inputValues.email
                    ? '#A88BFA'
                    : '#999',
              }}
              className='pointer-events-none absolute left-2 transition-all'
            >
              Email
            </label>
            <p className='mt-2 text-sm text-red-600 '>
              This email is already registered. Please use a different email or
              login.
            </p>
          </div>
          {/* password */}
          <div className='relative mb-4'>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              className='w-full border-b-2 border-gray-500 bg-transparent px-2 py-3 text-base outline-none focus:border-[#A88BFA]'
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              onChange={(event) => handleChange(event, 'password')}
              value={inputValues.password}
            />
            <button
              type='button'
              onClick={() => togglePasswordVisibility('password')}
              className='absolute right-0 top-0 mr-2 mt-2 text-sm text-white focus:outline-none'
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            <label
              style={{
                top:
                  focusedField === 'password' || inputValues.password
                    ? '-10px'
                    : '10px',
                fontSize:
                  focusedField === 'password' || inputValues.password
                    ? '14px'
                    : '18px',
                color:
                  focusedField === 'password' || inputValues.password
                    ? '#A88BFA'
                    : '#999',
              }}
              className='pointer-events-none absolute left-2 transition-all'
            >
              Password
            </label>
            <p className='mt-2 text-sm text-red-600 '>
              <span className='font-medium'>Oh, snapp!</span> Some error
              message.
            </p>
          </div>

          <button className='hover:bg=[#1F2937] btn items-center bg-[#A88BFA] text-[#1F2937] hover:text-white '>
            Sign In
          </button>
        </form>
        {/* <div className='flex hidden w-5/12 md:block'>
          <p className='text-gray-600'>
            Stay organized, never miss a deadline, and streamline your job
            search process with our Job Hunt app. Sign in to access your
            personalized dashboard and take control of your career today.
          </p>
        </div> */}
        <Image
          //   src={signin}
          src={signInLightImg}
          alt='sign in'
          className=' hidden w-5/12 md:block'
        />
      </div>
    </div>
  );
};

export default SignInPage;
