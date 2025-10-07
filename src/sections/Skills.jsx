import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-yellow-500 to-yellow-500",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 92 },
      { name: "Redux", level: 80 },
    ]
  },
  {
    title: "Styling",
    icon: Palette,
    color: "from-yellow-500 to-yellow-500",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Material-UI", level: 82 },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-yellow-500 to-yellow-500",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Axios", level: 88 },
    ]
  },
  {
    title: "Libraries",
    icon: Layers,
    color: "from-yellow-500 to-yellow-500",
    skills: [
      { name: "React Konva", level: 78 },
      { name: "Framer Motion", level: 85 },
    ]
  }
];

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: index * 0.1
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-500 backdrop-blur-sm p-6">
       
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
       
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 flex items-center justify-center`}>
            <category.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mt-1`}></div>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                <span className={`text-xs font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + i * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${category.color} opacity-5 rounded-tl-full`}></div>
        </div>
      </div>
    </motion.div>
  );
};

function Skills() {
  return (
    <div id='skills' className='min-h-screen bg-black text-white relative overflow-hidden'>
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
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-40 left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className='container mx-auto px-6 py-24 md:py-32 max-w-7xl relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gray-600 text-sm tracking-widest uppercase">— My expertise</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400">ABILITIES</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-yellow-500 to-transparent"
          ></motion.div>

          {/* Large background number */}
          <motion.div
            className="absolute right-0 top-0 text-[12rem] md:text-[16rem] font-bold text-transparent pointer-events-none"
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.03)'
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            04
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "15+", label: "Technologies" },
            { number: "10+", label: "Projects" },
            { number: "2+", label: "Years Learning" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <motion.h3
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;