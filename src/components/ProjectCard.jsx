import React from 'react'

function ProjectCard({ title, image, description, tech, link, github }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-xs text-blue-600 font-semibold mb-3">{tech}</p>
       <div className='flex gap-3 me-2'>
         {link && (
          <a
            
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success  text-sm py-1 hover:bg-dark-600 px-4"
            
          >
            DEMO
          </a>
        )}
             {github && (
            <a 
              
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm py-1 hover:bg-dark-600 px-4 "
            >
              GitHub
            </a>
          )}
       </div>
      </div>
    </div>
  );
}
export default ProjectCard;
