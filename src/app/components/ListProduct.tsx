"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating, TextField } from "@mui/material";
import clsx from "clsx";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
interface Props {
  data: any;
  handleNewsItemClick: any;
}
const ProductList = ({ data, handleNewsItemClick }: Props) => {
  const ICTriaggle: React.FC<any> = ({ color }) => {
    return (
      <svg width='8' height='4' viewBox='0 0 4 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.93548 2L0 0H3.93548V2Z' fill={color} />
      </svg>
    );
  };
  const renderTag = (item: any) => {
    return (
      <div className='relative'>
        <div
          className={clsx(
            " text-white text-12-16 md:text-lg w-[130px] h-[30px] rounded-lg shadow-sm hover:opacity-80 flex justify-center items-center font-bold relative bg-[#e94f4f]"
          )}
        >
          <p className='text-[14px]'>Giảm tới {item}</p>
          <div className='absolute bottom-[-2px] left-0'>
            <ICTriaggle color={"#971818"} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='grid grid-cols-4 gap-6 '>
      {data?.map((el: any, index: number) => (
        <div
          onClick={() => handleNewsItemClick(el?.id)}
          className='border-[1px] p-2 cursor-pointer bg-[#FFFFFF] border-gray-300 rounded-lg hover:transform hover:translate-y-[-1.75rem] hover:shadow-[0_10px_10px_gray] duration-500'
        >
          <div className='py-4 transition-transform relative'>
            <img
              src={el?.imageUrl}
              alt=''
              className='w-full object-cover aspect-500/120 h-[200px]'
            />
            <div className='absolute top-0 left-[-16px]'>{renderTag(el?.sale)}</div>
          </div>
          <div className='border-[1px] border-gray-200 p-2 rounded-md mt-4'>
            <div className='font-bold pt-4'>
              <p className='text-[20px]'>{el?.title}</p>
            </div>
            <div className='grid grid-cols-3 gap-1'>
              <div className='text-[10px] bg-slate-200 rounded-md px-2 my-2'>
                <p className='text-center'>{el?.inches}</p>
              </div>
              <div className='text-[10px] bg-slate-200 rounded-md my-2'>
                <p className='text-center'>{el?.capacity}</p>
              </div>
              <div className='text-[10px] bg-slate-200 rounded-md my-2'>
                <p className='text-center '>{el?.ram}</p>
              </div>
            </div>
            <div className='pb-3 pt-2 font-semibold text-red-600 flex gap-4 text-[20px]'>
              <div> {el?.price}</div>
              <div className='text-[14px] text-gray-600 pt-[6px] line-through'>{el?.cost}</div>
            </div>
            <div className='text-[14px]'>
              Smember giảm thêm đến
              <span className='text-red-600 font-semibold px-2'>{el?.salePrice}</span>
            </div>
          </div>
          <div className='text-[12px] pt-2 h-[46px]'>{el?.info}</div>
          <div className='flex justify-between'>
            <div>
              <Stack spacing={1}>
                <Rating name='half-rating' value={el?.rating} precision={0.5} />
              </Stack>
            </div>
            <div className='text-[14px] font-semibold flex justify-between items-center gap-2 cursor-pointer'>
              Yêu thích
              {el?.isFavorite ? <FavoriteIcon className='text-red-500' /> : <FavoriteBorderIcon />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
