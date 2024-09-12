"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import accountData from "@/app/data/account.json";
const FormLoginBasic = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const fakeUser = accountData;
  const handleLogin = () => {
    const user = fakeUser.find(u => u.userName === userName && u.password === password);

    if (user) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("isLoggedIn", "true");
      alert("Đăng nhập thành công!");
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 300);

      setLoginError("");
    } else {
      setLoginError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
      <div className='relative px-4 py-10 bg-slate-200 mx-8 md:mx-0 shadow rounded-3xl sm:p-10'>
        <div className='max-w-md mx-auto'>
          <div className='flex flex-col items-center space-x-5 justify-center text-[30px] font-semibold'>
            Welcome to Toha Mobile
            <p className='text-[16px] text-[#7a7979]'>Vui lòng đăng nhập tài khoản của bạn</p>
          </div>
          <div className='mt-5 flex flex-col gap-4 pb-1'>
            <FormControl component='fieldset' fullWidth>
              <Typography variant='body2' color='initial' fontWeight={600}>
                Email
              </Typography>
              <TextField
                id='outlined-basic'
                size='small'
                placeholder='Nhập email vào đây'
                variant='outlined'
                type='text'
                fullWidth
                value={userName}
                onChange={e => setUserName(e.target.value)}
                InputProps={{
                  style: {
                    fontSize: "14px",
                  },
                }}
                sx={{
                  backgroundColor: "#FFFFFF",
                  marginTop: "4px",
                }}
              />
            </FormControl>

            <FormControl component='fieldset' fullWidth>
              <Typography variant='body2' color='initial' fontWeight={600}>
                Mật khẩu
              </Typography>
              <TextField
                id='outlined-basic'
                size='small'
                placeholder='Nhập mật khẩu vào đây'
                variant='outlined'
                type={showPassword ? "text" : "password"}
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  style: {
                    fontSize: "14px",
                  },
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                      >
                        {showPassword ? (
                          <Tooltip title='Ẩn mật khẩu'>
                            <VisibilityOffIcon
                              sx={{
                                fontSize: "16px",
                              }}
                            />
                          </Tooltip>
                        ) : (
                          <Tooltip title='Hiện mật khẩu'>
                            <VisibilityIcon
                              sx={{
                                fontSize: "16px",
                              }}
                            />
                          </Tooltip>
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "#FFFFFF",
                  marginTop: "4px",
                }}
              />
            </FormControl>
            {loginError && <p className='text-[14px] text-red-500 font-medium'>{loginError}</p>}
          </div>
          <div className='mb-4 flex justify-between'>
            <Link href={`/sign-up`}>
              <span className='text-xs font-semibold text-gray-500 hover:text-gray-600 cursor-pointer'>
                Tạo tài khoản
              </span>
            </Link>

            <Link href={`/sign-up`}>
              <span className='text-xs font-semibold text-gray-500 hover:text-gray-600 cursor-pointer pt-1'>
                Quên mật khẩu?
              </span>
            </Link>
          </div>
          <div className='flex justify-center w-full items-center'></div>
          <div className='mt-5'>
            <button
              onClick={handleLogin}
              className='py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
            >
              Đăng nhập
            </button>
          </div>

          <div className='flex items-center justify-center mt-4'>
            <a
              className='text-xs text-gray-600 uppercase hover:text-opacity-80 hover:underline'
              href='/sign-up'
            >
              hoặc đăng ký
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormLoginBasic;
