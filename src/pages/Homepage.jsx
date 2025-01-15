import React from 'react';
import Header from '../navigationbars/Header';
import { CgWebsite } from "react-icons/cg";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="Expertise p-10">
        <p className="text-base font-semibold">My skills</p>
        <h1 className="text-5xl font-bold mt-5">My Expertise</h1>

        <div className="flex flex-col 2xl:flex 2xl:flex-row xl:flex xl:flex-row md:flex md:flex-col gap-5 justify-between pt-20">
          <div className="flex flex-col gap-3 2xl:w-72 xl:w-72 bg-shades border rounded-lg p-5">
            <CgWebsite className="h-14 w-14" />
            <h2 className="font-bold text-2xl">Website Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque deserunt quod nesciunt</p>
          </div>
          <div className="flex flex-col gap-3 2xl:w-72 xl:w-72 bg-shades border rounded-lg p-5">
            <MdOutlineBrandingWatermark className="h-14 w-14" />
            <h2 className="font-bold text-2xl">Branding & Logo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque deserunt quod nesciunt</p>
          </div>
          <div className="flex flex-col gap-3 2xl:w-72 xl:w-72 bg-shades border rounded-lg p-5">
            <GiFeather className="h-14 w-14" />
            <h2 className="font-bold text-2xl">UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque deserunt quod nesciunt</p>
          </div>
          <div className="flex flex-col gap-3 2xl:w-72 xl:w-72 bg-shades border rounded-lg p-5">
            <FaReact className="h-14 w-14" />
            <h2 className="font-bold text-2xl">React App</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque deserunt quod nesciunt</p>
          </div>
        </div>
      </div>
      <Aboutme/>
      <Portfolio/>
    </div>
  );
};

export default Homepage;
