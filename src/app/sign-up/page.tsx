"use client";
import SignUp from "@/app/components/SignUp";
import BannerLogin from "@/app/login/bannerLogin.jpg";
const ClassDetail = () => {
  return (
    <main
      className='py-8'
      style={{
        backgroundImage: `url(${BannerLogin.src})`,
      }}
    >
      <SignUp />
    </main>
  );
};

export default ClassDetail;
