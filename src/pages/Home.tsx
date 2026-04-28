import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden mt-[-96px] pt-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f4f1eb] -z-10 rounded-bl-[100px]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[1.1] mb-8">
              Breathe.<br/>
              <span className="text-stone-400 italic font-light">Restore.</span>
            </h1>
            <p className="text-lg text-stone-500 mb-12 max-w-md font-light leading-relaxed">
              Experience profound tranquility. Our holistic treatments are designed to harmonize your body, mind, and spirit in an environment of absolute peace.
            </p>
            <Link to="/treatments" className="inline-flex items-center gap-4 text-stone-800 hover:text-stone-500 transition-colors uppercase tracking-[0.2em] text-sm group">
              <span className="w-12 h-[1px] bg-stone-800 group-hover:w-16 transition-all duration-500"></span>
              Discover Treatments
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.2 }}
            className="relative h-[70vh]"
          >
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" alt="Spa Treatment" className="w-full h-full object-cover rounded-t-full rounded-br-full shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#f4f1eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl font-serif text-stone-900 mb-8"
            >
              Signature Experiences
            </motion.h2>
            <div className="w-px h-24 bg-stone-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: Droplets, title: 'Thermal Therapies', desc: 'Hydrotherapy and essential oil treatments to melt away stress and purify the skin.' },
              { icon: Flower2, title: 'Botanical Facials', desc: 'Organic plant-based skin rejuvenation for a natural, luminous glow.' },
              { icon: Sparkles, title: 'Holistic Massage', desc: 'Deep tissue and Swedish techniques customized perfectly for your body.' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.3 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-24 h-24 mx-auto border border-stone-300 rounded-full flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-700">
                  <feature.icon className="w-8 h-8 text-stone-400 group-hover:text-stone-800 transition-colors duration-700" strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-stone-800">{feature.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
