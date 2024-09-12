"use client";
import BannerProd from "@/app/components/image-profile/bannerProd2.jpg";
import ProductNew from "@/app/components/products/ProductNew";
import banner1 from "@/app/products/banner1.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FilterListIcon from "@mui/icons-material/FilterList";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import ReviewStar from "./common/Ratting";
import banner2 from "./image-profile/banner2.jpg";
import banner3 from "./image-profile/banner3.jpg";
import banner4 from "./image-profile/banner4.jpg";
import banner6 from "./image-profile/banner6.jpg";
import ImageGoogle from "./image-profile/gg-pxel.jpg";
import ImageHonor from "./image-profile/honor-magic.jpg";
import ImageIq from "./image-profile/iq-neo8.jpg";
import ImageOnePlus from "./image-profile/on-pluss.jpg";
import ImageOppo from "./image-profile/oppo.jpg";
import ImagePhone from "./image-profile/product2.jpg";
import ImageRealme from "./image-profile/ralme-gt3.jpg";
import ImageSamSung from "./image-profile/samsung.jpg";
import ImageVivo from "./image-profile/vivo-x90.jpg";
import ImageXiaomi from "./image-profile/xiaimi.jpg";
import ProdDetail from "./products/ProdDetail";
import productData from "@/app/data/productData.json";
const ListNews = () => {
  const bannersData = [
    {
      id: 1,
      banner: banner2,
    },
    {
      id: 2,
      banner: banner1,
    },
    {
      id: 3,
      banner: banner3,
    },
    {
      id: 4,
      banner: banner4,
    },
    {
      id: 5,
      banner: banner4,
    },
    {
      id: 6,
      banner: banner6,
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <ol style={{ margin: "0px" }}> {dots} </ol>
      </div>
    ),
  };
  const data = productData;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleNewsItemClick = (id: number) => {
    setSelectedNewsId(id);
    setShowPopUp(!showPopUp);
  };

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
    <div
      className='grid grid-cols-6 py-6 bg-gradient-to-r from-[#cfe6f0] to-[#eed1cf]'
      style={{
        backgroundImage: `url(${BannerProd.src})`,
      }}
    >
      <div></div>
      <div className='col-span-4'>
        <div className='text-[26px] flex gap-2 font-bold py-4'>
          <div>Sản phẩm mới nhất</div>
          <div>
            <LocalFireDepartmentIcon
              sx={{
                fontSize: "30px",
                color: "#e92213",
              }}
            />
          </div>
        </div>
        <ProductNew
          setShowPopUp={setShowPopUp}
          showPopUp={showPopUp}
          handleNewsItemClick={handleNewsItemClick}
          selectedNewsId={selectedNewsId}
        />
        {/* <div className='pt-6'>
          <Slider {...settings}>
            {bannersData?.map((el: any, i: number) => (
              <div key={i} className='relative'>
                <Image
                  src={el?.banner}
                  alt=''
                  width={1000}
                  height={200}
                  className='w-full aspect-[1000/200] object-cover rounded-lg'
                />
              </div>
            ))}
          </Slider>
        </div> */}
        <div className='text-[26px] font-bold py-4'> Danh sách sản phẩm</div>
        <div className='font-bold'>Sắp xếp theo</div>
        <div className='grid grid-cols-2 pt-2 pb-8'>
          <div className='flex gap-4 pt-2'>
            <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
              <FilterListIcon
                sx={{
                  color: "#B0B0B0",
                }}
              />
              Giá Cao - Thấp
            </div>
            <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
              <FilterListIcon
                sx={{
                  color: "#B0B0B0",
                }}
              />
              Giá Thấp - Cao
            </div>
            <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
              <LoyaltyIcon
                sx={{
                  color: "#B0B0B0",
                }}
              />
              Khuyến mãi hot
            </div>
            <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
              <VisibilityIcon
                sx={{
                  color: "#B0B0B0",
                }}
              />
              Xem nhiều
            </div>
          </div>
          <div className='mt-2'>
            <TextField
              placeholder='Tìm kiếm sản phẩm'
              fullWidth
              size='small'
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </div>
        </div>
        <div className='grid grid-cols-4 gap-6 '>
          {data?.phones?.map((el: any, index: number) => (
            <div
              onClick={() => handleNewsItemClick(el?.id)}
              className='border-[1px] p-2 cursor-pointer bg-[#FFFFFF] border-gray-300 rounded-lg hover:transform hover:translate-y-[-1.75rem] hover:shadow-[0_10px_10px_gray] duration-500'
            >
              <div className='py-4 transition-transform relative'>
                <img
                  src={el?.imageUrl}
                  alt=''
                  className='w-full object-cover aspect-500/120 h-[200px] '
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
                  <ReviewStar value={0} onChange={handleMouseEnter} />
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
        </div>
        <div className='py-4 flex justify-end items-end'>
          <Stack spacing={2}>
            <Pagination count={10} variant='outlined' shape='rounded' color='secondary' />
          </Stack>
        </div>
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
      <div></div>
    </div>
  );
};
export default ListNews;
