import { motion } from 'motion/react';
import img1 from '../assets/images/gallery_hardscape_1782551115363.jpg';
import img2 from '../assets/images/gallery_garden_1782551136659.jpg';
import img3 from '../assets/images/gallery_water_feature_1782551150868.jpg';

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display font-medium text-4xl md:text-6xl text-primary tracking-tight mb-6">
              Before & After Transformations
            </h2>
            <p className="text-lg text-secondary">
              See how we’ve elevated properties across the Houston area with premium materials and expert craftsmanship. Use the slider in our full gallery to see the remarkable differences.
            </p>
          </div>
          <button className="bg-primary hover:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-medium transition-colors whitespace-nowrap hidden md:block">
            View Full Gallery
          </button>
        </div>

        <div className="grid md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 rounded-3xl overflow-hidden relative group h-[400px] md:h-full"
          >
            <img src={img1} alt="Luxury hardscape patio at sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white font-medium text-xl">Outdoor Living & Fire Pit</span>
            </div>
          </motion.div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6 h-[600px] md:h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl overflow-hidden relative group"
            >
              <img src={img2} alt="Manicured garden with colorful flowers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">Custom Plantings</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden relative group"
            >
              <img src={img3} alt="Modern water feature in backyard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">Modern Water Features</span>
              </div>
            </motion.div>
          </div>
        </div>

        <button className="bg-primary hover:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-medium transition-colors w-full mt-8 md:hidden">
          View Full Gallery
        </button>
      </div>
    </section>
  );
}
