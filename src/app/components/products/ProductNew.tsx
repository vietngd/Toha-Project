"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageSamSung from "@/app/components/image-profile/samsung.jpg";
import ImagePhone from "@/app/components/image-profile/iphone15.jpg";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageOppo from "@/app/components/image-profile/oppo.jpg";
import ImageXiaomi from "@/app/components/image-profile/xiaimi.jpg";
import ImageGoogle from "@/app/components/image-profile/gg-pxel.jpg";
import ImageOnePlus from "@/app/components/image-profile/on-pluss.jpg";
import ImageVivo from "@/app/components/image-profile/vivo-x90.jpg";
import clsx from "clsx";
import BannerProd from "@/app/components/image-profile/bannerProd.jpg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import ScrollHorizontal from "../common/ScrollHorizontal";
import ProdDetail from "./ProdDetail";
// import { searchPhones } from "@/app/api/product";
import productData from "@/app/data/productData.json";
interface Props {
  showPopUp: any;
  setShowPopUp: any;
  handleNewsItemClick: any;
  selectedNewsId: any;
}
const ListNews = ({ showPopUp, setShowPopUp, handleNewsItemClick, selectedNewsId }: Props) => {
  const data = productData;

  // const [data, setData] = useState<any>({});
  // const fetchPhones = async () => {
  //   let params = {};
  //   try {
  //     const res = await searchPhones(params);
  //     setData(res.data);
  //   } catch (error: any) {
  //     // dispatch(setToast({ message: error?.message, type: "error", show: true }));
  //   }
  // };
  // useEffect(() => {
  //   fetchPhones();
  // }, []);
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
    <div className=' py-6 bg-gradient-to-tr from-[#768b92] to-[#71b5cc] rounded-xl'>
      <div className='col-span-4'>
        <ScrollHorizontal
          total={data?.phones?.length}
          elementId={`scroll_home_teacher`}
          widthItem={224}
          wrapperClass={""}
        >
          {data?.phones?.map((el: any, index: number) => (
            <div
              onClick={() => handleNewsItemClick(el?.id)}
              className='ml-3 border-[1px] min-w-[300px] cursor-pointer p-2 bg-[#FFFFFF] border-gray-300 rounded-lg hover:transform hover:translate-x-[-1.5rem] hover:shadow-[0_10px_10px_gray] duration-300'
            >
              <div className='py-4 transition-transform relative'>
                <img
                  src={el.imageUrl}
                  alt={el.title}
                  className='w-full object-cover aspect-[200/200] h-[200px]'
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
          ))}
        </ScrollHorizontal>
        <Dialog
          open={showPopUp}
          onClose={handleNewsItemClick}
          maxWidth='lg'
          PaperProps={{
            style: {
              // backgroundColor: "#FFFFFF",
              backgroundImage: `url(${BannerProd.src})`,
            },
          }}
        >
          <div
            className='flex justify-end items-end px-5 pt-2 cursor-pointer'
            onClick={() => setShowPopUp(false)}
          >
            <ClearIcon
              sx={{
                color: "#000001",
              }}
            />
          </div>
          <DialogContent>
            <div>
              <ProdDetail data={data} selectedNewsId={selectedNewsId} />
            </div>
          </DialogContent>
          <DialogActions>
            <button
              className='px-5 bg-slate-200 py-3 rounded-lg hover:bg-opacity-80'
              onClick={() => setShowPopUp(false)}
            >
              Đóng
            </button>
            <button
              className='bg-[#4767f3] text-white rounded-lg w-[60px] px-2 py-3 hover:bg-opacity-60 outline-none'
              onClick={() => setShowPopUp(false)}
              autoFocus
            >
              OK
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default ListNews;
