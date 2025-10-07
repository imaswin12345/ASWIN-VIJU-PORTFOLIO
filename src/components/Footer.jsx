import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black text-white relative overflow-hidden border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
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

      <div className="container mx-auto px-6 py-12 max-w-7xl relative z-10">
        <div className="flex flex-col items-center">
          {/* Brand Name */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold">
              <span className="text-white">ASWIN</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400">VIJU</span>
            </h3>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm mb-6 text-center max-w-md"
          >
            Aspiring Full-Stack Developer crafting digital experiences with precision and passion.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent max-w-md mb-6"
          ></motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mb-4"
          >
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} Aswin Viju.</span>
              <span className="hidden sm:inline">|</span>
              <span>All rights reserved.</span>
            </p>
          </motion.div>

          {/* Built with */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xs text-gray-600 flex items-center gap-1"
          >
            Built with{' '}
            <Heart className="w-3 h-3 text-yellow-400 fill-purple-400 inline-block animate-pulse" />{' '}
            using{' '}
            <span className="text-yellow-400 font-semibold">React</span>
            {' '}&{' '}
            <span className="text-yellow-400 font-semibold">Framer Motion</span>
          </motion.p>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-purple-500/5 to-transparent rounded-t-full blur-2xl pointer-events-none"></div>
    </motion.footer>
  );
}

export default Footer;