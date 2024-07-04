"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import logoGoogle from "./logoGoogle.jpg";
interface Props {
  showPopUp: any;
  setShowPopUp: any;
}
const FormLoginBasic = ({ showPopUp, setShowPopUp }: Props) => {
  return (
    <div className='max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden px-8 py-4 space-y-6'>
      <div
        className='flex justify-end items-end cursor-pointer '
        onClick={() => setShowPopUp(false)}
      >
        <ClearIcon
          sx={{
            color: "#B0B0B0",
          }}
        />
      </div>
      <h2 className='text-center text-[30px] font-extrabold text-white'>
        Welcome to the endless plains
      </h2>
      <p className='text-center text-gray-200'>Sign in to your account</p>
      <form method='POST' action='#' className='space-y-6'>
        <div className='relative'>
          <Typography
            fontWeight={600}
            className='absolute left-0 -top-3.5 text-[#FFFFFF] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm'
          >
            Email
          </Typography>
          <input
            placeholder='john@example.com'
            className='peer h-10 w-full border-b-2 text-[14px] mt-1 px-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500'
            id='email'
            required
            name='email'
            type='email'
          />
        </div>
        <div className='relative'>
          <Typography
            fontWeight={600}
            className='absolute left-0 -top-3.5 text-[#FFFFFF] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm'
          >
            Password
          </Typography>
          <input
            placeholder='Password'
            className='peer h-10 w-full border-b-2 text-[14px] mt-1 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500'
            id='password'
            required
            name='password'
            type='password'
          />
        </div>
        <div className='flex items-center justify-between'>
          <label className='flex items-center text-sm text-gray-200'>
            <input
              className='form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded'
              type='checkbox'
            />
            <span className='ml-2'>Remember me</span>
          </label>
          <a className='text-sm text-purple-200 hover:underline' href='#'>
            Forgot your password?
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-[#FFFFFF] flex justify-center items-center gap-2 bg-[#3a76b3] hover:bg-opacity-60 cursor-pointer rounded-md'>
            <div className='flex gap-2 justify-center items-center py-2'>
              <Image src={logoGoogle} alt='' width={30} height={30} />
              <p className='text-[14px]'>Sign in with Google</p>
            </div>
          </div>
          <div className='text-[#FFFFFF] flex justify-center items-center gap-2 bg-[#3a76b3] cursor-pointer hover:bg-opacity-60 rounded-md'>
            <div className='flex gap-2 justify-center items-center py-2'>
              <svg
                viewBox='0 0 30 30'
                height='30'
                width='30'
                y='0px'
                x='0px'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z'></path>
              </svg>
              <p className='text-[14px]'>Sign in with Apple</p>
            </div>
          </div>
        </div>

        <button
          className='w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200'
          type='submit'
        >
          Sign In
        </button>
      </form>
      <div className='text-center text-gray-300 text-[14px]'>
        Don't have an account?
        <a className='text-purple-300 hover:underline italic' href='#'>
          Sign up
        </a>
      </div>
    </div>
  );
};
export default FormLoginBasic;
