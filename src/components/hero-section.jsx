import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Satellite } from 'lucide-react';
import { redirect } from 'next/navigation';

export default function HeroSection({ title, subtitle, background }) {
  return (
    <div className={`relative ${background} h-screen flex items-center`}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-green-400/30 via-blue-500/30 to-purple-600/30" />
      </motion.div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Floating Icon Animation */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-8"
          >
            <Satellite className="w-24 h-24 text-white drop-shadow-lg" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            {title}
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Button Group */}
          <motion.div className="flex justify-center gap-6">
            {/* Primary Action */}
            <Button 
              size="xl" 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 text-lg rounded-lg shadow-lg transition"
              onClick={() => redirect('/benefits')}
            >
              <Rocket className="mr-2 h-6 w-6" />
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 100],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
