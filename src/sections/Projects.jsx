import React from 'react';
import { motion } from 'framer-motion';
// --- REMOVED unused imports: Github, ExternalLink, ArrowUpRight ---
// We don't need these in Projects.jsx anymore because they are in the imported ProjectCard.jsx
// import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import Viddeo from "../assets/screensho/videoapp.png"
import Gcart from "../assets/screensho/gcart.png"
import NFx from "../assets/screensho/netflix.png"
import Movie from "../assets/screensho/Movie.png"
import KittyFind from "../assets/screensho/KittyFind.png"
import Casco from "../assets/screensho/Casco.png"
// import { Link } from 'react-router-dom'; // Not used in the final component.

// *** STEP 1: Import the external ProjectCard component ***
import ProjectCard from '../components/ProjectCard'; // Assuming it's in a 'components' folder relative to 'sections'. Adjust path if necessary.

const projects = [
    {
        title: "VEDDIO",
        subtitle: "Media Player",
        image: Viddeo,
        description: "A modern media player application enabling video uploads, playback, and history tracking, built with React and Tailwind for a responsive and sleek user experience.",
        tech: ["React", "Tailwind"],
        link: "https://video-app1.vercel.app/",
        github: "https://github.com/imaswin12345/VideoApp",
        color: "from-yellow-400 to-yellow-500"
    },
    {
        title: "G-CART",
        subtitle: "E-commerce Platform",
        image: Gcart,
        description: "A fully functional e-commerce application featuring product listing, cart management, and wishlist capabilities, developed using React and Bootstrap.",
        tech: ["React", "Bootstrap"],
        link: "https://gcart-sigma.vercel.app/",
        github: "https://github.com/imaswin12345/Gcart",
        color: "from-yellow-500 to-yellow-500"
    },
    {
        title: "NETFLIX",
        subtitle: "UI Clone",
        image: NFx,
        description: "A Netflix UI clone leveraging the Fetch API to dynamically render content. Built with React and Bootstrap, focusing on replicating a professional streaming interface.",
        tech: ["React", "Bootstrap"],
        link: "https://magenta-nougat-470c6b.netlify.app/",
        github: "https://github.com/imaswin12345/NetflixClone",
        color: "from-yellow-500 to-yellow-500"
    },
    {
        title: "MEMORY",
        subtitle: "Interactive Game",
        image: "https://placehold.co/600x400/0a0a0a/60A5FA?text=MEMORY+GAME",
        description: "A classic memory matching game designed to demonstrate proficiency in React Hooks and state management, providing an engaging user experience.",
        tech: ["React", "Bootstrap"],
        link: "https://memorygamessss.netlify.app/",
        github: "https://github.com/imaswin12345/memory-game",
        color: "from-yellow-500 to-yellow-500"
    },
    {
        title: "KittyFind (Still in Progress)",
        subtitle: "Cat Rescue & Tracking App",
        image: KittyFind,
        description: "A community-driven application for locating and reporting abandoned or stray cats. Users can post sightings with detailed information and geolocation.",
        tech: ["MERN", "MUI"],
        link: "https://kittenfind-frontend0.onrender.com/",
        github: "https://github.com/imaswin12345/kittenFind-Frontend",
        color: "from-yellow-500 to-yellow-500"
    },
       {
        title: "Movie Finder",
        subtitle: "Movie Search Application",
        image: Movie,
        description: "A movie search application that allows users to find information about their favorite films. Built with React and the TMDB API.",
        tech: ["React", "TMDB API"],
        link: "https://movie-app-zeta-ten-71.vercel.app/",
        github: "https://github.com/imaswin12345/Movie-app.git",
        color: "from-yellow-500 to-yellow-500"
    },
           {
        title: "Casco Tours and Travels",
        subtitle: "Simple Travel Agency Website",
        image: Casco,
        description: "A simple travel agency website built with React and Bootstrap,.",
        tech: ["HTML", "CSS"],
        link: "https://cascotours.netlify.app/",
        github: "https://github.com/imaswin12345/Casco",
        color: "from-yellow-500 to-yellow-500"
    }
];

// *** STEP 2: REMOVE the old ProjectCard component definition from Projects.jsx ***
// The ProjectCard component that started at line 85 has been removed.

function Projects() {
    return (
        <div id='projects' className='min-h-screen bg-black text-white relative overflow-hidden'>

      {/* Wandering stars background */}
      {/* <div className="absolute inset-0">
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
      </div> */}

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
                        // *** STEP 3: Pass individual props instead of a single 'project' object ***
                        <ProjectCard 
                            key={index} 
                            index={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                            github={project.github}
                            gradient={project.color} // Renaming 'color' to 'gradient' for the new component
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;