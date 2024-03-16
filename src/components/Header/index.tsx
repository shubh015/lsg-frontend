'use client';
import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import { Typography } from '@material-tailwind/react';
import { BsCalendarDate } from 'react-icons/bs';

const Header: React.FC = () => {
  return (
    <div className="container header_wrp bg-gray-400">
      <div className="top_header justify-between flex py-4">
        <div className="inner_header_wrp flex gap-4 items-center">
          <div className="flex gap-4 items-center">
            <BsCalendarDate color="red" />
            <Typography className="font-sans font-bold">Date</Typography>
            <p>|</p>
          </div>
          <div className="flex gap-4">
            <Typography className="font-sans font-bold">
              Privacy Policy
            </Typography>
            <p>|</p>
          </div>
          <div className="flex gap-4">
            <Typography className="font-sans font-bold">
              Terms & Conditions
            </Typography>
            <p>|</p>
          </div>
          <div className="flex items-center gap-2">
            <Typography className="font-sans font-bold">Light Mode</Typography>
            <CiLight />
          </div>
        </div>
        <div className="login_wrp flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CiUser color="red" />
            <Typography className="font-sans font-bold">
              Login/Register
            </Typography>
          </div>
          <TiSocialFacebook />
          <IoLogoTwitter />
          <FaLinkedinIn />
          <IoLogoInstagram />
        </div>
      </div>
    </div>
  );
};

export default Header;
