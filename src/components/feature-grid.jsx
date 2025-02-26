// components/feature-grid.jsx
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function FeatureGrid({ features }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.2 }}
        >
          <Card className={`h-full p-8 bg-background/50 backdrop-blur-lg border-transparent hover:border-${feature.color}-500/30 transition-all group`}>
            <div className="flex flex-col items-center text-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`mb-6 text-${feature.color}-500 bg-${feature.color}-500/10 p-4 rounded-2xl`}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className={`text-2xl font-bold mb-4 group-hover:text-${feature.color}-500 transition-colors`}>
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className={`w-0 h-1 bg-${feature.color}-500 mt-6 group-hover:w-20 transition-all duration-300`} />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
