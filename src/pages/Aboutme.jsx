import React from 'react'
import { aboutmeimg } from '../components/Images'

const Aboutme = () => {
  return (
    <div className=" w-full p-10">
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="aboutmeimg md:w-1/2 flex justify-center">
        <img src={aboutmeimg} alt="aboutmeimg" className="w-3/4 mx-auto" />
        

      </div>
      
      <div className=" flex flex-col gap-8 aboutmecontent md:w-1/2 m-auto">
      <p className="text-base font-bold">Hey,I am Nima</p>
            <h1 className="text-6xl font-bold">About Me</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et itaque nihil doloremque repudiandae ipsam. Obcaecati, laudantium consectetur dolore porro modi corporis omnis quos. Nihil quas impedit perferendis? Autem, laborum consequuntur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas repellendus, iusto dolor voluptatibus iste, molestias amet impedit delectus fugit, labore molestiae itaque aperiam! Magni odio atque aut necessitatibus possimus.</p>

      </div>
      
    </div>
    </div>
  )
}

export default Aboutme
