'use client';
import React, { useState } from 'react';
import { CiMenuBurger, CiSearch, CiShoppingCart } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
  List,
  ListItem
} from '@material-tailwind/react';
import { menuItems } from '@/utils';
import Marquee from './Marquee';

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="container">
      <div className="main_header py-6">
        <div className="main_header_inner_wrp bg-black text-white flex justify-between font-body">
          <div className="flex gap-5 navLink_wrp">
            <Menu open={openMenu} handler={setOpenMenu} allowHover>
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-3 pl-0 text-base capitalize font-sans font-bold text-white tracking-normal"
                  placeholder={''}
                >
                  Home{' '}
                </Button>
              </MenuHandler>
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-3 text-base capitalize font-sans font-bold text-white tracking-normal"
                  placeholder={''}
                >
                  About Us{' '}
                  <FaAngleDown
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-3 text-base capitalize font-sans font-bold text-white tracking-normal"
                  placeholder={''}
                >
                  Categories{' '}
                  <FaAngleDown
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-3 text-base capitalize font-sans font-bold text-white tracking-normal"
                  placeholder={''}
                >
                  Contact Us{' '}
                </Button>
              </MenuHandler>
              <MenuList
                className="hidden w-[36rem] gap-3 overflow-visible lg:grid"
                placeholder={''}
              >
                <List
                  placeholder={''}
                  className="col-span-4 flex w-full flex-col gap-1"
                >
                  {menuItems.map(({ title, description }) => (
                    <a href="#" key={title}>
                      <MenuItem placeholder={''}>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-1"
                          placeholder={''}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                          placeholder={''}
                        >
                          {description}
                        </Typography>
                      </MenuItem>
                    </a>
                  ))}
                </List>
              </MenuList>
            </Menu>
          </div>

          <div className="searchNavLink flex gap-4 items-center">
            <CiSearch fontSize={30} />
            <CiShoppingCart fontSize={30} />
            <CiMenuBurger fontSize={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
