"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageSamSung from "@/app/components/image-profile/samsung.jpg";
import ImagePhone from "@/app/components/image-profile/iphone15.jpg";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ImageOppo from "@/app/components/image-profile/oppo.jpg";
import ImageXiaomi from "@/app/components/image-profile/xiaimi.jpg";
import ImageGoogle from "@/app/components/image-profile/gg-pxel.jpg";
import ImageOnePlus from "@/app/components/image-profile/on-pluss.jpg";
import ImageVivo from "@/app/components/image-profile/vivo-x90.jpg";
import clsx from "clsx";
import BannerProd from "@/app/components/image-profile/bannerProd.jpg";
import Link from "next/link";
import ScrollHorizontal from "../common/ScrollHorizontal";
const ListNews = () => {
  const data = [
    {
      id: 1,
      title: "iPhone 15 Pro Max 256GB | Chính hãng VN/A",
      imageUrl: ImagePhone,
      inches: "6.7 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "24.990.000đ",
      cost: "30.990.000đ",
      salePrice: "1.290.000đ",
      info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kì hạn 3-6 tháng",
      sale: "50%",
    },
    {
      id: 2,
      title: "Samsung Galaxy S23 Ultra 512GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.8 inches",
      capacity: "12GB",
      ram: "512GB",
      price: "22.990.000đ",
      cost: "27.990.000đ",
      salePrice: "2.990.000đ",
      info: "Tặng kèm Sạc Super Fast Charging 45W",
      sale: "20%",
    },
    {
      id: 3,
      title: "OPPO Find X6 Pro 256GB | Chính hãng",
      imageUrl: ImageOppo,
      inches: "6.55 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "17.990.000đ",
      cost: "22.990.000đ",

      salePrice: "1.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
      sale: "31%",
    },
    {
      id: 4,
      title: "Xiaomi 13 Pro 256GB | Chính hãng",
      imageUrl: ImageXiaomi,
      inches: "6.73 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "11.990.000đ",
      cost: "17.990.000đ",
      salePrice: "2.990.000đ",
      info: "Tặng kèm sạc 120W và cáp USB-C",
      sale: "19%",
    },
    {
      id: 5,
      title: "Google Pixel 7 Pro 256GB | Chính hãng",
      imageUrl: ImageGoogle,
      inches: "6.7 inches",
      capacity: "12GB",
      ram: "256GB",
      cost: "21.990.000đ",
      price: "10.490.000đ",
      salePrice: "3.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
      sale: "40%",
    },
    {
      id: 6,
      title: "OnePlus 11 256GB | Chính hãng",
      imageUrl: ImageOnePlus,
      inches: "6.55 inches",
      capacity: "8GB",
      ram: "256GB",
      cost: "7.990.000đ",
      price: "5.990.000đ",
      salePrice: "2.990.000đ",
      info: "Tặng kèm sạc siêu nhanh 80W",
      sale: "34%",
    },
    {
      id: 7,
      title: "Vivo X90 Pro+ 256GB | Chính hãng",
      imageUrl: ImageVivo,
      inches: "6.78 inches",
      capacity: "12GB",
      cost: "17.990.000đ",
      ram: "256GB",
      price: "12.990.000đ",
      salePrice: "990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
      sale: "29%",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className=' py-6 bg-gradient-to-tr from-[#3d4c52] to-[#baeafa]'>
      <div className='col-span-4'>
        <ScrollHorizontal
          total={data?.length}
          elementId={`scroll_home_teacher`}
          widthItem={224}
          wrapperClass={""}
        >
          {data?.map((el: any, index: number) => (
            <Link href={`/products/${el?.id}`} target='_blank'>
              <div className='ml-3 border-[1px] w-[300px] p-2 bg-[#FFFFFF] border-gray-300 rounded-lg hover:transform hover:translate-y-[-1.75rem] hover:shadow-[0_10px_10px_gray] duration-300'>
                <div className='py-4 transition-transform relative'>
                  <Image
                    src={el?.imageUrl}
                    alt=''
                    width={200}
                    height={200}
                    // className='w-full object-cover aspect-300/100 h-[160px] transition-all duration-300 ease-in-out'
                    className='w-[200px] object-cover aspect-[200/200] h-[200px] '
                  />
                  <div className='absolute top-0 left-[-16px]'>{renderTag(el?.sale)}</div>
                </div>
                <div className='border-[1px] border-gray-200 p-2 rounded-md mt-4'>
                  <div className='font-bold pt-4'>
                    <p className='text-[20px] line-clamp-2'>{el?.title}</p>
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
                    <div className='text-[14px] text-gray-600 pt-[6px] line-through'>
                      {el?.cost}
                    </div>
                  </div>
                  <div className='text-[14px]'>
                    Smember giảm thêm đến
                    <span className='text-red-600 font-semibold px-2'>{el?.salePrice}</span>
                  </div>
                </div>
                <div className='text-[12px] pt-2 h-[46px]'>{el?.info}</div>
                <div className='flex justify-between'>
                  <div>
                    <StarIcon
                      sx={{
                        color: "#f1dc1b",
                      }}
                    />
                    <StarIcon
                      sx={{
                        color: "#f1dc1b",
                      }}
                    />{" "}
                    <StarIcon
                      sx={{
                        color: "#f1dc1b",
                      }}
                    />{" "}
                    <StarIcon
                      sx={{
                        color: "#f1dc1b",
                      }}
                    />{" "}
                    <StarIcon
                      sx={{
                        color: "#f1dc1b",
                      }}
                    />
                  </div>
                  <div
                    className='text-[14px] font-semibold flex justify-between items-center gap-2 cursor-pointer'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Yêu thích
                    {hoveredIndex === index ? (
                      <FavoriteIcon className='text-red-500' />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}{" "}
        </ScrollHorizontal>
      </div>
    </div>
  );
};
export default ListNews;
