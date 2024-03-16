'use client';
import React from 'react';
import { Categories, PopularTags } from '@/utils';
import { Typography } from '@material-tailwind/react';
import { FaAngleRight, FaLinkedinIn } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="footer_wrp flex justify-between py-5">
          <div className="logo_section flex flex-col gap-4 w-2/5">
            <img src="" alt="logo" />
            <h4 className="text-white">
              Loksevagyaan covers a wide range of subjects, including not
              limited to fashion, lifestyle, health, Technology, sports etc.
            </h4>
            <div className="socialIcon_wrp flex gap-4">
              <div className="bg-gray-700 p-4 rounded-full">
                <TiSocialFacebook color="white" className="text-2xl" />
              </div>
              <div className="bg-gray-700 p-4 rounded-full">
                <FaTwitter color="white" className="text-2xl" />
              </div>
              <div className="bg-gray-700 p-4 rounded-full">
                <FaLinkedinIn color="white" className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="categories_wrp flex flex-col">
            <h1 className="text-2xl text-white font-bold pb-3">Categories</h1>
            <div className="flex flex-col gap-3">
              {Categories.map((category, index) => (
                <div key={index} className="cat1 flex gap-2 items-center">
                  <FaAngleRight color="white" />
                  <Typography
                    className="text-white text-lg font-medium font-sans"
                    placeholder={''}
                  >
                    {category}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="recentPosts_wrp font-bold text-2xl text-white">
            Recent posts
          </div>
          <div className="tag_wrp flex flex-col gap-2">
            <h3 className="text-white text-2xl font-bold pb-3">Popular Tags</h3>
            {PopularTags.map((tag, index) => (
              <div key={index} className="tag1 flex gap-2">
                <div className="px-4 py-2 border border-gray-300 rounded-md">
                  <Typography
                    className="text-white font-sans font-semibold"
                    placeholder={''}
                  >
                    {tag}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-gray-400 border-t-2 py-4">
        <div className="container">
          <div className="flex justify-center">
            <Typography
              placeholder={''}
              className="text-white font-sans font-bold flex gap-3 items-center"
            >
              Copyright ⓒ 2024
              <span className="font-sans font-bold text-xl text-red-400">
                LokSevaGyaan.
              </span>
              All Rights Reserved
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
