import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(26, 20, 56, 0)', 'rgba(26, 20, 56, 0.8)']
  );

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-purple-950/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg shadow-purple-500/20" />
          <span className="text-white text-xl font-medium">FeedGuard</span>
        </motion.div>
        <div className="flex gap-8">
          {['Security', 'Product', 'Resources', 'Customers'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-900/50 text-white px-6 py-2 rounded-lg text-sm font-medium border border-purple-500/20"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-purple-900 px-6 py-2 rounded-lg text-sm font-medium shadow-lg shadow-purple-500/20"
          >
            Book a demo
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}