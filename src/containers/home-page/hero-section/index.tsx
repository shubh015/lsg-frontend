import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Marquee from '@/components/Header/Marquee';
import Navbar from '@/components/Header/Navbar';
import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <div className="bg-gray-400 ">
        <Header />
      </div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div>
        <Marquee />
      </div>

      <div className="bg-white">
        <Banner />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
