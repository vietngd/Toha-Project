"use client";

import React from "react";
import ViewsExtention from "../ViewsExtentions";
import Image from "next/image";
import Link from "next/link";
import IconFacebook from "@/app/components/images/facebook.svg";
import IconZalo from "@/app/components/images/zalo.png";
import IconIG from "@/app/components/images/instagram.png";
import IconTW from "@/app/components/images/twitter.png";
import BannerFooter from "./bannerFooter.jpg";
const FooterLayout = () => {
  return (
    <footer
      className='relative pt-8 pb-6'
      style={{
        backgroundImage: `url(${BannerFooter.src})`,
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-left lg:text-left'>
          <div className='w-full lg:w-6/12 px-4'>
            <h4 className='text-3xl font-semibold text-blueGray-700'>Let's keep in touch!</h4>
            <h5 className='text-[16px] mt-0 mb-2 text-blueGray-600'>
              Find me on any of these platforms, I respond 1-2 business days.
            </h5>
            <div className='mt-6 lg:mb-0 mb-6 flex gap-2'>
              <Link href='https://www.facebook.com/profile.php?id=100024756409898' target='_blank'>
                <Image
                  src={IconFacebook}
                  alt='Facebook'
                  width={30}
                  height={30}
                  className='cursor-pointer group flex justify-center rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[20%] transition-all duration-500'
                />
              </Link>

              <Link href='https://chat.zalo.me/' target='_blank'>
                <Image
                  src={IconZalo}
                  alt=''
                  width={30}
                  height={30}
                  className='cursor-pointer group flex justify-center rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[20%] transition-all duration-500'
                />
              </Link>

              <Link href='https://www.instagram.com/vyet_oct8/' target='_blank'>
                <Image
                  src={IconIG}
                  alt=''
                  width={30}
                  height={30}
                  className='cursor-pointer group flex justify-center rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[20%] transition-all duration-500'
                />
              </Link>
              <Image
                src={IconTW}
                alt=''
                width={30}
                height={30}
                className='cursor-pointer group flex justify-center rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[20%] transition-all duration-500'
              />
            </div>
          </div>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                  Useful Links
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://www.creative-tim.com/presentation?ref=njs-profile'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://blog.creative-tim.com?ref=njs-profile'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://www.github.com/creativetimofficial?ref=njs-profile'
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile'
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                  Other Resources
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile'
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/terms?ref=njs-profile'
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/privacy?ref=njs-profile'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/contact-us?ref=njs-profile'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-blueGray-300' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-blueGray-500 font-semibold py-1'>
              Copyright © <span id='get-current-year'>2021</span>
              <a
                href='https://www.creative-tim.com/product/notus-js'
                className='text-blueGray-500 hover:text-gray-800'
                target='_blank'
              >
                Notus JS by
              </a>
              <a
                href='https://www.creative-tim.com?ref=njs-profile'
                className='text-blueGray-500 hover:text-blueGray-800'
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
