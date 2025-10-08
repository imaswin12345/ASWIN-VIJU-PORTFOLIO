import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

function ProjectCard({ title, image, description, tech, link, github, index = 0, gradient = "from-yellow-500 to-pink-500" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
        delay: index * 0.1
      }
    }
  };

  // Truncate description to 3 lines if not expanded
  const truncatedDescription = description.length > 150 ? description.substring(0, 150) + '...' : description;

  // Assume tech is an array of strings; if string, split by comma
  const techArray = Array.isArray(tech) ? tech : tech.split(',').map(t => t.trim());
  const visibleTech = showAllTech ? techArray : techArray.slice(0, 3);

  return (
    <motion.div 
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Card Container - Fixed height for uniformity */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-500 backdrop-blur-sm flex flex-col h-[28rem]">
        

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
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>
        
        {/* Image Container - Fixed height */}
        <div className="relative h-48 flex-shrink-0 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          
          {/* Gradient Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
          
          {/* Hover Actions Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>

          {/* Project Number Badge */}
          {index !== undefined && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center z-10">
              <span className="text-white font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
            </div>
          )}
        </div>

        {/* Content Area - Takes remaining height */}
        <div className="p-4 relative flex-1 flex flex-col overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
          
          {/* Title */}
          <motion.h3 
            className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300 flex-shrink-0"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>

          {/* Description - Trimmed with see more */}
          <div className="flex-1 mb-3">
            <p className={`text-gray-400 text-xs leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
              {isExpanded ? description : truncatedDescription}
            </p>
            {description.length > 150 && !isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-xs text-blue-400 hover:text-blue-300 mt-1 flex items-center gap-1"
              >
                See more <ChevronDown className="w-3 h-3" />
              </button>
            )}
            {isExpanded && (
              <button
                onClick={() => setIsExpanded(false)}
                className="text-xs text-blue-400 hover:text-blue-300 mt-1 flex items-center gap-1"
              >
                See less <ChevronUp className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Tech Stack - With see more if multiple */}
          <div className="mb-4 flex-0 flex-shrink-0">
            <span className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${gradient} bg-clip-text text-transparent block mb-1`}>
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1">
              {visibleTech.map((t, i) => (
                <span key={i} className="px-2 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 rounded-full border border-gray-700">
                  {t}
                </span>
              ))}
            </div>
            {techArray.length > 3 && !showAllTech && (
              <button
                onClick={() => setShowAllTech(true)}
                className="text-xs text-blue-400 hover:text-blue-300 mt-1 flex items-center gap-1"
              >
                See all <ChevronDown className="w-3 h-3" />
              </button>
            )}
            {showAllTech && (
              <button
                onClick={() => setShowAllTech(false)}
                className="text-xs text-blue-400 hover:text-blue-300 mt-1 flex items-center gap-1"
              >
                See less <ChevronUp className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mb-4 flex-shrink-0"></div>

          {/* Action Buttons - Fixed space */}
          <div className="flex gap-2 flex-shrink-0">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r ${gradient} rounded-lg text-white font-semibold text-xs hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Live <ArrowUpRight className="w-3 h-3" />
              </motion.a>
            )}
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/50 font-semibold text-xs transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-3 h-3" /> Code
              </motion.a>
            )}
          </div>
        </div>

        {/* Bottom corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${gradient} opacity-5 rounded-tl-full`}></div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;