'use client';
import { useState } from 'react';
import Image from 'next/image';
import { signup, bgSignUp, heroSignUp } from '@/public/assets/images/index.js';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
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
        <h1 className=' w-full py-5 text-center text-3xl text-[#E3FDFD] sm:text-4xl '>
          Take the first stride,
          <span className='font-extrabold text-[#71C9CE]'> Sign Up</span> and
          let your potential collide!
        </h1>
        <h1
          className=' m-auto mb-5 hidden w-[80%] items-center justify-center text-center text-[#E3FDFD]
        md:flex'
        >
          {/* Invalid email or password. Please check your credentials and try again. */}
          Track all your job applications effortlessly with our Job Hunt app.
          Stay organized, never miss a deadline, and simplify your job hunt.
          Sign up now to get started on your path to career success.
        </h1>
      </div>

      <div className='flex h-[75%] w-full flex-col bg-[#71C9CE] sm:flex-row md:rounded-[50px]'>
        <form className='flex h-full w-full flex-col justify-center px-7  md:w-[45%]'>
          <div className='relative mb-4'>
            <input
              required
              type='text'
              className='w-full border-b-2 border-gray-500 bg-transparent px-2 py-3 text-[18px] text-[#E3FDFD] outline-none focus:border-[#032A30]'
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              onChange={(event) => handleChange(event, 'name')}
              value={inputValues.name}
            />
            <label
              style={{
                top:
                  focusedField === 'name' || inputValues.name
                    ? '-10px'
                    : '10px',
                fontSize:
                  focusedField === 'name' || inputValues.name ? '14px' : '18px',
                // color:
                //   focusedField === 'name' || inputValues.name
                //     ? '#A88BFA'
                //     : '#999',
              }}
              className='pointer-events-none absolute left-2 text-[#043A43] transition-all'
            >
              Name
            </label>
            {/* <p className='mt-2 text-sm text-green-600 '>
              Great! The name is available.
            </p> */}
          </div>
          {/* email */}
          <div className='relative mb-4'>
            <input
              required
              type='email'
              className='w-full border-b-2 border-gray-500 bg-transparent px-2 py-3 text-[18px] text-white outline-none focus:border-[#032A30]'
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
          {/* confirm password */}
          <div className='relative mb-4'>
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              className='w-full border-b-2 border-gray-500 bg-transparent px-2 py-3 text-[18px] text-[#E3FDFD]  outline-none focus:border-[#032A30]'
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={handleBlur}
              onChange={(event) => handleChange(event, 'confirmPassword')}
              value={inputValues.confirmPassword}
            />
            <button
              type='button'
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className='absolute right-0 top-0 mr-2 mt-2 text-sm text-[#E3FDFD] focus:outline-none'
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
            <label
              style={{
                top:
                  focusedField === 'confirmPassword' ||
                  inputValues.confirmPassword
                    ? '-10px'
                    : '10px',
                fontSize:
                  focusedField === 'confirmPassword' ||
                  inputValues.confirmPassword
                    ? '14px'
                    : '18px',
                color:
                  focusedField === 'confirmPassword' ||
                  inputValues.confirmPassword
                    ? '#032A30'
                    : '#043A43',
              }}
              className='pointer-events-none absolute left-2 transition-all'
            >
              Confirm Password
            </label>
            <p className='mt-2 text-sm text-red-600 '>
              Passwords do not match. Please make sure the passwords match.
            </p>
          </div>
          <button className='hover:bg=[#1F2937] btn items-center bg-[#032A30] text-[#E3FDFD] hover:text-[#E3FDFD] '>
            Sign Up
          </button>
        </form>

        <div
          className='hidden h-full w-0 rounded-br-[50px] rounded-tr-[50px] bg-cover bg-center bg-no-repeat md:flex md:w-[55%] md:justify-end'
          style={{ backgroundImage: `url(${bgSignUp.src})` }}
        >
          <Image src={heroSignUp} alt='sign up' className='h-[90%] w-3/4 ' />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
