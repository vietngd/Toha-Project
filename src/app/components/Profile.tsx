"use client";
import BannerProfile from "@/app/components/images/bannerProfile.jpg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MaleIcon from "@mui/icons-material/Male";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PlaceIcon from "@mui/icons-material/Place";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageProfile from "@/app/components/image-profile/profile.jpg";
import AnimationIcon from "@mui/icons-material/Animation";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import InterestsIcon from "@mui/icons-material/Interests";
import LanguageIcon from "@mui/icons-material/Language";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SchoolIcon from "@mui/icons-material/School";
import SubjectIcon from "@mui/icons-material/Subject";
import { BasicInfo } from "../api/profile";

const BasicTab = () => {
  // const data = {
  //   avatar: ImageProfile,
  //   name: "Nguyễn Đức Việt",
  //   headline: "Vô địch quốc gia môn bóng chuyền",
  //   phone: "0868650928",
  //   email: "viet.ngd.2002@gmail.com",
  //   address: "Phù Lưu - Trung Nghĩa - Yên Phong - Bắc Ninh",
  //   male: "Male",
  //   dateOfBirth: "October 08, 2002",
  //   interests: "My hobbies are soccer, listening to music and traveling...",
  //   skill: "Good communication, presentation and teamwork skills.",
  //   gifted: "Public speaking, teamwork.",
  // };
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState<any>({});
  console.log("data", data);

  const fetchData = async () => {
    try {
      const res = await BasicInfo();
      setData(res.data);
    } catch (error) {
      // TODO: handle error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Paper>
      {data?.items?.map((el: any, index: number) => (
        <div
          className='grid grid-cols-5'
          style={{
            backgroundImage: `url(${BannerProfile.src})`,
          }}
        >
          <div></div>
          <div className='col-span-3 grid grid-cols-5 my-[80px] border-[1px] border-gray-300 rounded-xl'>
            <div className='col-span-2 bg-[#ECF3FF] h-full'>
              <div>
                <div className='text-[36px] text-[#059341] font-medium text-center pt-6'>
                  {el?.name}
                </div>
                <div className='text-[16px] text-[#B0B0B0] text-center pl-3'>Programmer</div>
                <div
                  className='flex justify-center items-center pt-4'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Avatar
                    src={el?.avatar}
                    sx={{
                      width: 180,
                      height: 180,
                      // transition: "all 0.3s ease-in-out",
                    }}
                    className='uppercase rounded-full object-cover w-[200px] h-[200px] aspect-[1/1] ml-3 mb-2 border-[2px] border-[#059341] transition-all duration-300 ease-in-out hover:transform-gpu hover:translate-y-[-25%] hover:shadow-[rgba(226,196,63,0.25)_0px_13px_47px_-5px,rgba(180,71,71,0.3)_0px_8px_16px_-8px]'
                  />
                </div>
                <div className='px-6'>
                  <div>
                    <div className='text-[#059341] text-[18px] font-bold pb-4'>
                      Contact information
                    </div>
                    <div className='text-[14px] flex'>
                      <div>
                        <DateRangeIcon
                          sx={{
                            color: "#059341",
                          }}
                        />
                      </div>
                      <div className='text-[14px] px-1 pt-1'>{el?.contact?.born}</div>
                    </div>
                  </div>
                  <div>
                    <div className='text-[14px] flex'>
                      <div>
                        <MaleIcon
                          sx={{
                            color: "#059341",
                          }}
                        />
                      </div>
                      <div className='text-[14px] px-1 pt-1'> {el?.contact?.male}</div>
                    </div>
                  </div>
                  <div>
                    <div className='text-[14px] flex'>
                      <div>
                        <PhoneAndroidIcon
                          sx={{
                            color: "#059341",
                          }}
                        />
                      </div>
                      <div className='text-[14px] px-1 pt-1'> {el?.contact?.phone}</div>
                    </div>
                  </div>
                  <div>
                    <div className='text-[14px] flex'>
                      <div>
                        <MailOutlineIcon
                          sx={{
                            color: "#059341",
                          }}
                        />
                      </div>
                      <div className='text-[14px] px-1 pt-1'> {el?.contact?.mail}</div>
                    </div>
                  </div>
                  <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                    <div className='text-[14px] flex'>
                      <div>
                        <PlaceIcon
                          sx={{
                            color: "#059341",
                          }}
                        />
                      </div>
                      <div className='text-[14px] px-1 pt-1'> {el?.contact?.address}</div>
                    </div>
                  </div>
                </div>
                <div className='px-6'>
                  <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                    <div className='text-[#059341] text-[18px] font-bold py-4 flex gap-1'>
                      <InterestsIcon />
                      Interests
                    </div>
                    <div className='text-[14px] flex'>
                      <div className='text-[14px]'>{el?.interest}</div>
                    </div>
                  </div>
                </div>

                <div className='px-6 '>
                  <div className='text-[#059341] text-[18px] font-bold py-4 flex gap-1'>
                    <AnimationIcon />
                    Skills
                  </div>
                  <div className='text-[14px] border-b-[1px] border-[#FB9F21] pb-4'>
                    {el?.skills?.map((ol: any, i: number) => (
                      <div className='font-bold'>{ol?.description}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className='px-6'>
                    <div className='text-[18px] text-[#059341] py-4 flex gap-1'>
                      <LanguageIcon />
                      <p className='text-[18px] font-bold'>Languages</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='text-[14px]'>Vietnamese</p>
                      <div className='w-full h-3 bg-gray-300 rounded-xl'>
                        <div className='h-full bg-teal-500 rounded-xl' style={{ width: "100%" }} />
                      </div>
                      <p className='text-[14px]'>English</p>
                      <div className='w-full h-3 bg-gray-300 rounded-xl'>
                        <div className='h-full bg-teal-500 rounded-xl' style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6 col-span-3'>
              <div>
                <div className='text-[#059341] font-bold py-4 flex gap-2'>
                  <SubjectIcon />
                  Objective
                </div>
                <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                  <p>Apply the knowledge learned to become a professional programming engineer.</p>
                  <p>
                    Make products that help the company and generate income for the company as well
                    as yourself.
                  </p>{" "}
                  <p>Long-term association with the company.</p>
                </div>
              </div>

              <div>
                <div className='text-[#059341] font-bold py-4 flex gap-2'>
                  <SchoolIcon />
                  Education
                </div>
                <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                  <div className='flex justify-between'>
                    <p className='font-bold'>Post and Telecomunications Institute of Technology</p>
                    <p className='text-gray-500'>2020-now</p>
                  </div>
                  <div className='pt-3 flex flex-col gap-1'>
                    <p>Electronics and Telecommunication.</p>
                    <p className='text-gray-500'>CPA: 2.81/4.0</p>
                  </div>
                </div>
              </div>

              <div>
                <div className='text-[#059341] font-bold py-4 flex gap-2'>
                  <LocalActivityIcon />
                  Activities
                </div>
                <div className='border-b-[1px] border-[#FB9F21] pb-10'>
                  <div className='flex justify-between'>
                    <p className='font-bold'>Join the school's volunteer club</p>
                    <p className='text-gray-500'>2020-2022</p>
                  </div>
                  <div className='pt-3'>
                    <p>Night distribution for the homeless.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className='text-[#059341] font-bold py-4 flex gap-2'>
                  <CoPresentIcon />
                  Work experience
                </div>
                <div className='border-b-[1px] border-[#FB9F21] pb-10'>
                  <div>
                    <p className='font-bold'>Front End Developer</p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex justify-between'>
                      <p>Internship at Authentic Education Hub Joint Stock Company</p>
                      <p>18/07/2023 - now</p>
                    </div>
                    <p className='text-gray-500'>PTIT</p>
                    <p>
                      Having good ability on implement algorithms, for implementation new feature
                    </p>
                    <p>
                      Experienced with React Hook, Next js, HTML, CSS, SCSS, Tailwind Css,
                      JavaScript, TypeScript. Have experience tools: Microsoft Office Word, Excel,
                      PowerPoint, Visual Studio Code Special Tools: Jira, Git.
                    </p>
                    <p>Experienced implement responsive web app support for multiples devices.</p>
                    <p>
                      Used to run an associated book and author list API using Express, MongoDB,
                      Postman.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className='text-[#059341] font-bold py-4 flex gap-1'>
                  <MilitaryTechIcon />
                  Honors & Awards
                </div>
                <div className='border-b-[1px] border-[#FB9F21] pb-10'>
                  <div>
                    <p className='font-bold'>None</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </Paper>
  );
};
export default BasicTab;
