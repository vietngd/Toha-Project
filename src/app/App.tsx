"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import HomePage from "./components/Home";
import { ToastContainer } from "react-toastify";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const BasicTab = () => {
  const [value, setValue] = useState(0);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const handleClick = () => {
    setShowPopUp(!showPopUp);
  };
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
      <HomePage />
      <ToastContainer />
    </div>
  );
};
export default BasicTab;
