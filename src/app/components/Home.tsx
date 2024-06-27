"use client";
import React from "react";
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
import ImageProfile7 from "./image-profile/image7.jpg";
import { Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Slider from "react-slick";
import banner1 from "./image-profile/banner1.jpg";
import banner2 from "./image-profile/banner2.jpg";
import banner3 from "./image-profile/banner3.jpg";
import banner4 from "./image-profile/banner4.jpg";
import banner6 from "./image-profile/banner6.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomePage = () => {
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
    <div>
      <div
        className='text-[60px] text-white flex flex-col text-center pl-[120px] pt-[200px]'
        style={{
          backgroundImage: `url(https://wallpapercave.com/wp/wp4974496.jpg)`,
          height: "1000px",
        }}
      >
        <p>Mr NGUYEN DUC VIET</p>
        <p className='text-[16px]'>Intern Front-End Developer in Authentic Education Hub</p>
        <div className='flex gap-3 pt-3 justify-center items-center'>
          <Link href='https://www.facebook.com/profile.php?id=100024756409898' target='_blank'>
            <Image
              src={IconFacebook}
              alt='Facebook'
              width={30}
              height={30}
              className='cursor-pointer'
            />
          </Link>

          <Link href='https://chat.zalo.me/' target='_blank'>
            <Image src={IconZalo} alt='' width={30} height={30} className='cursor-pointer' />
          </Link>

          <Link href='https://www.instagram.com/vyet_oct8/' target='_blank'>
            <Image
              src={IconIG}
              alt=''
              width={30}
              height={30}
              className='cursor-pointer hover:opacity-60'
            />
          </Link>
          <Image src={IconTW} alt='' width={30} height={30} className='cursor-pointer' />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(https://img4.thuthuatphanmem.vn/uploads/2020/06/05/hinh-nen-cong-nghe-don-gian-ma-dep_103228946.jpg)`,
          height: "1080px",
        }}
        className='flex flex-col gap-5'
      >
        <div className='grid grid-cols-5'>
          <div></div>
          <div className='text-[#FFFFFF] flex flex-col col-span-3'>
            <p className='text-[36px] pt-3 border-b-[2px] border-[#FFFFFF] text-start'>About Me</p>
            <div className='flex flex-col gap-4  text-justify pt-4'>
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
            </div>
            <div className='pt-3'>
              <Slider {...settings}>
                {data?.map((el: any, i: number) => (
                  <div key={i} className='relative'>
                    <Image
                      src={el?.banner}
                      alt=''
                      width={1000}
                      height={300}
                      className='w-full aspect-[1000/300] object-cover rounded-lg'
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
            <div className='flex gap-3 py-6'>
              {data?.map((el: any) => (
                <div>
                  <Image
                    src={el?.image}
                    alt=''
                    width={150}
                    height={150}
                    className='w-full h-full rounded-md'
                  />
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>

        {/* <div className='grid grid-cols-5'>
          <div></div>
          <div className='col-span-3 text-[#FFFFFF]'>
            <p>Let's get in touch. Send me a message:</p>
            <div className='flex flex-col gap-2 pt-3'>
              <Typography variant='body2' fontWeight={500}>
                Email
              </Typography>
              <TextField
                placeholder='Please fill email'
                className='bg-white rounded-md'
                fullWidth
                size='small'
                type='email'
              />
              <Typography variant='body2' fontWeight={500}>
                Number phone
              </Typography>
              <TextField
                placeholder='Number'
                className='bg-white rounded-md'
                fullWidth
                size='small'
              />
              <Typography variant='body2' fontWeight={500}>
                Description
              </Typography>
              <TextField
                placeholder='Description'
                className='bg-white rounded-md'
                fullWidth
                size='small'
              />
              <button className='px-3 py-2 bg-white text-[#000000] hover:bg-slate-200 w-[60px] rounded-md mt-2'>
                <SendIcon color='primary' />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default HomePage;
