import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    text: "The team at Verdant completely transformed our backyard. They were professional, communicative, and the final result exceeded our expectations. The new patio and fire pit are gorgeous.",
    role: "Homeowner, River Oaks"
  },
  {
    name: "Michael Chen",
    text: "I was blown away by their attention to detail. From the initial 3D design to the final planting, everything was executed flawlessly. Highly recommend them for any serious landscaping project.",
    role: "Homeowner, The Heights"
  },
  {
    name: "Elena Rodriguez",
    text: "Truly a premium service. They handled our pool integration and surrounding hardscape with incredible skill. It feels like we have a luxury resort in our own backyard now.",
    role: "Homeowner, Memorial"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-emerald-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[60%] h-[60%] bg-emerald-800 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-[20%] -mb-[10%] w-[60%] h-[60%] bg-emerald-800 rounded-full blur-[120px] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-4">
            Loved by Houston homeowners
          </h2>
          <p className="text-emerald-100 text-lg">
            Don't just take our word for it. Read what our clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-emerald-950/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-800/50"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-emerald-50 leading-relaxed mb-8 text-lg font-light">
                "{review.text}"
              </p>
              <div>
                <p className="font-medium text-white">{review.name}</p>
                <p className="text-emerald-300 text-sm mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
