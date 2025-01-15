import React from 'react';
import { profileimage } from '../components/Images';

const Header = () => {
  return (
    <div className=" w-full bg-shades p-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="box1 md:w-1/2 m-auto">
          <div className=" flex flex-col gap-8 header-content">
            <p className="text-base font-bold">Hey,I am Nima</p>
            <h1 className="text-6xl font-bold">I Develop <span className="text-primary">Website</span> <br/>And Create <br /><span className="text-primary">UI/UX</span> Design</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et itaque nihil doloremque repudiandae ipsam. Obcaecati, laudantium consectetur dolore porro modi corporis omnis quos. Nihil quas impedit perferendis? Autem, laborum consequuntur!</p>
            <button class=" bg-primary text-white py-2 px-4 rounded border-2 border-primary w-36">Get in touch</button>

          </div>

        </div>
        <div className="box2 md:w-1/2 flex justify-center">
          <div className="profileimage">
            <img src={profileimage} alt="profileimage" className=" w-4/5 mx-auto"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
