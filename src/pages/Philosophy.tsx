import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
          className="aspect-[3/4] bg-stone-200"
        >
          <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" alt="Spa stones" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6 block">Our Philosophy</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
            Healing Through <span className="italic font-light text-stone-500">Nature.</span>
          </h1>
          <div className="space-y-6 text-stone-500 font-light leading-relaxed">
            <p>
              At Aura, we believe that true wellness comes from aligning oneself with the natural rhythms of the earth. We don't just treat the body; we provide a sanctuary for the mind and spirit.
            </p>
            <p>
              Every product we use is ethically sourced, organic, and cruelty-free. Our therapists are trained in ancient healing modalities combined with modern anatomical understanding.
            </p>
            <p>
              When you step through our doors, you are invited to leave the noise of the world behind and return to your center.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
