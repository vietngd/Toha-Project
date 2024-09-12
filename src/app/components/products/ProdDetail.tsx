"use client";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImagePhone from "@/app/components/image-profile/iphone15.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddIcon from "@mui/icons-material/Add";
interface Props {
  data: any;
  selectedNewsId: any;
}
const ProdDetail = ({ data, selectedNewsId }: Props) => {
  const selectedNewsItem = data?.phones?.find((item: any) => item?.id === selectedNewsId);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <div
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div></div>
      <div className='col-span-3 '>
        <div className='flex gap-4 pb-3'>
          <div className='text-[20px] font-bold'>{selectedNewsItem?.title}</div>
          <div className='flex gap-1 text-[14px] font-medium justify-center items-center'>
            <p>{selectedNewsItem?.review}</p>đánh giá
          </div>
        </div>
        <div className='grid grid-cols-3 '>
          <div className='bg-slate-300 col-span-2 grid grid-cols-2 bg-gradient-to-r from-[#e48a9f] to-[#dbd8d8] rounded-xl shadow-2xl h-[400px]'>
            <div className='flex justify-center items-center'>
              {/* <Image
                src={selectedNewsItem?.imageUrl}
                alt=''
                width={400}
                height={700}
                className='rounded-xl object-cover aspect-[350/300] w-[350px] h-[350px] '
              /> */}
              <img
                src={selectedNewsItem && selectedNewsItem?.imageUrl}
                alt=''
                className='rounded-xl object-cover aspect-[350/300] w-[350px] h-[350px] '
              />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-[#686767] font-semibold pr-5'>
              <div>Tính năng nổi bật</div>
              <div>{selectedNewsItem?.content}</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-4 px-4'>
              <div className='grid grid-cols-3 gap-2'>
                {selectedNewsItem?.priceToRam?.map((el: any, index: number) => (
                  <button
                    key={index}
                    className={`bg-slate-200 rounded-lg px-3 text-[14px] py-2 ${
                      selectedButton === index ? "border-2 border-red-300" : ""
                    }`}
                    onClick={() => handleButtonClick(index)}
                  >
                    <p>{el?.ram}</p>
                    <p>{el?.price}</p>
                  </button>
                ))}
              </div>
              <div className='text-[14px] font-medium'>Chọn màu để xem giá</div>
              <div className='grid grid-cols-3 gap-2 text-[14px]'>
                {selectedNewsItem?.priceToColor?.map((el: any, i: number) => (
                  <button
                    key={i}
                    className={`bg-slate-200 rounded-lg px-3 text-[14px] py-2 ${
                      selectedButton === i ? "border-2 border-red-300" : ""
                    }`}
                    onClick={() => handleButtonClick(i)}
                  >
                    <p>{el?.color}</p>
                    <p>{el?.price}</p>
                  </button>
                ))}
              </div>
              <div className='flex gap-2 text-[14px]'>
                <div>Vận chuyển:</div>
                <div className='flex gap-2'>
                  <LocalShippingIcon
                    sx={{
                      color: "#4c80f1",
                    }}
                  />
                  Miễn phí vận chuyển
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <button className='border-[1px] rounded-xl border-gray-700 hover:border-red-400 w-full py-3 flex justify-center items-center'>
                  <div className='pb-[2px]'>
                    <AddIcon />
                  </div>
                  <div>Thêm vào giỏ hàng</div>
                </button>
              </div>
              <div className='flex justify-center items-center'>
                <button className=' rounded-xl bg-red-400 text-white hover:bg-opacity-80 font-medium border-gray-700 w-full py-3'>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ProdDetail;
