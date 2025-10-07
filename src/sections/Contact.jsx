import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aswinviju900@gmail.com",
      link: "mailto:aswinviju900@gmail.com",
      color: "from-yellow-500 to-yellow-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6282830562 ",
      link: "tel:+91 6282830562",
      color: "from-yellow-500 to-yellow-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kochi, Kerala, India",
      link: "#",
      color: "from-yellow-500 to-yellow-500"
    }
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/", color: "hover:text-yellow-400" },
    { icon: Linkedin, url: "https://www.linkedin.com/", color: "hover:text-yellow-400" },
    { icon: Instagram, url: "https://www.instagram.com/", color: "hover:text-yellow-400" },
    { icon: MessageSquare, url: "https://wa.me/", color: "hover:text-yellow-400" }
  ];

  return (
    <div id='contacts' className='min-h-screen bg-black text-white relative overflow-hidden'>
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
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className='container mx-auto px-6 py-24 md:py-32 max-w-7xl relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-gray-600 text-sm tracking-widest uppercase">— Get in touch</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400">CONNECT</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-yellow-500 to-transparent mx-auto"
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
            05
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about web development!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{info.title}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-gray-500 text-sm mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Let's work together"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="button"
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Aswin Viju. Built with <span className="text-yellow-400">React</span> & <span className="text-yellow-400">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;