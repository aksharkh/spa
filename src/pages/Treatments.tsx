import React from 'react';
import { motion } from 'framer-motion';

const Treatments: React.FC = () => {
  const menu = [
    { category: 'Massage Therapies', items: [
      { name: 'Aura Signature Massage', time: '90 Min', price: '$180', desc: 'Our bespoke full-body treatment blending Swedish, deep tissue, and hot stone techniques.' },
      { name: 'Deep Tissue Release', time: '60 Min', price: '$130', desc: 'Targeted pressure to relieve chronic muscle tension and promote recovery.' },
      { name: 'Aromatherapy Journey', time: '75 Min', price: '$150', desc: 'Gentle lymphatic drainage using custom-blended essential oils.' }
    ]},
    { category: 'Skin Care', items: [
      { name: 'Radiance Botanical Facial', time: '60 Min', price: '$140', desc: 'A deeply hydrating facial using wild-harvested plant extracts and vitamin C.' },
      { name: 'Age-Defying Lift', time: '90 Min', price: '$195', desc: 'Micro-current technology combined with collagen-boosting peptides.' }
    ]},
    { category: 'Body Rituals', items: [
      { name: 'Himalayan Salt Scrub', time: '45 Min', price: '$90', desc: 'Full body exfoliation leaving skin silky smooth and remineralized.' },
      { name: 'Detoxifying Mud Wrap', time: '60 Min', price: '$120', desc: 'Warm Moor mud cocoon to draw out impurities and soothe joints.' }
    ]}
  ];

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Treatment <span className="italic text-stone-400 font-light">Menu</span></h1>
      </motion.div>

      <div className="space-y-24">
        {menu.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-serif text-stone-800 mb-8 border-b border-stone-200 pb-4">{section.category}</h2>
            <div className="space-y-12">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-500 transition-colors">{item.name}</h3>
                    <div className="flex-grow border-b border-dotted border-stone-300 mx-4"></div>
                    <span className="text-stone-500 font-light">{item.price}</span>
                  </div>
                  <div className="flex justify-between items-start text-sm">
                    <p className="text-stone-400 font-light max-w-xl">{item.desc}</p>
                    <span className="text-stone-400 font-light ml-4">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
