import React from 'react'
import ProjectCard from '../components/ProjectCard'
import videoapp from '../assets/videoapp.png'
import gcart from '../assets/gcart.png'

function Projects() {
  return (
        <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        description="Simple E commerce appliction with help of fake APIs,features like Wishlist,Cart,Total Sum  of the Products(NO backend)"
        tech="React,Bootsrap,Css,"
        link="https://gcart-sigma.vercel.app/"
        github="https://github.com/imaswin12345/Gcart"
      />
    </div>
  )
}

export default Projects