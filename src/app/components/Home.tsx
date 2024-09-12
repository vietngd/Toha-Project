"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import IconFacebook from "./images/facebook.svg";
import IconZalo from "./images/zalo.png";
import IconIG from "./images/instagram.png";
import IconTW from "./images/twitter.png";
import Image from "next/image";
import Link from "next/link";
import ImageProfile1 from "./image-profile/image1.jpg";
import ImageProfile2 from "./image-profile/image2.jpg";
import ImageProfile3 from "./image-profile/image3.jpg";
import ImageProfile4 from "./image-profile/image4.jpg";
import ImageProfile6 from "./image-profile/image6.jpg";
import ImageProfile5 from "./image-profile/image5.jpg";
import { Button, IconButton, TextField, Typography, InputAdornment } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Slider from "react-slick";
import banner1 from "./image-profile/banner1.jpg";
import banner2 from "./image-profile/banner2.jpg";
import banner3 from "./image-profile/banner3.jpg";
import banner4 from "./image-profile/banner4.jpg";
import banner6 from "./image-profile/banner6.jpg";
import BannerInfo from "./image-profile/bannerInfo.jpg";
import BannerHome from "./image-profile/bannerHome2.jpg";
import BannerBottom from "./image-profile/bannerBottom.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Profile from "./Profile";
import ClearIcon from "@mui/icons-material/Clear";
import WeatherToday from "./common/Weather";

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [statusDrop, setStatusDrop] = useState<boolean>(true);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const handleClick = () => {
    setShowPopUp(!showPopUp);
  };
  const toggleDropdown = () => {
    setStatusDrop(!statusDrop);
  };
  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const data = [
    {
      id: 1,
      image: ImageProfile1,
      banner: banner2,
    },
    {
      id: 2,
      image: ImageProfile2,
      banner: banner1,
    },
    {
      id: 3,
      image: ImageProfile3,
      banner: banner3,
    },
    {
      id: 4,
      image: ImageProfile4,
      banner: banner4,
    },
    {
      id: 5,
      image: ImageProfile5,
      banner: banner4,
    },
    {
      id: 6,
      image: ImageProfile6,
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
    arrows: false,
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
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className='w-full h-full'>
      <div
        className='text-[60px] text-white flex-col text-center pl-[120px] pt-[150px]'
        style={{
          backgroundImage: `url(${BannerHome.src})`,
          height: "1080px",
        }}
      >
        <div className='col-span-3'>
          <p className='animate__animated animate__fadeInUp font-semibold'>Mr NGUYEN DUC VIET</p>
          <p className='text-[14px] hover:text-gray-300 cursor-pointer hover:text-[18px] animate-slideIn'>
            Intern Front-End Developer in Authentic Education Hub
          </p>
          <div className='flex justify-center items-center py-[50px]'>
            <div className='animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900'></div>
          </div>

          <div className='flex justify-center items-center pt-5' onClick={handleClick}>
            <div className='animate-slideIn'>
              <button className='cursor-pointer flex uppercase bg-gradient-to-tl from-slate-400 to-slate-100 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition'>
                <p className='text-gray-700 font-semibold pr-2 text-[16px]'>Getting Started</p>
                <ArrowForwardOutlinedIcon
                  sx={{
                    width: "20px",
                    color: "#686868",
                  }}
                />
              </button>
            </div>
            <Dialog open={showPopUp} onClose={handleClick} maxWidth='lg'>
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
                  <Profile />
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClick}>Close</Button>
                <Button onClick={handleClick} autoFocus>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className='flex justify-center items-center py-6 animate__animated animate__fadeInUp'>
            <WeatherToday />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${BannerInfo.src})`,
          height: !statusDrop ? "1540px" : "1380px",
        }}
        className='flex flex-col gap-3'
      >
        <div className='grid grid-cols-5 animate__animated animate__fadeInUp'>
          <div></div>
          <div className='text-[#FFFFFF] flex flex-col col-span-3 animate__animated animate__fadeInUp'>
            <p className='text-[36px] pt-6 border-b-[2px] border-[#FFFFFF] text-start animate__animated animate__fadeInUp'>
              About Me
            </p>
            <div className='flex flex-col gap-4 text-justify pt-4 animate__animated animate__fadeInUp'>
              <p>
                My name is Nguyen Duc Viet, and I am currently a student at the Posts and
                Telecommunications Institute of Technology, where I have had the opportunity to
                learn and develop my knowledge in the field of information technology and
                telecommunications.
              </p>
              <p>
                Throughout my studies, I have mastered the fundamental principles and have been
                exposed to many advanced technologies. Additionally, I have gained practical
                experience through an internship at Authentic Education Hub Joint Stock Company.
                During my time there, I participated in real-world projects, learned from
                experienced professionals, and honed my skills in teamwork, problem-solving, and
                developing technology-based educational applications. This internship not only
                allowed me to apply theoretical knowledge to practice but also equipped me with the
                essential skills needed for my future career.
              </p>
              <p>
                I am always striving to learn and improve myself, with the aspiration to contribute
                positively to the development of the information technology and telecommunications
                industry in Vietnam.
              </p>
              {!statusDrop && (
                <p>
                  Beyond my academic and professional experiences, I am passionate about exploring
                  emerging technologies and staying updated with industry trends. I regularly
                  participate in workshops, seminars, and online courses to broaden my understanding
                  and keep my skills relevant. My areas of interest include artificial intelligence,
                  machine learning, and telecommunications infrastructure, and I am particularly
                  fascinated by how these technologies can be leveraged to solve real-world problems
                  and improve people's lives. I am always striving to learn and improve myself, with
                  the aspiration to contribute positively to the development of the information
                  technology and telecommunications industry in Vietnam. I am eager to collaborate
                  with like-minded individuals and organizations to drive innovation and make a
                  meaningful impact in this ever-evolving field.
                </p>
              )}
              <div
                onClick={toggleDropdown}
                className='cursor-pointer text-[#B0B0B0] animate__animated animate__fadeInUp'
              >
                {!statusDrop ? (
                  <div className='flex '>
                    <div className='text-[#B0B0B0] pt-[6px]'>Compact</div>
                    <IconButton>
                      <KeyboardArrowUpOutlinedIcon sx={{ color: "#B0B0B0" }} />
                    </IconButton>
                  </div>
                ) : (
                  <div className='flex'>
                    <div className='text-[#B0B0B0] pt-[6px]'>View more</div>
                    <IconButton>
                      <KeyboardArrowDownOutlinedIcon sx={{ color: "#B0B0B0" }} />
                    </IconButton>
                  </div>
                )}
              </div>
            </div>
            <div className='pt-2'>
              <Slider {...settings}>
                {data?.map((el: any, i: number) => (
                  <div key={i} className='relative'>
                    <Image
                      src={el?.banner}
                      alt=''
                      width={1000}
                      height={200}
                      className='w-full aspect-[1000/200] object-cover rounded-lg animate__animated animate__fadeInUp'
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-5'>
          <div></div>
          <div className='text-[#FFFFFF] text-[36px] col-span-3'>
            <div className='border-b-[2px] border-[#FFFFFF] pb-2 w-[240px]'> My photos</div>
            <div>
              <div className=' flex gap-3 py-6'>
                {data?.map((url: any, index: number) => (
                  <div key={index} className='grid grid-cols-3 gap-3 justify-center items-center'>
                    <Image
                      src={url?.image}
                      alt=''
                      width={180}
                      height={150}
                      onClick={() => handleImageClick(url?.image)}
                      className='cursor-pointer max-w-[350px] h-full rounded-md group overflow-hidden relative after:duration-500 before:duration-500  duration-700 hover:after:duration-700 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-700 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute   hover:rotate-12 flex justify-center items-center'
                    />
                  </div>
                ))}
              </div>

              {selectedImage && (
                <div
                  className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'
                  onClick={handleCloseModal}
                >
                  <div className='w-full h-full flex justify-center items-center'>
                    <Image
                      src={selectedImage}
                      alt=''
                      width={500}
                      height={900}
                      className=' rounded-md'
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='card flex justify-center items-center'>
          <div className='relative bg-black w-[300px] sm:w-[500px] group transition-all duration-700 aspect-video flex items-center justify-center'>
            <div className='transition-all flex flex-col items-center py-3 justify-start duration-300 group-hover:duration-1000 bg-white w-[500px] h-full absolute group-hover:-translate-y-16'>
              <p className='text-xl sm:text-[24px] font-semibold text-gray-500 font-serif'>
                Thank You
              </p>
              <p className='px-10 text-[10px] text-center sm:text-[12px] text-gray-700'>
                I look forward to the opportunity to discuss and cooperate with you in the future.
                If you need any further information, please contact me via email address:
                viet.ngd.2002@gmail.com or phone number: 0868650928.
              </p>
              <p className='font-serif text-[10px] sm:text-[12px text-gray-700'>
                Wishing you a fantastic day ahead!
              </p>
              <p className='font-sans text-[10px] text-gray-700 pt-5'>Viet Nguyen</p>
            </div>
            <button className='seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900'>
              Open
            </button>
            <div className='tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]'></div>
            <div className='lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]'></div>
            <div className='rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]'></div>
            <div className='btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]'></div>
          </div>
        </div>
      </div>
      <div
        className='grid grid-cols-5 py-6'
        style={{
          backgroundImage: `url(${BannerBottom.src})`,
          height: "600px",
        }}
      >
        <div></div>
        <div className='col-span-3 text-[#FFFFFF]'>
          <p className='font-medium'>Let's get in touch. Send me a message:</p>
          <div className='flex flex-col gap-2 pt-3'>
            <Typography variant='body2' fontWeight={500}>
              Email
            </Typography>
            <TextField
              className='bg-white rounded-md'
              fullWidth
              size='small'
              type='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='end'>
                    <a
                      href='mailto:viet.ngd.2002@classforme.edu.vn'
                      className='text-14-20 lg:text-16-24 font-inter-400 text-primary tracking-[0.2px]'
                    >
                      viet.ngd.2002@classforme.edu.vn
                    </a>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant='body2' fontWeight={500}>
              Number phone
            </Typography>
            <TextField
              className='bg-white rounded-md'
              fullWidth
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='end'>
                    <a href='tel:1900636758'>
                      <p>0868650928</p>
                    </a>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className='flex flex-col justify-end items-end gap-2 pt-4'>
            <div className='font-medium'>Contact me</div>

            <div className='text-[12px] text-gray-400 italic'>@toha-material.AI</div>
            <div className='text-[12px] text-gray-400 flex gap-1'>
              <div>
                <LocationOnIcon
                  sx={{
                    width: "14px",
                  }}
                />
              </div>
              <div className='pt-1'>Bac Ninh City</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
