"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Paper, Button } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Profile from "./profile/Profile";
import HomePage from "./components/Home";
import Image from "next/image";
import Logo from "./components/images/logoheader.png";
import TohaLogo from "./components/images/toha.png";
import Product from "./components/Product";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import LoginForm from "./components/login/LoginForm";
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
    </div>
  );
};
export default BasicTab;
