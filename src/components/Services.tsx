import { motion } from 'motion/react';
import { Leaf, Ruler, Droplets } from 'lucide-react';

const services = [
  {
    title: 'Landscape Design',
    description: 'Custom 3D rendering and thoughtful planting plans tailored to Houston’s unique climate and your lifestyle.',
    icon: Leaf,
  },
  {
    title: 'Hardscaping',
    description: 'Elegant stone patios, retaining walls, fire pits, and outdoor kitchens built to last generations.',
    icon: Ruler,
  },
  {
    title: 'Water Features & Pools',
    description: 'Tranquil fountains, koi ponds, and custom pool integrations that turn your yard into a private resort.',
    icon: Droplets,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display font-medium text-4xl md:text-5xl text-primary tracking-tight mb-6">
            Everything you need for a perfect outdoor space
          </h2>
          <p className="text-lg text-secondary">
            From initial concept to final installation, we handle every detail with uncompromising quality and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
