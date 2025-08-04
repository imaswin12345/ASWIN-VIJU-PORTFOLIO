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
    <section id='about' className='py-16 text-dark bg-light bg-gradient-to-br from-green-200 via-yellow-50'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row item-center gap-10'>
              {/* left side of the about */}
            <div className='md:w-1/2'>

            <h2 className='text-3xl font-bold text-violet-700  mb-6'>ABOUT ME</h2>
            <p className='max-w-3xl mx-auto  text-gray-900 text-2xl' >
                Hi i am - <span className='font-semibold'>Aswin</span> — a passionate front-end developer based in Kochi, India. I love building clean, responsive user interfaces using React, Tailwind, and modern web technologies. I'm currently focused on full-stack development and crafting real-world portfolio projects.
            </p>
            <p className='mt-4 max-w-3xl mx-auto  text-gray-700 text-2xl'>
                When I’m not coding, you’ll find me exploring new tech trends, improving my skills, or playing around with design ideas. Let’s build something amazing!
            </p>
            
            <div>
                <h1  className='text-2xl text-yellow-500'>
                    Tech Stack <span className='fw-semibold text-green-500'>Front-End</span>
                </h1>
                <div className='flex gap-3 align-items-center'>
                    
                <img 
                     style={{ 
                     width: '40px',  
                     height: 'auto', 
                     marginRight: '5px' }}
                     src={html} 
                     alt="" />

                      <img 
                     style={{ 
                     width: '28px',  
                     height: 'auto', 
                     marginRight: '5px' }}
                     src={css} 
                     alt="" />

                      <img 
                     style={{ 
                     width: '30px',  
                     height: 'auto', 
                     marginRight: '5px' }}
                     src={js} 
                     alt="" />
                


                 

                      <img 
                     style={{ 
                     width: '40px',  
                     height: 'auto', 
                     marginRight: '5px' }}
                     src={react} 
                     alt="" />

                      <img 
                     style={{ 
                     width: '40px',  
                     height: 'auto', 
                     marginRight: '5px' }}
                     src={Tailwind} 
                     alt="" />

                      <img 
                     style={{ 
                     width: '50px',  
                     height: 'auto', 
                     marginRight: '5px' }}
                     src={redux} 
                     alt="" />

                      <img 
                     style={{ 
                     width: '50px',  
                     height: 'auto', 
                     marginRight: '5px' }}
                     src={bst} 
                     alt="" />

                     </div>


            </div>

            </div>

            {/* Right side of the about -my image */}

            <div className='md:w-1/2 flex justify-center'>
                <img
                 src={aswin}
                 alt="Aswin"
                 width="300px"
                 height="100px"
                 className='rounded-lg shadow-md object-cover w-[300px] bg-dark hover:scale-185'

                 />
            </div>

          </div>

        </div>
    </section>
  )
}

export default About