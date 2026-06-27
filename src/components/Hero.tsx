import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '../assets/images/hero_landscape_1782551092706.jpg';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-primary">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroImage} 
          alt="Luxury landscape design" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <div className="flex">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
          </div>
          <span className="text-white text-sm font-medium">5.0 Google Rating</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(20px)', y: 40 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-5xl md:text-7xl lg:text-[100px] text-white leading-[1.05] tracking-tight max-w-5xl"
        >
          Premier Landscape Design in Houston, TX
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-2xl text-white/80 max-w-2xl font-light"
        >
          We transform ordinary yards into extraordinary outdoor living spaces. Licensed, insured, and deeply committed to craft.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <button className="bg-accent hover:bg-accent-hover text-white px-8 py-5 rounded-full text-lg font-medium transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="text-white/60 text-sm flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Licensed & Insured
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[bounce_2s_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
