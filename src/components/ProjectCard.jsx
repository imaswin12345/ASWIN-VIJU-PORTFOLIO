import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

function ProjectCard({ title, image, description, tech, link, github, index = 0, gradient = "from-yellow-500 to-pink-500" }) {
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

  return (
    <motion.div 
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-500 backdrop-blur-sm">
        

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
        
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
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
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>

          {/* Project Number Badge */}
          {index !== undefined && (
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center z-10">
              <span className="text-white font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-6 relative">
          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
          
          {/* Title */}
          <motion.h3 
            className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mb-5">
            <span className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              Tech Stack
            </span>
            <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
              {tech}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mb-5"></div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${gradient} rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Live <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            )}
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/50 font-semibold text-sm transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" /> Code
              </motion.a>
            )}
          </div>
        </div>

        {/* Bottom corner accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${gradient} opacity-5 rounded-tl-full`}></div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;