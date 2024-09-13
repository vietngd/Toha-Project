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
import { Rating, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ProdDetail from "./products/ProdDetail";
import productData from "@/app/data/productData.json";
import ListProduct from "./ListProduct";
const pageSize = 10; // Define page size
const ListNews = () => {
  const data = productData;
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const filteredData = data?.phones?.filter((el: any) =>
    el.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const paginatedData = filteredData?.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);
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

  return (
    <div className='grid grid-cols-6 py-6 bg-gradient-to-r from-[#cfe6f0] to-[#dfcecc]'>
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
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </div>
        </div>
        <ListProduct data={paginatedData} handleNewsItemClick={handleNewsItemClick} />
        <div className='py-4 flex justify-end items-end'>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(filteredData?.length / pageSize)} // Total number of pages
              page={currentPage} // Current page
              onChange={handlePageChange} // Page change handler
              variant='outlined'
              shape='rounded'
              color='secondary'
            />
          </Stack>
        </div>
        <Dialog
          open={showPopUp}
          onClose={handleNewsItemClick}
          maxWidth='lg'
          PaperProps={{
            style: {
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
