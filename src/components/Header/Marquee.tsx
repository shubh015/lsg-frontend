'use client';
import { Typography } from '@material-tailwind/react';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Marquee: React.FC = () => {
  return (
    <div className="container">
      <div className="marquee_wrp">
        <div className="flex justify-center">
          <div className="bg-red-400 flex justify-center items-center px-2">
            <Typography
              className="font-sans font-bold text-center text-white"
              variant="h6"
              placeholder={''}
            >
              Trending Articles
            </Typography>
          </div>
          <div className="flex overflow-x-hidden overflow-y-hidden bg-gray-400 justify-center w-full py-[13px] flex-1">
            <div className="top-0 animate-marquee flex whitespace-nowrap">
              <Typography
                className="font-sans mx-4 flex items-center gap-2 font-semibold"
                placeholder={''}
              >
                <GoDotFill color="red" />
                Marquee Item 1
              </Typography>
              <Typography
                placeholder={''}
                className="font-sans mx-4 flex items-center gap-2 font-semibold"
              >
                <GoDotFill color="red" />
                Marquee Item 2
              </Typography>
              <Typography
                placeholder={''}
                className="font-sans mx-4 flex gap-2 items-center font-semibold"
              >
                <GoDotFill color="red" />
                Marquee Item 3
              </Typography>
              <Typography
                placeholder={''}
                className="font-sans mx-4 flex gap-2 items-center font-semibold"
              >
                <GoDotFill color="red" />
                Marquee Item 4
              </Typography>
              <Typography
                placeholder={''}
                className="font-sans mx-4 flex gap-2 items-center font-semibold"
              >
                <GoDotFill color="red" />
                Marquee Item 5
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
