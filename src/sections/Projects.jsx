import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import Viddeo from "../assets/screensho/videoapp.png"
import Gcart from "../assets/screensho/gcart.png"
import NFx from "../assets/screensho/netflix.png"
const projects = [
    {
        title: "VEDDIO",
        subtitle: "Media Player",
        image: Viddeo,
        description: "A media player application featuring video upload and history tracking. Built using modern frontend architecture.",
        tech: ["React", "Tailwind CSS", "JSON Server", "Axios"],
        link: "https://video-app1.vercel.app/",
        github: "https://github.com/imaswin12345/VideoApp",
        color: "from-yellow-400 to-yellow-500"
    },
    {
        title: "G-CART",
        subtitle: "E-commerce",
        image: Gcart,
        description: "Simple E-commerce application with wishlist, cart management, and product total calculations.",
        tech: ["React", "Bootstrap", "Custom CSS"],
        link: "https://gcart-sigma.vercel.app/",
        github: "https://github.com/imaswin12345/Gcart",
        color: "from-yellow-500 to-yellow-500"
    },
    {
        title: "NETFLIX",
        subtitle: "UI Clone",
        image: NFx,
        description: "A UI clone utilizing the Fetch API to dynamically load data from a fake API source.", 
        tech: ["React", "Bootstrap", "CSS", "Fetch API"],
        link: "https://magenta-nougat-470c6b.netlify.app/",
        github: "https://github.com/imaswin12345/NetflixClone",
        color: "from-yellow-500 to-yellow-500"
    },
    {
        title: "MEMORY",
        subtitle: "Game",
        image: "https://placehold.co/600x400/0a0a0a/60A5FA?text=MEMORY+GAME",
        description: "A classic memory matching game to practice state management and side effects using React Hooks.", 
        tech: ["React Hooks", "Bootstrap"],
        link: "https://memorygamessss.netlify.app/",
        github: "https://github.com/imaswin12345/memory-game",
        color: "from-yellow-500 to-yellow-500"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                type: "spring", 
                stiffness: 70, 
                damping: 15,
                delay: index * 0.1 
            }}
            className="group relative"
        >
            {/* Card Container */}
            <div className="relative overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Project Number */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Title */}
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1">
                            {project.title}
                        </h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                            <span 
                                key={i}
                                className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 rounded-full border border-gray-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Live <ArrowUpRight className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 font-semibold text-sm transition-all duration-300"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Github className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

function Projects() {
    return (
        <div id='projects' className='min-h-screen bg-black text-white relative overflow-hidden'>

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
              opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3],
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
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-20 right-40 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-40 left-40 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

            <div className='container mx-auto px-6 py-24 md:py-32 max-w-7xl relative z-10'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-gray-600 text-sm tracking-widest uppercase">— My work</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
                        FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400">PROJECTS</span>
                    </h1>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "200px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-px bg-gradient-to-r from-yellow-500 to-transparent"
                    ></motion.div>
                    
                    {/* Large background number */}
                    <motion.div
                        className="absolute right-0 top-0 text-[12rem] md:text-[16rem] font-bold text-transparent pointer-events-none"
                        style={{
                            WebkitTextStroke: '2px rgba(255,255,255,0.03)'
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        03
                    </motion.div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;