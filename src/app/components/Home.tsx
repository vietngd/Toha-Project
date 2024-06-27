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

const HomePage = () => {
  const data = [
    {
      id: 1,
      image: ImageProfile1,
    },
    {
      id: 2,
      image: ImageProfile2,
    },
    {
      id: 3,
      image: ImageProfile3,
    },
    {
      id: 4,
      image: ImageProfile4,
    },
    {
      id: 6,
      image: ImageProfile6,
    },
    {
      id: 7,
      image: ImageProfile7,
    },
  ];
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
            <Image src={IconFacebook} alt='Facebook' width={30} height={30} />
          </Link>

          <Link href='https://chat.zalo.me/' target='_blank'>
            <Image src={IconZalo} alt='' width={30} height={30} />
          </Link>

          <Link href='https://www.instagram.com/vyet_oct8/' target='_blank'>
            <Image src={IconIG} alt='' width={30} height={30} />
          </Link>
          <Image src={IconTW} alt='' width={30} height={30} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "1000px",
        }}
        className='flex flex-col gap-8'
      >
        <div className='grid grid-cols-5'>
          <div></div>
          <div className='text-[#FFFFFF] flex flex-col col-span-3'>
            <p className='text-[40px] pt-4 border-b-[2px] border-[#FFFFFF] text-start'>About Me</p>
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
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-5'>
          <div></div>
          <div className='text-[#FFFFFF] text-[40px] col-span-3'>
            <div className='border-b-[2px] border-[#FFFFFF] pb-2 w-[240px]'> My photos</div>
            <div className='flex gap-3 py-6'>
              {data?.map((el: any) => (
                <div>
                  <Image
                    src={el?.image}
                    alt=''
                    width={150}
                    height={150}
                    className='w-full h-full'
                  />
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>

        <div className='grid grid-cols-5'></div>
      </div>
    </div>
  );
};
export default HomePage;
