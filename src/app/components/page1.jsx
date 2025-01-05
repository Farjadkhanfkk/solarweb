"use client"; // Ensure this is a client component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // For the logo/icon image
import Carousel from './carousal/page';
import HappyCustomers from './happyclient';
import OurService from './ourserivce/page';
import WhyChooseUs from './whychooseus/page';
import Testimonials from './Testimonials/page';
import Wee from './weee/page';
import Footer from './Footer/page';

import ForOfficePage from './foroffice/page';
import Naavbar from './mynavbar/page'
const Navbar = () => {
  return (
    <>
      

      {/* Below Navbar Components */}
      <Naavbar />
      <Carousel />
      <ForOfficePage />
      <OurService />
      <HappyCustomers />
      <WhyChooseUs />
      <Wee />
      <Testimonials />
      <Footer />
      
      
    </>
  );
};



export default Navbar;
