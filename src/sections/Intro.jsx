import React from 'react';
import { motion } from 'framer-motion';
import insta from '../assets/social/insta.png';
import git from '../assets/social/anyrgb.com.png';
import linkd from '../assets/social/linkd.png';
import whats from '../assets/social/whatapp.png';
import thought from '../assets/social/thought.png'

function Intro() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const socialItem = {
    hover: {
      scale: 1.1,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-yellow-80 to-orange-70 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
       id='aswin'
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 py-8">
        {/* Left Side - Text */}
        <motion.div 
          className="text-center md:text-left px-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-2xl md:text-4xl text-yellow-500 mb-2"
            variants={item}
          >
            — Hello <span className='text-green-500'>i am</span>
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
            variants={item}
          >
            Aswin Viju
          </motion.h1>
          
          <motion.h3 
            className="text-lg md:text-xl font-semibold text-gray-700 mb-3"
            variants={item}
          >
            Aspiring Full-Stack Developer
          </motion.h3>
          
          <motion.p 
            className="text-gray-700 text-lg md:text-2xl"
            variants={item}
          >
            I'm passionate about creating digital experiences and continuously improving my skills.
            I'm currently aiming to become a full-stack developer while also growing my design abilities
            to build clean, user-focused products.
          </motion.p>

          <motion.div 
            className="text-center md:text-left mt-5"
            variants={item}
          >
            <div className=" flex items-center gap-2 justify-center">
            <h3 className='font-bold text-green-500'>CONNECT <span className='text-yellow-500'>WITH</span> ME </h3>
            {/* <img 
            style={{ height: "100px", width: "100px" }}
            src={thought} 
            alt="" /> */}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div 
            className="flex justify-center md:gap-8 py-4 mt-5"
            variants={container}
          >
            <motion.a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialItem}
              whileHover="hover"
            >
              <img className="w-10 h-10 md:w-10 md:h-10" src={insta} alt="Instagram" />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialItem}
              whileHover="hover"
            >
              <img className="w-10 h-10 md:w-10 md:h-10" src={linkd} alt="LinkedIn" />
            </motion.a>
            
            <motion.a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialItem}
              whileHover="hover"
            >
              <img className="w-10 h-10 md:w-12 md:h-12" src={git} alt="GitHub" />
            </motion.a>
            
            <motion.a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialItem}
              whileHover="hover"
            >
              <img className="w-10 h-10 md:w-10 md:h-10" src={whats} alt="WhatsApp" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Intro;