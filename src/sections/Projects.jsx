import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import videoapp from '../assets/videoapp.png';
import gcart from '../assets/gcart.png';
import netflix from '../assets/netflix.png';
import memory from '../assets/memory.png';


function Projects() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const title = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      id='projects' 
      className='py-8 bg-gradient-to-br from-green-300 via-yellow-80 to-orange-70'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-7'>
        <motion.div 
          className='text-center mb-8 md:mb-16'
          variants={title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className='text-3xl md:text-4xl font-bold text-violet-500'>PROJECTS</h3>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={item}>
            <ProjectCard
              title="VEDDIO Media Player"
              image={videoapp}
              description="Video app with upload and history."
              tech="React, Tailwind, JSON Server,Axios Api"
              link="https://melodic-rugelach-91e78d.netlify.app"
              github="https://github.com/imaswin12345/VideoApp"
            />
          </motion.div>

          <motion.div variants={item}>
            <ProjectCard
              title="G-CART"
              image={gcart}
              description="Simple E commerce appliction with help of fake APIs,features like Wishlist,Cart,Total Sum of the Products(NO backend)"
              tech="React,Bootsrap,Css,"
              link="https://gcart-sigma.vercel.app/"
              github="https://github.com/imaswin12345/Gcart"
            />
          </motion.div>

          <motion.div variants={item}>
            <ProjectCard
              title="NETFLIX (clone UI)"
              image={netflix}
              description="Created a simple UI (clone) of Netflix with the help of fake Api with Fetch method" 
              tech="React,Bootsrap,Css,API fetch"
              link="https://magenta-nougat-470c6b.netlify.app/"
              github="https://github.com/imaswin12345/NetflixClone"
            />
          </motion.div>

           <motion.div variants={item}>
            <ProjectCard
              title="MEMORY_GAME(React Hooks)"
              image={memory}
              description="Created a simple memory game with the help of react Hooks" 
              tech="React,Bootsrap"
              link="https://memorygamessss.netlify.app/"
              github="https://github.com/imaswin12345/memory-game"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;