"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageSamSung from "./image-profile/samsung.jpg";
import ImagePhone from "./image-profile/product2.jpg";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Slider from "react-slick";
import banner1 from "@/app/products/banner1.jpg";
import banner2 from "./image-profile/banner2.jpg";
import banner3 from "./image-profile/banner3.jpg";
import banner4 from "./image-profile/banner4.jpg";
import banner6 from "./image-profile/banner6.jpg";
import ImageOppo from "./image-profile/oppo.jpg";
import ImageXiaomi from "./image-profile/xiaimi.jpg";
import ImageGoogle from "./image-profile/gg-pxel.jpg";
import ImageOnePlus from "./image-profile/on-pluss.jpg";
import ImageRealme from "./image-profile/ralme-gt3.jpg";
import ImageVivo from "./image-profile/vivo-x90.jpg";
import ImageHonor from "./image-profile/honor-magic.jpg";
import ImageIq from "./image-profile/iq-neo8.jpg";
import clsx from "clsx";
import SearchIcon from "@mui/icons-material/Search";
import BannerProd from "@/app/components/image-profile/bannerProd.jpg";
import Link from "next/link";
import ProductNew from "@/app/components/products/ProductNew";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { TextField, Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import ProdDetail from "../products/[prodId]/ProdDetail";
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
      content: () => (
        <ol className='text-[14px] gap-2 flex flex-col'>
          <li>
            Thiết kế cao cấp và bền bỉ - Mặt lưng kính với các màu sắc thời trang kết hợp với khung
            viền nhôm chắc chắn
          </li>
          <li>
            Màn hình Dynamic Island - Hiển thị thông báo và tính năng một cách linh hoạt và tiện lợi
          </li>
          <li>
            Camera chất lượng cao - Camera chính 48MP, khả năng zoom quang học 2x và chụp chân dung
            tuyệt vời
          </li>
          <li>
            Thời lượng pin ấn tượng - Có thể xem video liên tục lên đến 20 giờ và sạc nhanh qua cổng
            USB-C
          </li>
          <li>
            Hiệu năng vượt trội - Chip A16 Bionic mạnh mẽ đáp ứng mọi nhu cầu, kể cả những tác vụ đồ
            họa phức tạp
          </li>
        </ol>
      ),
    },
    {
      id: 2,
      title: "Samsung Galaxy S23 oltra 512GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.8 inches",
      capacity: "12GB",
      ram: "512GB",
      price: "22.990.000đ",
      cost: "27.990.000đ",
      salePrice: "2.990.000đ",
      info: "Tặng kèm Sạc Super Fast Charging 45W",
      sale: "20%",
      contents: () => (
        <ol>
          <li>Dynamic AMOLED 2X display</li>
          <li>Snapdragon 8 Gen 2 processor</li>
          <li>5000mAh battery with fast charging</li>
          <li>108MP primary camera</li>
          <li>Stylus support</li>
        </ol>
      ),
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
      contents: () => (
        <ol>
          <li>OLED display with 120Hz refresh rate</li>
          <li>Qualcomm Snapdragon 8 Gen 1 processor</li>
          <li>4,500mAh battery with 80W fast charging</li>
          <li>64MP main camera with OIS</li>
          <li>IP68 water and dust resistance</li>
        </ol>
      ),
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
      contents: () => (
        <ol>
          <li>AMOLED display with 120Hz refresh rate</li>
          <li>Snapdragon 8 Gen 2 processor</li>
          <li>4,820mAh battery with 120W fast charging</li>
          <li>50MP main camera with Leica optics</li>
          <li>IP68 water and dust resistance</li>
        </ol>
      ),
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
      contents: () => (
        <ol>
          <li>OLED display with 120Hz refresh rate</li>
          <li>Google Tensor G2 processor</li>
          <li>5,000mAh battery with fast charging</li>
          <li>50MP main camera with advanced computational photography</li>
          <li>IP68 water and dust resistance</li>
        </ol>
      ),
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
      contents: () => (
        <div>
          <ol>
            <li>AMOLED display with 120Hz refresh rate</li>
            <li>Snapdragon 8 Gen 2 processor</li>
            <li>5,000mAh battery with 80W fast charging</li>
            <li>50MP main camera with OIS</li>
            <li>Dual stereo speakers with Dolby Atmos</li>
          </ol>
        </div>
      ),
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
      contents: () => (
        <ol>
          <li>OLED display with 120Hz refresh rate</li>
          <li>Snapdragon 8 Gen 2 processor</li>
          <li>4,700mAh battery with 120W fast charging</li>
          <li>50MP main camera with Zeiss optics</li>
          <li>IP68 water and dust resistance</li>
        </ol>
      ),
    },
    {
      id: 8,
      title: "Realme GT3 256GB | Chính hãng",
      imageUrl: ImageRealme,
      inches: "6.43 inches",
      capacity: "8GB",
      cost: "7.990.000đ",
      ram: "256GB",
      price: "4.990.000đ",
      salePrice: "1.490.000đ",
      info: "Tặng kèm sạc 240W siêu nhanh",
      sale: "28%",
      contents: () => (
        <ol>
          <li>AMOLED display with 144Hz refresh rate</li>
          <li>Snapdragon 8+ Gen 1 processor</li>
          <li>5,000mAh battery with 240W fast charging</li>
          <li>50MP main camera with OIS</li>
          <li>Dual stereo speakers with Dolby Atmos</li>
        </ol>
      ),
    },
    {
      id: 9,
      title: "Honor Magic5 Pro 256GB | Chính hãng",
      imageUrl: ImageHonor,
      inches: "6.81 inches",
      capacity: "12GB",
      ram: "256GB",
      cost: "40.990.000đ",
      price: "22.990.000đ",
      salePrice: "2.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
      sale: "10%",
      contents: () => (
        <ol>
          <li>OLED display with 120Hz refresh rate</li>
          <li>Snapdragon 8 Gen 2 processor</li>
          <li>5,100mAh battery with 66W fast charging</li>
          <li>50MP main camera with OIS</li>
          <li>IP68 water and dust resistance</li>
        </ol>
      ),
    },
    {
      id: 10,
      title: "IQOO Neo7 5G 256GB | Chính hãng",
      imageUrl: ImageIq,
      inches: "6.62 inches",
      capacity: "8GB",
      cost: "15.990.000đ",
      ram: "256GB",
      price: "13.990.000đ",
      salePrice: "1.400.000đ",
      info: "Tặng kèm tai nghe không dây",
      sale: "16%",
      contents: () => (
        <ol>
          <li>AMOLED display with 120Hz refresh rate</li>
          <li>Snapdragon 8+ Gen 1 processor</li>
          <li>5,000mAh battery with 120W fast charging</li>
          <li>64MP main camera with OIS</li>
          <li>Dual stereo speakers with Hi-Res Audio</li>
        </ol>
      ),
    },
    {
      id: 11,
      title: "Redmi K60 oltra 256GB | Chính hãng",
      imageUrl: ImageOnePlus,
      inches: "6.67 inches",
      capacity: "8GB",
      cost: "6.990.000đ",
      ram: "256GB",
      price: "5.450.000đ",
      salePrice: "590.000đ",
      info: "Bảo hành chính hãng 12 tháng",
      sale: "8%",
      contents: () => (
        <ol>
          <li>AMOLED display with 120Hz refresh rate</li>
          <li>Mediatek Dimensity 8100 oltra processor</li>
          <li>5,000mAh battery with 67W fast charging</li>
          <li>64MP main camera with OIS</li>
          <li>Dual stereo speakers with Dolby Atmos</li>
        </ol>
      ),
    },
    {
      id: 12,
      title: "Redmi K60 oltra 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.67 inches",
      capacity: "8GB",
      cost: "4.990.000đ",
      ram: "256GB",
      price: "2.990.000đ",
      salePrice: "990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
      sale: "21%",
      contents: () => (
        <ol>
          <li>AMOLED display with 120Hz refresh rate</li>
          <li>Mediatek Dimensity 8100 oltra processor</li>
          <li>5,000mAh battery with 67W fast charging</li>
          <li>64MP main camera with OIS</li>
          <li>Dual stereo speakers with Dolby Atmos</li>
        </ol>
      ),
    },
  ];
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
        <ProductNew />
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
          {data?.map((el: any, index: number) => (
            <div
              onClick={() => handleNewsItemClick(el?.id)}
              className='border-[1px] p-2 cursor-pointer bg-[#FFFFFF] border-gray-300 rounded-lg hover:transform hover:translate-y-[-1.75rem] hover:shadow-[0_10px_10px_gray] duration-500'
            >
              <div className='py-4 transition-transform relative'>
                <Image
                  src={el?.imageUrl}
                  alt=''
                  width={170}
                  height={170}
                  // className='w-foll object-cover aspect-300/100 h-[160px] transition-all duration-300 ease-in-out'
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
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />
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
        </div>
        <div className='py-4 flex justify-end items-end'>
          <Stack spacing={2}>
            <Pagination count={10} variant='outlined' shape='rounded' color='secondary' />
          </Stack>
        </div>
        <Dialog open={showPopUp} onClose={handleNewsItemClick} maxWidth='lg'>
          <div
            className='flex justify-end items-end px-5 pt-2 cursor-pointer'
            onClick={() => setShowPopUp(false)}
          >
            <ClearIcon
              sx={{
                color: "#B0B0B0",
              }}
            />
          </div>
          <DialogContent>
            <div>
              <ProdDetail data={data} selectedNewsId={selectedNewsId} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowPopUp(false)}>Close</Button>
            <Button onClick={() => setShowPopUp(false)} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div></div>
    </div>
  );
};
export default ListNews;
