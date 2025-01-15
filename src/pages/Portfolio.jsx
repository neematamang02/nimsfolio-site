import React from 'react'
import { projct1, project2, project3 } from '../components/Images';
import { MdOutlineArrowOutward } from "react-icons/md";
import { links } from '../components/Links';

const Portfolio = () => {
  return (
    <div className="portfolio p-10">
      <div className="flex justify-between">
        <div className="portfolio-title">
        <p className="text-base font-semibold">Recent Projects</p>
        <h1 className="text-5xl font-bold mt-5">My Portfolio</h1>

        </div>
        <div className="portfolio-btns">
          <button className=" bg-pink-500 text-white py-3 px-4 rounded w-40 hidden sm:block">Visit my projects</button>

        </div>

      </div>

      <div className="flex flex-col 2xl:flex 2xl:flex-row xl:flex xl:flex-row md:flex md:flex-col gap-5 pt-20 justify-center">
        <div className="flex flex-col gap-3 bg-shades border rounded-lg p-5">
          <img src={projct1} alt="proj1"/>
          <h1 className="font-bold">Real state</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque aliquam quas quos aspernatur.</p>
          <div className="flex gap-1">
           
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" ><p className="font-bold text-base">View this project</p></a>
            <MdOutlineArrowOutward className="h-6 w-6"/>
          
            


          </div>

        </div>

        <div className="flex flex-col gap-3 bg-shades border rounded-lg p-5">
          <img src={project2} alt="proj1"/>
          <h1 className="font-bold">App Dashboard</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque aliquam quas quos aspernatur.</p>
          <div className="flex gap-1">
           
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" ><p className="font-bold text-base">View this project</p></a>
            <MdOutlineArrowOutward className="h-6 w-6"/>
          
            


          </div>

        </div>

        <div className="flex flex-col gap-3 bg-shades border rounded-lg p-5">
          <img src={project3} alt="proj1"/>
          <h1 className="font-bold">Easy Rent</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque aliquam quas quos aspernatur.</p>
          <div className="flex gap-1">
           
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" ><p className="font-bold text-base">View this project</p></a>
            <MdOutlineArrowOutward className="h-6 w-6"/>
          
            


          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Portfolio
