import React from 'react';
import insta from '../assets/social/insta.png';
import git from '../assets/social/git.png';
import linkd from '../assets/social/linkd.png';
import whats from '../assets/social/whatapp.png';


function Intro() {
  return (
<>    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-yellow-50 to-orange-70 px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl text-blue-600 mb-2">— Hello I am</h2>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Aswin Viju</h1>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Aspiring Full-Stack Developer</h3>
          <p className="text-gray-700 text-3xl">
            I’m passionate about creating digital experiences and continuously improving my skills. 
            I’m currently aiming to become a full-stack developer while also growing my design abilities 
            to build clean, user-focused products.
          </p>

          <div className="text-center md:text-left">
            <h3 className='mt-5'>CONNECT WITH ME</h3>
          </div>

          {/* Socials */}
          <div style={{marginLeft:"450px"}} className="py-4 space-x-5 flex items-center mt-5 align-items-center gap-4">
            <a  href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img style={{width:'30px,',height:'auto'}} src={insta} alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            {/* Add other social icons here */}

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img style={{width:'40px,',height:'auto'}} src={linkd} alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img style={{width:'40px,',height:'auto'}} src={git} alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img style={{width:'40px,',height:'auto'}} src={whats} alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-purple-100 via-yellow-50 to-white rounded-b-3xl">
  {/* Intro content */}
</div>

</>

    
    
  );
}

export default Intro;
