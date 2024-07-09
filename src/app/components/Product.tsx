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
import BannerProd from "@/app/components/image-profile/bannerProd2.jpg";
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
import ProdDetail from "./products/ProdDetail";
import axios from "axios";
import LoadingButton from "@mui/lab";
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
      review: 4,
      priceToRam: [
        { ram: "128GB", price: "22.490.000đ", count: 9 },
        {
          ram: "256GB",
          price: "24.990.000đ",
          count: 5,
        },
        { ram: "512GB", price: "27.990.000đ", count: 2 },
      ],
      priceToColor: [
        {
          color: "Silver",
          price: "19,990,000đ",
        },
        {
          color: "Gold",
          price: "21,990,000đ",
        },
        {
          color: "Space Gray",
          price: "20,990,000đ",
        },
      ],
      info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kì hạn 3-6 tháng",
      sale: "50%",
      content: () => (
        <ul className='text-[14px] gap-2 flex flex-col list-disc pl-3'>
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
        </ul>
      ),
    },
    {
      id: 2,
      title: "Samsung Galaxy S23 oltra 512GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.8 inches",
      capacity: "12GB",
      review: 7,
      ram: "512GB",
      price: "22.990.000đ",
      cost: "27.990.000đ",
      priceToRam: [
        { ram: "128GB", price: "20.490.000đ", count: 9 },
        {
          ram: "256GB",
          price: "21.990.000đ",
          count: 5,
        },
        {
          ram: "512GB",
          price: "22.990.000đ",
          count: 2,
        },
      ],
      priceToColor: [
        {
          color: "Hồng đào",
          price: "19,990,000đ",
        },
        {
          color: "Xanh lá",
          price: "21,990,000đ",
        },
        {
          color: "Đen",
          price: "20,990,000đ",
        },
      ],
      salePrice: "2.990.000đ",
      info: "Tặng kèm Sạc Super Fast Charging 45W",
      sale: "20%",
      content: () => (
        <ul className='flex flex-col gap-1 list-disc'>
          <li>Màn hình AMOLED 2X động</li>
          <li>Bộ xử lý Snapdragon 8 thế hệ 2</li>
          <li>Pin 5000mAh hỗ trợ sạc nhanh</li>
          <li>Camera chính 108MP</li>
          <li>Hỗ trợ bút cảm ứng</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "OPPO Find X6 Pro 256GB | Chính hãng",
      imageUrl: ImageOppo,
      inches: "6.55 inches",
      capacity: "8GB",
      ram: "256GB",
      review: 34,
      price: "17.990.000đ",
      cost: "22.990.000đ",
      salePrice: "1.990.000đ",
      priceToRam: [
        { ram: "128GB", price: "13.490.000đ", count: 9 },
        { ram: "256GB", price: "15.990.000đ", count: 5 },
        {
          ram: "512GB",
          price: "17.990.000đ",
          count: 2,
        },
      ],
      priceToColor: [
        {
          color: "Silver",
          price: "16,990,000đ",
        },
        {
          color: "Gold",
          price: "18,990,000đ",
        },
        {
          color: "Space Gray",
          price: "17,990,000đ",
        },
      ],
      info: "Bảo hành chính hãng 12 tháng",
      sale: "31%",
      content: () => (
        <ul className='text-[14px] gap-2 flex flex-col list-disc pl-3'>
          <li>
            Màn hình AMOLED 6,78 inch với độ phân giải 2K (3216 x 1440 pixel) và tần số làm mới
            120Hz
          </li>
          <li>Sử dụng vi xử lý cấp cao Qualcomm Snapdragon 8 Gen 2</li>
          <li>Bộ nhớ RAM 12GB và bộ nhớ trong 256GB</li>
          <li>
            Hệ thống camera triple với camera chính 50MP, camera siêu rộng 50MP và camera telephoto
            13MP
          </li>
          <li>Pin 5.000mAh với hỗ trợ sạc nhanh 80W</li>
          <li>
            ColorOS 13 dựa trên nền tảng Android 13 cho trải nghiệm người dùng mượt mà và trực quan
          </li>
          <li>Cảm biến vân tay dưới màn hình để mở khóa an toàn và thuận tiện</li>
        </ul>
      ),
    },
    {
      id: 4,
      title: "Xiaomi 13 Pro 256GB | Chính hãng",
      imageUrl: ImageXiaomi,
      inches: "6.73 inches",
      capacity: "8GB",
      review: 41,
      ram: "256GB",
      price: "11.990.000đ",
      cost: "17.990.000đ",
      salePrice: "2.990.000đ",
      priceToRam: [
        { ram: "128GB", price: "13.490.000đ", count: 9 },
        {
          ram: "256GB",
          price: "15.990.000đ",
          count: 5,
        },
        {
          ram: "512GB",
          price: "17.990.000đ",
          count: 2,
        },
      ],
      priceToColor: [
        {
          color: "Đỏ",
          price: "16,990,000đ",
        },
        {
          color: "Trắng",
          price: "18,990,000đ",
        },
        {
          color: "Bạc",
          price: "17,990,000đ",
        },
      ],
      info: "Tặng kèm sạc 120W và cáp USB-C",
      sale: "19%",
      content: () => (
        <ol className='text-[12px] gap-2 flex flex-col list-disc pl-3'>
          <li>
            Màn hình AMOLED sắc nét với tần số quét 120Hz Cho trải nghiệm xem và cuộn trang cực kỳ
            mượt mà
          </li>
          <li>
            Sức mạnh từ chip Snapdragon 8 Gen 2 Hiệu suất xử lý cao, hỗ trợ 5G và nhiều tính năng AI
          </li>
          <li>
            Pin dung lượng 4,820mAh, sạc nhanh 120W Đáp ứng nhu cầu sử dụng suốt cả ngày mà không
            cần sạc
          </li>
          <li>
            Camera chính 50MP được thiết kế cùng Leica Chụp ảnh chuyên nghiệp với chất lượng sắc nét
            tuyệt vời
          </li>
          <li>
            Chống nước bụi chuẩn IP68 Thiết bị vận hành an toàn thậm chí trong điều kiện khắc nghiệt
          </li>
        </ol>
      ),
    },
    {
      id: 5,
      review: 9,
      title: "Google Pixel 7 Pro 256GB | Chính hãng",
      imageUrl: ImageGoogle,
      inches: "6.7 inches",
      capacity: "12GB",
      ram: "256GB",
      cost: "21.990.000đ",
      price: "10.490.000đ",
      salePrice: "3.990.000đ",
      priceToRam: [
        {
          ram: "64GB",
          price: "9.490.000đ",
          count: 0,
        },
        {
          ram: "128GB",
          price: "9.990.000đ",
          count: 0,
        },
        {
          ram: "512GB",
          price: "10.490.000đ",
          count: 0,
        },
      ],
      priceToColor: [
        {
          color: "Đen",
          price: "16,990,000đ",
        },
        {
          color: "Đỏ",
          price: "18,990,000đ",
        },
        {
          color: "Trắng",
          price: "17,990,000đ",
        },
        {
          color: "Tím",
          price: "17,990,000đ",
        },
        {
          color: "Vàng",
          price: "17,990,000đ",
        },
      ],
      info: "Bảo hành chính hãng 12 tháng",
      sale: "40%",
      content: () => (
        <ul className='text-[12px] gap-2 flex flex-col list-disc pl-3'>
          <li>Màn hình OLED 6,7 inch, độ phân giải QHD+ (3120 x 1440 pixel), tần số quét 120Hz</li>
          <li>
            Chip Google Tensor G2 với hiệu năng cao, kết hợp với 12GB RAM và 256GB bộ nhớ trong
          </li>

          <li>Camera selfie 11,1MP cho chất lượng ảnh chân dung tuyệt vời</li>
          <li>Pin 5.000mAh với sạc nhanh 30W, hỗ trợ sạc không dây</li>
          <li>Thiết kế nguyên khối, chống nước và bụi chuẩn IP68</li>
          <li>
            Cảm biến vân tay tích hợp trong màn hình, cảm biến khuôn mặt 3D cho bảo mật tối ưu
          </li>
          <li>Hệ điều hành Android 13 với các tính năng thông minh và tối ưu hiệu năng</li>
          <li>Được bán chính hãng với đầy đủ phụ kiện và bảo hành chính thức từ Google</li>
        </ul>
      ),
    },
    {
      id: 6,
      review: 67,
      title: "OnePlus 11 256GB | Chính hãng",
      imageUrl: ImageOnePlus,
      inches: "6.55 inches",
      capacity: "8GB",
      ram: "64GB",
      cost: "7.990.000đ",
      price: "5.990.000đ",
      salePrice: "2.990.000đ",
      priceToRam: [
        {
          ram: "32GB",
          price: "5.990.000đ",
          count: 0,
        },
        {
          ram: "256GB",
          price: "6.990.000đ",
          count: 7,
        },
        {
          ram: "512GB",
          price: "7.490.000đ",
          count: 0,
        },
      ],
      priceToColor: [
        {
          color: "Đen",
          price: "16,990,000đ",
        },
        {
          color: "Đỏ",
          price: "18,990,000đ",
        },

        {
          color: "Tím",
          price: "17,990,000đ",
        },
        {
          color: "Vàng",
          price: "17,990,000đ",
        },
      ],
      info: "Tặng kèm sạc siêu nhanh 80W",
      sale: "34%",
      content: () => (
        <div>
          <ul className='text-[12px] gap-2 flex flex-col list-disc pl-3'>
            <li>
              Màn hình AMOLED 6,7 inch, độ phân giải 2K (3216 x 1440 pixel), tần số quét 120Hz
            </li>
            <li>
              Hệ thống camera triple với camera chính 50MP, camera tele 32MP và camera góc siêu rộng
              48MP
            </li>
            <li>Camera selfie 16MP chụp ảnh chân dung độ nét cao</li>
            <li>Pin 5.000mAh với sạc nhanh 80W, hỗ trợ sạc không dây 50W</li>
            <li>Cảm biến vân tay trong màn hình, mở khóa nhanh chóng và an toàn</li>
            <li>
              Hệ điều hành OxygenOS 13 dựa trên Android 13, mang lại trải nghiệm người dùng mượt mà
            </li>
            <li>Hỗ trợ 5G, Wi-Fi 6, Bluetooth 5.2 và NFC cho kết nối đa dạng</li>
            <li>Được bán chính hãng, có đầy đủ phụ kiện và bảo hành chính thức từ OnePlus</li>
          </ul>
        </div>
      ),
    },
    {
      id: 7,
      review: 12,
      title: "Vivo X90 Pro+ 256GB | Chính hãng",
      imageUrl: ImageVivo,
      inches: "6.78 inches",
      capacity: "12GB",
      cost: "17.990.000đ",
      ram: "256GB",
      price: "12.990.000đ",
      priceToRam: [
        {
          ram: "64GB",
          price: "12.590.000đ",
          count: 2,
        },

        {
          ram: "256GB",
          price: "13.990.000đ",
          count: 4,
        },
      ],
      priceToColor: [
        {
          color: "Đen",
          price: "16,990,000đ",
        },
        {
          color: "Đỏ",
          price: "18,990,000đ",
        },
        {
          color: "Nâu đen",
          price: "17,990,000đ",
        },
        {
          color: "Xanh dương",
          price: "17,990,000đ",
        },
        {
          color: "Vàng",
          price: "17,990,000đ",
        },
      ],
      salePrice: "990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
      sale: "29%",
      content: () => (
        <ul className='text-[12px] gap-2 flex flex-col list-disc pl-3'>
          <li>Màn hình AMOLED 6,78 inch, độ phân giải 2K (3200 x 1440 pixel), tần số quét 120Hz</li>
          <li>Chip Qualcomm Snapdragon 8 Gen 2, kết hợp với 12GB RAM và 256GB bộ nhớ trong</li>
          <li>
            Hệ thống camera chuyên nghiệp với camera chính 50MP, camera tele 64MP, camera góc siêu
            rộng 48MP và camera macro 8MP
          </li>
          <li>Camera selfie 32MP chụp ảnh chân dung tuyệt đẹp</li>
          <li>Pin 4.700mAh với sạc nhanh 80W, hỗ trợ sạc không dây 50W</li>
          <li>Thiết kế nguyên khối, chống nước bụi chuẩn IP68</li>
          <li>Hỗ trợ 5G, Wi-Fi 6, Bluetooth 5.3 và NFC cho kết nối đa dạng</li>
          <li>Được bán chính hãng, có đầy đủ phụ kiện và bảo hành chính thức từ Vivo</li>
        </ul>
      ),
    },
    {
      id: 8,
      review: 23,
      title: "Realme GT3 256GB | Chính hãng",
      imageUrl: ImageRealme,
      inches: "6.43 inches",
      capacity: "8GB",
      cost: "7.990.000đ",
      ram: "256GB",
      price: "4.990.000đ",
      salePrice: "1.490.000đ",
      priceToRam: [
        {
          ram: "16GB",
          price: "3.590.000đ",
          count: 8,
        },
        {
          ram: "256GB",
          price: "4.590.000đ",
          count: 0,
        },
      ],
      priceToColor: [
        {
          color: "Đen",
          price: "16,990,000đ",
        },
        {
          color: "Đỏ",
          price: "18,990,000đ",
        },
        {
          color: "Xanh than",
          price: "17,990,000đ",
        },
        {
          color: "Tím",
          price: "17,990,000đ",
        },
        {
          color: "Vàng khè",
          price: "17,990,000đ",
        },
      ],
      info: "Tặng kèm sạc 240W siêu nhanh",
      sale: "28%",
      content: () => (
        <ul className='text-[14px] gap-2 flex flex-col list-disc pl-3'>
          <li>Màn hình AMOLED 6,7 inch, 2K (3216 x 1440), 120Hz</li>
          <li>Chip Snapdragon 8 Gen 2, RAM 12GB, bộ nhớ 256GB</li>
          <li>Camera chính 50MP, camera góc siêu rộng 50MP, camera tele 32MP</li>
          <li>Camera selfie 16MP</li>
          <li>Pin 5.000mAh, sạc nhanh 240W</li>
          <li>Thiết kế nguyên khối, IP54</li>
          <li>Vân tay trong màn hình, Android 13</li>
          <li>Kết nối 5G, Wi-Fi 6, Bluetooth 5.3</li>
        </ul>
      ),
    },
    {
      id: 9,
      review: 0,
      title: "Honor Magic5 Pro 256GB | Chính hãng",
      imageUrl: ImageHonor,
      inches: "6.81 inches",
      capacity: "12GB",
      ram: "512GB",
      cost: "30.990.000đ",
      price: "22.990.000đ",
      salePrice: "2.990.000đ",
      priceToRam: [
        {
          ram: "128GB",
          price: "20.590.000đ",
          count: 21,
        },
        {
          ram: "256GB",
          price: "21.590.000đ",
          count: 28,
        },
        {
          ram: "512GB",
          price: "22.990.000đ",
          count: 29,
        },
      ],
      priceToColor: [
        {
          color: "Xám",
          price: "16,990,000đ",
        },
        {
          color: "Đỏ",
          price: "18,990,000đ",
        },
        {
          color: "Lục",
          price: "17,990,000đ",
        },
        {
          color: "Lam",
          price: "17,990,000đ",
        },
        {
          color: "Vàng",
          price: "17,990,000đ",
        },
      ],
      info: "Bảo hành chính hãng 12 tháng",
      sale: "10%",
      content: () => (
        <ol className='text-[14px] gap-2 flex flex-col list-disc pl-3'>
          <li>Màn hình OLED 6,81 inch, độ phân giải 2848 x 1312, tần số quét 120Hz</li>
          <li>Chip Qualcomm Snapdragon 8 Gen 2, RAM 12GB, bộ nhớ trong 256GB</li>
          <li>Hệ thống camera chuyên nghiệp: chính 50MP, tele 50MP, góc siêu rộng 13MP</li>
          <li>Camera selfie 12MP, hỗ trợ quay video 4K</li>
          <li>Pin 5.100mAh, sạc nhanh 66W, sạc không dây 50W</li>
          <li>Thiết kế kim loại, kính cường lực, chống nước IP68</li>
          <li>Cảm biến vân tay trong màn hình, nhận diện khuôn mặt 3D</li>
          <li>Hệ điều hành Magic UI 7.1 dựa trên Android 13</li>
          <li>Hỗ trợ 5G, Wi-Fi 6, Bluetooth 5.2, NFC</li>
        </ol>
      ),
    },
    {
      id: 10,
      review: 132,
      title: "IQOO Neo7 5G 256GB | Chính hãng",
      imageUrl: ImageIq,
      inches: "6.62 inches",
      capacity: "8GB",
      cost: "15.990.000đ",
      ram: "256GB",
      price: "13.990.000đ",
      salePrice: "1.400.000đ",
      priceToRam: [
        {
          ram: "64GB",
          price: "12.590.000đ",
          count: 0,
        },
        {
          ram: "128GB",
          price: "13.590.000đ",
          count: 12,
        },
        {
          ram: "256GB",
          price: "13.990.000đ",
          count: 12,
        },
      ],
      priceToColor: [
        {
          color: "Đen",
          price: "16,990,000đ",
        },
        {
          color: "Đỏ",
          price: "18,990,000đ",
        },
        {
          color: "Chàm",
          price: "17,990,000đ",
        },
        {
          color: "Tím",
          price: "17,990,000đ",
        },
        {
          color: "Xanh",
          price: "17,990,000đ",
        },
      ],
      info: "Tặng kèm tai nghe không dây",
      sale: "16%",
      content: () => (
        <ol className='text-[14px] gap-2 flex flex-col list-disc pl-3'>
          <li>
            Màn hình AMOLED sống động với tốc độ làm tươi 120Hz Trải nghiệm xem liền mạch, mượt mà
            và chi tiết
          </li>
          <li>
            Vi xử lý Snapdragon 8+ Gen 1 hiệu suất mạnh mẽ Hỗ trợ 5G, AI và nhiều tính năng công
            nghệ tiên tiến
          </li>
          <li>
            Pin dung lượng 5,000mAh, sạc nhanh 120W Thời lượng sử dụng lâu dài, chỉ mất vài phút để
            sạc đầy
          </li>
          <li>
            Camera chính 64MP có chống rung quang học (OIS) Chụp ảnh sắc nét, chất lượng cao ngay cả
            trong điều kiện ánh sáng yếu
          </li>
          <li>
            Loa nổi kép hỗ trợ công nghệ âm thanh Hi-Res Audio Âm thanh sống động, chất lượng tuyệt
            vời cho trải nghiệm nghe nhạc
          </li>
        </ol>
      ),
    },
    {
      id: 11,
      review: 4,
      title: "Redmi K60 oltra 256GB | Chính hãng",
      imageUrl: ImageOnePlus,
      inches: "6.67 inches",
      capacity: "8GB",
      cost: "6.990.000đ",
      ram: "256GB",
      price: "5.450.000đ",
      salePrice: "590.000đ",
      priceToRam: [
        {
          ram: "64GB",
          price: "4.590.000đ",
          count: 2,
        },
        {
          ram: "128GB",
          price: "4.990.000đ",
          count: 8,
        },
        {
          ram: "512GB",
          price: "5.490.000đ",
          count: 0,
        },
      ],
      priceToColor: [
        {
          color: "Rêu đá",
          price: "17,990,000đ",
        },
        {
          color: "Bạch kim",
          price: "17,990,000đ",
        },
      ],
      info: "Bảo hành chính hãng 12 tháng",
      sale: "8%",
      content: () => (
        <ol className='text-[14px] gap-2 flex flex-col list-disc pl-3'>
          <li>Màn hình AMOLED 6,67 inch, 2K (2K+), tần số quét 120Hz, HDR10+, Dolby Vision</li>
          <li>Chip Qualcomm Snapdragon 8 Gen 2, RAM 12GB, bộ nhớ trong 256GB</li>
          <li>Camera chính 50MP, camera góc siêu rộng 13MP, camera tele 2X 12MP</li>
          <li>Camera selfie 16MP</li>
          <li>Pin 5.000mAh, sạc nhanh 67W, sạc không dây 30W</li>
          <li>Thiết kế kim loại, kính cường lực, chống nước IP68</li>
          <li>Cảm biến vân tay trong màn hình, âm thanh stereo, NFC</li>
          <li>Hệ điều hành MIUI 14 dựa trên Android 13</li>
          <li>Hỗ trợ 5G, Wi-Fi 6, Bluetooth 5.2</li>
        </ol>
      ),
    },
    {
      id: 12,
      review: 56,
      title: "Redmi K60 oltra 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.67 inches",
      capacity: "8GB",
      cost: "4.990.000đ",
      ram: "256GB",
      price: "2.990.000đ",
      salePrice: "990.000đ",
      priceToRam: [
        {
          ram: "32GB",
          price: "1.590.000đ",
          count: 1,
        },
        {
          ram: "64GB",
          price: "2.990.000đ",
          count: 6,
        },
        {
          ram: "256GB",
          price: "3.490.000đ",
          count: 9,
        },
      ],
      priceToColor: [
        {
          color: "Đen",
          price: "16,990,000đ",
        },
        {
          color: "Đỏ",
          price: "18,990,000đ",
        },
        {
          color: "Đỏ thẫm",
          price: "17,990,000đ",
        },
        {
          color: "Vàng",
          price: "17,990,000đ",
        },
      ],
      info: "Bảo hành chính hãng 12 tháng",
      sale: "21%",
      content: () => (
        <ol className='text-[14px] gap-2 flex flex-col list-disc pl-3'>
          <li>Thiết kế siêu mỏng với màn hình AMOLED sống động</li>
          <li>Hiệu năng mạnh mẽ với chip Snapdragon 8+ Gen 1</li>
          <li>Bộ nhớ trong dung lượng lớn 256GB</li>
          <li>Camera chính 50MP chụp ảnh và quay video chuyên nghiệp</li>
          <li>Pin dung lượng 5,000mAh với sạc nhanh 120W</li>
          <li>Hệ điều hành MIUI 13 trực quan và tiện dụng</li>
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
