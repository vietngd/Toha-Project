"use client";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImagePhone from "@/app/components/image-profile/iphone15.jpg";

const ProdDetail = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
      }}
      className='grid grid-cols-5'
    >
      <div></div>
      <div className='col-span-3 py-3'>
        <div className='flex gap-4 py-6'>
          <Typography fontWeight={700}>
            iPhone 15 Pro Max 256GB | Chính hãng VN/A - Chỉ có tại Toha
          </Typography>
          <div>2 đánh giá</div>
        </div>
        <div className='grid grid-cols-3 '>
          <div className='bg-slate-300 col-span-2 grid grid-cols-2 bg-gradient-to-r from-[#e48a9f] to-[#dbd8d8] rounded-xl shadow-2xl h-[400px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={ImagePhone}
                alt=''
                width={400}
                height={700}
                className='rounded-xl object-cover aspect-[350/300] w-[300px] h-[300px] '
              />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-[#686767] font-semibold pr-5'>
              <div>Tính năng nổi bật</div>
              <ul className='text-[14px] gap-2 flex flex-col'>
                <li>
                  Thiết kế thời thượng và bền bỉ - Mặt lưng kính được pha màu xu hướng cùng khung
                  viền nhôm bền bỉ
                </li>
                <li>
                  Dynamic Island hiển thị linh động mọi thông báo ngay lập tức giúp bạn nắm bắt mọi
                  thông tin
                </li>
                <li>
                  Chụp ảnh đẹp nức lòng - Camera chính 48MP, Độ phân giải lên đến 4x và Tele 2x chụp
                  chân dung hoàn hảo
                </li>
                <li>
                  Pin dùng cả ngày không lắng lo - Thời gian xem video lên đến 20 giờ và sạc nhanh
                  qua cổng USB-C tiện lợi
                </li>
                <li>
                  Cải tiến hiệu năng vượt bậc - A16 Bionic mạnh mẽ giúp bạn cân mọi tác vụ dù có yêu
                  cầu đồ hoạ cao
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-4 px-4'>
              <div className='grid grid-cols-3 gap-2'>
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>512GB</p>
                  <p>28.490.000đ</p>
                </button>
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>256GB</p>
                  <p>22.890.000đ</p>
                </button>{" "}
                <button className='bg-slate-200 rounded-lg px-3 text-[14px] py-2'>
                  <p>128GB</p>
                  <p>19.490.000đ</p>
                </button>
              </div>
              <div>Chọn màu để xem giá và chi nhánh có hàng</div>
              <div className='grid grid-cols-3 gap-2'>
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
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ProdDetail;
