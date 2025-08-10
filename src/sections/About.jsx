import React from 'react';
import { motion } from 'framer-motion';
import aswin from '../assets/aswin.jpg';
import html from '../assets/techStacks/html.png';
import js from '../assets/techStacks/javascrip.png';
import css from '../assets/techStacks/css.png';
import bst from '../assets/techStacks/bootsrap.png';
import react from '../assets/techStacks/react.png';
import Tailwind from '../assets/techStacks/tailwind.png';
import redux from '../assets/techStacks/redux.png';
import azios from '../assets/social/Azios.png'

function About() {
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
    hidden: { y: 30, opacity: 0 },
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

  const image = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const techIcon = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <section className='py-8 md:py-16 text-dark bg-light bg-gradient-to-br from-green-300 via-yellow-50'>
        <div className='container mx-auto px-4 md:px-9'>
          <motion.div 
            className='flex flex-col md:flex-row items-center gap-6 md:gap-10'
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* left side of the about */}
            <motion.div 
              className='md:w-1/2'
              variants={container}
            >
              <motion.h2 
                className='text-2xl md:text-3xl font-bold text-violet-700 mb-6 md:mb-10'
                variants={item}
              >
                ABOUT ME
              </motion.h2>
              
              <motion.p 
                className='text-gray-900 text-lg md:text-xl'
                variants={item}
              >
                Hi i am - <span className='font-semibold'>Aswin</span> — a passionate front-end developer based in Kochi, India. I love building clean, responsive user interfaces using React, Tailwind, and modern web technologies. I'm currently focused on full-stack development and crafting real-world portfolio projects.
              </motion.p>
              
              <motion.p 
                className='mt-4 text-gray-700 text-lg md:text-xl'
                variants={item}
              >
                When I'm not coding, you'll find me exploring new tech trends, improving my skills, or playing around with design ideas. Let's build something amazing!
              </motion.p>
              
              <motion.div 
                className='mt-6'
                variants={item}
              >
                <motion.h1 
                  className='text-xl md:text-2xl text-yellow-500'
                  variants={item}
                >
                  Tech Stack <span className='font-semibold text-green-500'>Front-End</span>
                </motion.h1>
                
                <motion.div 
                  className='flex flex-wrap gap-3 items-center mt-3'
                  variants={container}
                >
                  {[html, css, js, react, Tailwind,azios, redux, bst].map((icon, index) => (
                    <motion.img
                      key={index}
                      src={icon}
                      alt="Tech icon"
                      className='w-8 md:w-10 h-auto'
                      variants={techIcon}
                      whileHover="hover"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side of the about -my image */}
            <motion.div 
              className='md:w-1/2 flex justify-center mt-6 md:mt-0'
              variants={image}
            >
              <motion.img
                src={aswin}
                alt="Aswin"
                className='rounded-lg shadow-md object-cover w-64 md:w-[300px] bg-dark'
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;