import React from 'react';
import insta from '../assets/social/insta.png';
import git from '../assets/social/anyrgb.com.png';
import linkd from '../assets/social/linkd.png';
import whats from '../assets/social/whatapp.png';


function Intro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-yellow-80 to-orange-70 px-4 sm:px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 py-8">
        {/* Left Side - Text */}
        <div className="text-center md:text-left px-4">
          <h2 className="text-xl md:text-3xl text-violet-600 mb-2">— Hello I am</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-1000 mb-4">Aswin Viju</h1>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">Aspiring Full-Stack Developer</h3>
          <p className="text-gray-700 text-lg md:text-2xl">
            I'm passionate about creating digital experiences and continuously improving my skills.
            I'm currently aiming to become a full-stack developer while also growing my design abilities
            to build clean, user-focused products.
          </p>

          <div className="text-center md:text-left mt-5">
            <h3 className='font-bold text-green-500'>CONNECT WITH ME</h3>
          </div>

          {/* Socials */}
          <div className="flex justify-center md: gap-4 py-4 mt-5">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img className="w-10 h-10 md:w-10 md:h-10 hover:scale-110 transition-transform" src={insta} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img className="w-10 h-10 md:w-10 md:h-10 hover:scale-110 transition-transform" src={linkd} alt="LinkedIn" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform" src={git} alt="GitHub" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <img className="w-10 h-10 md:w-10 md:h-10 hover:scale-110 transition-transform" src={whats} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
