import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('aswin');

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['aswin', 'about', 'projects', 'skills', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contacts' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Name */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <button 
              onClick={() => handleNavClick('aswin')} 
              className="text-xl font-bold cursor-pointer group flex items-center gap-2"
            >
              <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-400 transition-all duration-300">
                ASWIN
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400">
                VIJU
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion>
            ))}
            
            {/* CTA Button */}
            <motion
              onClick={() => handleNavClick('contacts')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-500 text-white text-sm font-semibold rounded-full cursor-pointer hover:shadow-lg hover:shadow-yellow
              -500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/98 backdrop-blur-xl border-t border-gray-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <motion
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 text-white border border-yellow-500/30'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-400"
                        initial={{ scale: 0 }}yellow
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      />
                    )}
                  </div>
                </motion>
              ))}
              
              {/* Mobile CTA */}
              <motion
                onClick={() => handleNavClick('contacts')}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-500 text-white text-center font-semibold rounded-lg cursor-pointer hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navItems.length * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;