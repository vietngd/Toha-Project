"use client";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImagePhone from "@/app/components/image-profile/iphone15.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
interface Props {
  data: any;
  selectedNewsId: any;
}
const ProdDetail = ({ data, selectedNewsId }: Props) => {
  const selectedNewsItem = data?.find((item: any) => item.id === selectedNewsId);
  console.log("selectedNewsItems", selectedNewsItem);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <div></div>
      <div className='col-span-3 py-3'>
        <div className='flex gap-4 pb-3'>
          <Typography fontWeight={700}>
            iPhone 15 Pro Max 256GB | Chính hãng VN/A - Chỉ có tại Toha
          </Typography>
          <div>2 đánh giá</div>
        </div>
        <div className='grid grid-cols-3 '>
          <div className='bg-slate-300 col-span-2 grid grid-cols-2 bg-gradient-to-r from-[#e48a9f] to-[#dbd8d8] rounded-xl shadow-2xl h-[400px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={selectedNewsItem?.imageUrl}
                alt=''
                width={400}
                height={700}
                className='rounded-xl object-cover aspect-[350/300] w-[350px] h-[350px] '
              />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-[#686767] font-semibold pr-5'>
              <div>Tính năng nổi bật</div>
              <div></div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-4 px-4'>
              <div className='grid grid-cols-3 gap-2'>
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>{selectedNewsItem?.ram}</p>
                  <p>{selectedNewsItem?.price}</p>
                </button>
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>{selectedNewsItem?.ram}</p>
                  <p>{selectedNewsItem?.price}</p>
                </button>
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>{selectedNewsItem?.ram}</p>
                  <p>{selectedNewsItem?.price}</p>
                </button>
              </div>
              <div className='text-[14px] font-medium'>
                Chọn màu để xem giá và chi nhánh có hàng
              </div>
              <div className='grid grid-cols-3 gap-2 text-[14px]'>
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>Hồng</p>
                  <p>28.490.000đ</p>
                </button>{" "}
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>Đen</p>
                  <p>28.490.000đ</p>
                </button>{" "}
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>Xanh dương</p>
                  <p>28.490.000đ</p>
                </button>{" "}
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>Xanh lá</p>
                  <p>28.490.000đ</p>
                </button>{" "}
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>Vàng</p>
                  <p>28.490.000đ</p>
                </button>
              </div>
              <div className='flex gap-2 text-[14px]'>
                <div>Vận chuyển:</div>
                <div className='flex gap-2'>
                  <LocalShippingIcon
                    sx={{
                      color: "primary",
                    }}
                  />
                  Miễn phí vận chuyển
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <button className='border-[1px] rounded-xl border-gray-700 hover:border-red-400 w-full py-3'>
                  Thêm vào giỏ hàng
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
