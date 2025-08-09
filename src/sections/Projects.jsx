import React from 'react'
import ProjectCard from '../components/ProjectCard'
import videoapp from '../assets/videoapp.png'
import gcart from '../assets/gcart.png'
import netflix from '../assets/netflix.png'

function Projects() {
  return (
    <div id='projects' className='py-8 bg-gradient-to-br from-green-300 via-yellow-80 to-orange-70'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8 md:mb-16'>
          <h3 className='text-3xl md:text-3xl font-bold text-violet-600'>PROJECTS</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          <ProjectCard
            title="VEDDIO Media Player"
            image={videoapp}
            description="Video app with upload and history."
            tech="React, Tailwind, JSON Server,Axios Api"
            link="https://melodic-rugelach-91e78d.netlify.app"
            github="https://github.com/imaswin12345/VideoApp"
          />

          <ProjectCard
            title="G-CART"
            image={gcart}
            description="Simple E commerce appliction with help of fake APIs,features like Wishlist,Cart,Total Sum of the Products(NO backend)"
            tech="React,Bootsrap,Css,"
            link="https://gcart-sigma.vercel.app/"
            github="https://github.com/imaswin12345/Gcart"
          />

          <ProjectCard
            title="NETFLIX (clone UI)"
            image={netflix}
            description="Created a simple UI (clone) of Netflix with the help of fake Api with Fetch method" 
            tech="React,Bootsrap,Css,API fetch"
            link="https://magenta-nougat-470c6b.netlify.app/"
            github="https://github.com/imaswin12345/NetflixClone"
          />
        </div>
      </div>
    </div>
  );
}
export default Projects