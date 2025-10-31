import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

function ProjectCard({ title, subtitle, image, description, tech, link, github, index = 0, gradient = "from-emerald-400 via-teal-500 to-cyan-500" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTech, setActiveTech] = useState(null);

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.6,
        delay: index * 0.05
      }
    }
  };

  const techArray = Array.isArray(tech) ? tech : tech.split(',').map(t => t.trim());

  return (
    <motion.section 
      role="article"
      aria-labelledby={`project-title-${index}`}
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative h-[34rem] md:h-[30rem] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-700 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveTech(null);
      }}
    >
      {/* Outer glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className={`absolute inset-[-3px] bg-gradient-to-r ${gradient} rounded-3xl opacity-60 blur-xl`}></div>
      </motion.div>

      {/* Main content */}
      <div className="relative h-full flex flex-col">
        
        {/* Hero Image */}
        <div className="relative h-56 md:h-60 flex-shrink-0 overflow-hidden">
          <motion.img
            src={image}
            alt={`${title} project showcase`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Dynamic overlay */}
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-600`}></div>
          
          {/* Index badge with sparkle */}
          <motion.div 
            className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md z-10"
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 350 }}
          >
            <span className="text-white font-bold text-lg">{index + 1}</span>
            <Sparkles className="absolute w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Interactive hover panel */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex items-center justify-center gap-8 bg-black/50 backdrop-blur-md"
              >
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Launch ${title}`}
                  className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/90 text-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repo for ${title}`}
                  className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/90 text-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-7 flex-1 flex flex-col">
          
          {/* Title & Subtitle */}
          <div className="mb-4 space-y-1">
            {subtitle && (
              <motion.span 
                className="inline-block px-2 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
              >
                {subtitle}
              </motion.span>
            )}
            <motion.h3 
              id={`project-title-${index}`}
              className="text-2xl md:text-3xl font-bold text-white leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${gradient} transition-all duration-700"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -2 }}
            >
              {title}
            </motion.h3>
          </div>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-base font-s leading-relaxed mb-6 line-clamp-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Interactive Tech Chips */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide block mb-3">Built with</span> */}
            {/* <div className="flex flex-wrap gap-2">
              {techArray.map((techItem, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onMouseEnter={() => setActiveTech(i)}
                  className={`px-3 py-2 text-sm font-medium rounded-full border-2 transition-all duration-300 ${
                    activeTech === i 
                      ? `border-${gradient.split('from-')[1]?.split('-')[0] || 'emerald'}-400 bg-${gradient.split('from-')[1]?.split('-')[0] || 'emerald'}-500/10 text-${gradient.split('from-')[1]?.split('-')[0] || 'emerald'}-400` 
                      : 'border-gray-600 text-gray-400 hover:border-gray-500'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  role="button"
                  aria-label={`Technology: ${techItem}`}
                >
                  {techItem}
                </motion.button>
              ))}
            </div> */}
          </motion.div>

          {/* CTA Bar */}
          <motion.div 
            className="flex items-center justify-between pt-4 border-t border-gray-800/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* <span className="text-xs text-gray-500">Live & Open Source</span> */}
            {/* <div className="flex gap-3">
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r ${gradient} text-white hover:shadow-2xl hover:shadow-${gradient.split('from-')[1]?.split('-')[0] || 'emerald'}-500/30 transition-all duration-400`}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore <ArrowUpRight className="w-4 h-4 inline ml-1" />
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div> */}
          </motion.div>
        </div>

        {/* Subtle floating elements */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[0, 1, 2].map((pos) => (
                <motion.div
                  key={pos}
                  className={`absolute w-2 h-2 rounded-full ${gradient} blur-sm opacity-70`}
                  style={{
                    top: `${20 + pos * 20}%`,
                    right: `${10 + pos * 15}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1], 
                    opacity: [0, 0.7, 0.7],
                    x: [0, -5, 0],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: pos * 0.2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default ProjectCard;