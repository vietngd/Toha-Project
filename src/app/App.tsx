"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Paper } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Profile from "./components/Profile";
import HomePage from "./components/Home";
import Image from "next/image";
import Logo from "./components/images/logoheader.png";
import TohaLogo from "./components/images/toha.png";
import Product from "./components/Product";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const BasicTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <div className='grid grid-cols-3 bg-slate-300'>
          <div className='flex p-2 text-[24px] pl-8'>
            <div>
              <Image src={Logo} alt='' width={38} height={50} />
            </div>
            <div className='flex justify-center items-center'>
              <Image src={TohaLogo} alt='' width={80} height={90} />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                <Tab
                  label='Trang chủ'
                  {...a11yProps(1)}
                  className='text-gray-500 hover:text-gray-700 font-bold'
                />
                <Tab
                  label='Thông tin cá nhân'
                  {...a11yProps(2)}
                  className='text-gray-500 hover:text-gray-700 font-bold'
                />

                <Tab
                  label='Sản phẩm'
                  {...a11yProps(3)}
                  className='text-gray-500 hover:text-gray-700 font-bold'
                />
                <Tab
                  label='Item 4'
                  {...a11yProps(4)}
                  className='text-gray-500 hover:text-gray-700 font-bold'
                />
                <Tab
                  label='Item 5'
                  {...a11yProps(5)}
                  className='text-gray-500 hover:text-gray-700 font-bold'
                />
              </Tabs>
            </Box>
          </div>
          <div></div>
        </div>
        <CustomTabPanel value={value} index={0}>
          <HomePage />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Profile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Product />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Four
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Item Five
        </CustomTabPanel>
      </Box>
    </div>
  );
};
export default BasicTab;
