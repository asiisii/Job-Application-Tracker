'use client';
import { useState } from 'react';
import Image from 'next/image';
import { signin, heroSignIn, bgSignIn } from '@/public/assets/images/index.js';
import Link from 'next/link';

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
    <div className='mx-auto mb-10 h-[85vh] max-w-screen-xl'>
      <div className='flex h-1/4 flex-col md:flex md:justify-center'>
        <h1 className=' w-full py-5 text-center text-3xl text-[#E3FDFD] sm:text-4xl'>
          Pass through the gate,{' '}
          <span className='font-extrabold text-[#71C9CE]'> to a future</span>{' '}
          that&apos;s great!
        </h1>
        <h1 className=' m-auto mb-5 hidden w-[80%] items-center justify-center text-center text-[#E3FDFD] md:flex'>
          {/* Invalid email or password. Please check your credentials and try again. */}
          Stay organized, never miss a deadline, and streamline your job search
          process with our Job Hunt app. Sign in to access your personalized
          dashboard and take control of your career today.
        </h1>
        {/* <h1 className=' text-md align-center m-auto mb-5 flex items-center justify-center bg-yellow-600 py-4 text-center text-white'>
          Invalid email or password. Please check your credentials and try
          again.
        </h1> */}
      </div>

      <div className='flex h-[75%] w-full flex-col bg-[#71C9CE] sm:flex-row-reverse md:rounded-[50px]'>
        <form className='flex h-full w-full flex-col justify-center px-7 md:w-[45%]'>
          {/* email */}
          <div className='relative my-4 mt-8'>
            <input
              required
              type='email'
              className='w-full border-b-2 border-gray-500 bg-transparent px-2 py-3 text-[18px] text-[#E3FDFD] outline-none focus:border-[#032A30]'
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
              }}
              className='pointer-events-none absolute left-2 text-[#043A43] transition-all'
            >
              Email
            </label>
          </div>
          {/* password */}
          <div className='relative mb-4'>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              className='w-full border-b-2 border-gray-500 bg-transparent px-2 py-3 text-[18px] text-[#E3FDFD] outline-none focus:border-[#032A30]'
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              onChange={(event) => handleChange(event, 'password')}
              value={inputValues.password}
            />
            <button
              type='button'
              onClick={() => togglePasswordVisibility('password')}
              className='absolute right-0 top-0 mr-2 mt-2 text-sm text-[#E3FDFD] focus:outline-none'
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
                    ? '#032A30'
                    : '#043A43',
              }}
              className='pointer-events-none absolute left-2 transition-all'
            >
              Password
            </label>
            {/* <p className='mt-2 text-sm text-red-600 '>
              <span className='font-medium'>Oh, snapp!</span> Some error
              message.
            </p> */}
          </div>

          <button className='hover:bg=[#1F2937] btn items-center bg-[#032A30] text-[#E3FDFD] hover:text-[#E3FDFD] '>
            Sign In
          </button>
          <p className='mt-2 text-sm text-[#E3FDFD] text-center'>
            Don&apos;t have an account? &nbsp;
            <span className='font-medium text-blue-600 underline'>
              <Link href='/signup' as='/signup'>
                Sign Up
              </Link>
            </span>
          </p>
        </form>
        <div
          className='hidden h-full w-0 rounded-bl-[50px] rounded-tl-[50px] bg-cover bg-center bg-no-repeat md:flex md:w-[55%] md:justify-center'
          style={{ backgroundImage: `url(${bgSignIn.src})` }}
        >
          <Image
            src={heroSignIn}
            alt='sign in'
            className='h-[80%] w-3/4  pt-10'
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
