import React from 'react'
import aswin from '../assets/aswin.jpg'
import html from '../assets/techStacks/html.png'
import js from '../assets/techStacks/javascrip.png'
import css from '../assets/techStacks/css.png'
import bst from '../assets/techStacks/bootsrap.png'
import react from '../assets/techStacks/react.png'
import Tailwind from '../assets/techStacks/tailwind.png'
import redux from '../assets/techStacks/redux.png'



function About() {
  return (
    <div id='about'>
      <section className='py-8 md:py-16 text-dark bg-light bg-gradient-to-br from-green-300 via-yellow-50'>
        <div className='container mx-auto px-4 md:px-9'>
          <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
            {/* left side of the about */}
            <div className='md:w-1/2'>
              <h2 className='text-2xl md:text-3xl font-bold text-violet-700 mb-6 md:mb-10'>ABOUT ME</h2>
              <p className='text-gray-900 text-lg md:text-xl'>
                Hi i am - <span className='font-semibold'>Aswin</span> — a passionate front-end developer based in Kochi, India. I love building clean, responsive user interfaces using React, Tailwind, and modern web technologies. I'm currently focused on full-stack development and crafting real-world portfolio projects.
              </p>
              <p className='mt-4 text-gray-700 text-lg md:text-xl'>
                When I'm not coding, you'll find me exploring new tech trends, improving my skills, or playing around with design ideas. Let's build something amazing!
              </p>
              
              <div className='mt-6'>
                <h1 className='text-xl md:text-2xl text-yellow-500'>
                  Tech Stack <span className='font-semibold text-green-500'>Front-End</span>
                </h1>
                <div className='flex flex-wrap gap-3 items-center mt-3'>
                  <img className='w-8 md:w-10 h-auto' src={html} alt="HTML" />
                  <img className='w-6 md:w-8 h-auto' src={css} alt="CSS" />
                  <img className='w-7 md:w-9 h-auto' src={js} alt="JavaScript" />
                  <img className='w-8 md:w-10 h-auto' src={react} alt="React" />
                  <img className='w-8 md:w-10 h-auto' src={Tailwind} alt="Tailwind" />
                  <img className='w-10 md:w-12 h-auto' src={redux} alt="Redux" />
                  <img className='w-10 md:w-12 h-auto' src={bst} alt="Bootstrap" />
                </div>
              </div>
            </div>

            {/* Right side of the about -my image */}
            <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
              <img
                src={aswin}
                alt="Aswin"
                className='rounded-lg shadow-md object-cover w-64 md:w-[300px] bg-dark hover:scale-105 transition-transform'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About