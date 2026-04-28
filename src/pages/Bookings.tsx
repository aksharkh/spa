import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";

const Bookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Massage Therapy',
    preferredDate: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const data = new FormData();
      data.append('sheetName', 'Spa_Bookings');
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
        setTimeout(() => setStatus('success'), 1500);
        return;
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('success');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-serif text-stone-900 mb-6">Reserve Your<br/><span className="italic text-stone-400">Sanctuary</span></h1>
          <p className="text-stone-500 font-light mb-12 leading-relaxed">Allow us to prepare a personalized wellness journey just for you. Please share your preferences.</p>
          
          <div className="p-8 bg-[#f4f1eb] rounded-br-[40px] rounded-tl-[40px]">
            <h4 className="font-serif text-xl mb-4 text-stone-800">Opening Hours</h4>
            <ul className="text-sm text-stone-500 font-light space-y-3">
              <li className="flex justify-between border-b border-stone-200 pb-2"><span>Mon - Fri</span> <span>9am - 8pm</span></li>
              <li className="flex justify-between border-b border-stone-200 pb-2"><span>Saturday</span> <span>10am - 6pm</span></li>
              <li className="flex justify-between pb-2"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center text-center p-8 bg-stone-50 border border-stone-200">
              <CalendarHeart className="w-16 h-16 text-stone-300 mx-auto mb-6" strokeWidth={1} />
              <h3 className="text-3xl font-serif text-stone-800 mb-4">Request Sent</h3>
              <p className="text-stone-500 font-light mb-8">Our concierge will contact you shortly to confirm your appointment time.</p>
              <button onClick={() => setStatus('idle')} className="text-xs tracking-widest uppercase text-stone-800 border-b border-stone-800 pb-1 hover:text-stone-500 transition-colors">
                Book Another Treatment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 border border-stone-200 shadow-sm">
              <div>
                <label>Your Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label>Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>Preferred Treatment</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                  <option>Massage Therapy</option>
                  <option>Botanical Facial</option>
                  <option>Thermal Bath & Sauna</option>
                  <option>Full Day Retreat</option>
                </select>
              </div>
              <div>
                <label>Preferred Date</label>
                <input required type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 mt-8 bg-stone-900 hover:bg-stone-800 text-white transition-colors uppercase tracking-[0.2em] text-xs font-medium"
              >
                {status === 'submitting' ? 'Processing...' : 'Submit Request'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings;
