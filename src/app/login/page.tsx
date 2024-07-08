"use client";
import LoginForm from "./LoginForm";
import BannerLogin from "./bannerLogin.jpg";

const ClassDetail = () => {
  return (
    <main
      className='flex justify-center items-center py-8'
      style={{
        backgroundImage: `url(${BannerLogin.src})`,
      }}
    >
      <LoginForm />
    </main>
  );
};

export default ClassDetail;
