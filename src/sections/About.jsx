import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, LayoutList, Terminal, Feather, Zap, Redo2, Layers, Shield, 
  Database, Server, Box, Palette 
} from 'lucide-react';
import Aswin from "../assets/screensho/aswin.jpg";

const techStack = [
  { name: 'HTML', icon: Terminal },
  { name: 'CSS', icon: LayoutList },
  { name: 'JavaScript', icon: Code },
  { name: 'React', icon: Feather },
  { name: 'Tailwind CSS', icon: Zap },
  { name: 'Redux', icon: Redo2 },
  { name: 'Axios', icon: Layers },
  { name: 'Bootstrap', icon: Shield },
  { name: 'MUI', icon: Palette },
  { name: 'Node.js', icon: Server },
  { name: 'Express.js', icon: Box },
  { name: 'MongoDB', icon: Database },
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div id='about' className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Wandering stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.3 + 0.1,
                Math.random() * 0.5 + 0.3,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 50,
            }}
          />
        ))}
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Main Content */}
      <div className='container mx-auto px-6 py-24 md:py-32 max-w-7xl relative z-10'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'
        >
          {/* Left Side */}
          <div className='lg:col-span-5'>
            <motion.div variants={itemVariants} className="mb-8">
              <span className="text-gray-600 text-sm tracking-widest uppercase">
                — About me
              </span>
            </motion.div>

            <motion.div variants={imageVariants} className='relative'>
              <motion.div
                className="absolute -left-8 -top-8 text-[10rem] font-bold text-transparent z-0"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}
              >
                02
              </motion.div>

              <div className='relative z-10'>
                <motion.img
                  src={Aswin}
                  alt="Aswin Viju"
                  className='w-full max-w-md rounded-lg object-cover'
                  style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.1)' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r border-b border-yellow-500/50"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className='lg:col-span-7'>
            <motion.div variants={containerVariants}>
              <motion.h1
                className='text-5xl md:text-6xl lg:text-7xl font-bold mb-8'
                variants={itemVariants}
              >
                WHO I <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400">AM</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="h-px bg-gradient-to-r from-yellow-500 to-transparent mb-10 max-w-md"
              ></motion.div>

              <motion.div variants={itemVariants} className='space-y-6 mb-12'>
                <p className='text-gray-400 text-lg leading-relaxed'>
                  Hello, I'm <span className='font-semibold text-white'>Aswin Viju</span> — an aspiring Full-Stack Developer based in Kochi, India. I'm driven by a passion for transforming complex ideas into clean, highly responsive, and user-friendly web interfaces.
                </p>
                <p className='text-gray-500 text-base leading-relaxed'>
                  I focus on modern frameworks like <span className='text-yellow-400'>React</span> and design systems like <span className='text-yellow-400'>Tailwind CSS</span>. My current goal is to dive deeper into the backend and design principles to become a comprehensive full-stack developer capable of building polished, end-to-end products.
                </p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={itemVariants}>
                <div className='mb-6'>
                  <h3 className='text-gray-600 text-sm tracking-widest uppercase mb-2'>Tech Stack</h3>
                  <h2 className='text-2xl md:text-3xl font-bold text-white'>My Core Technologies</h2>
                </div>

                <motion.div
                  className='grid grid-cols-4 md:grid-cols-8 gap-4'
                  variants={containerVariants}
                >
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className='group relative flex flex-col items-center justify-center p-4 rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300'
                      variants={itemVariants}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                    >
                      <tech.icon className='w-8 h-8 text-gray-500 group-hover:text-yellow-400 transition-colors duration-300' />
                      <span className='text-[10px] mt-2 text-gray-600 text-center group-hover:text-white transition-colors duration-300'>
                        {tech.name}
                      </span>
                      <div className="absolute inset-0 rounded-lg bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-all duration-300"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className='mt-12'>
                <p className='text-gray-500 text-sm'>
                  Let's connect and build something <span className='text-yellow-400 font-semibold'>impactful</span> together.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
