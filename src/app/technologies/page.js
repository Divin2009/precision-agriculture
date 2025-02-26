'use client'
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Satellite, Droplets, Cpu, Network, Wind, CloudLightning, Thermometer } from 'lucide-react';

const techItems = [
  {
    title: "Satellite Imaging",
    icon: <Satellite className="w-12 h-12 text-blue-500 transition group-hover:text-blue-600" />,
    description: "High-resolution crop monitoring via remote sensing.",
    environmentalImpact: "Reduces water usage by enabling precise irrigation decisions.",
    color: "blue"
  },
  {
    title: "Smart Irrigation",
    icon: <Droplets className="w-12 h-12 text-green-500 transition group-hover:text-green-600" />,
    description: "AI-powered water management for optimal irrigation.",
    environmentalImpact: "Minimizes water waste by adjusting irrigation based on real-time data.",
    color: "green"
  },
  {
    title: "AI Crop Analysis",
    icon: <Cpu className="w-12 h-12 text-purple-500 transition group-hover:text-purple-600" />,
    description: "Machine learning predicts crop health & nutrient needs.",
    environmentalImpact: "Reduces pesticide use by accurately predicting crop health.",
    color: "purple"
  },
  {
    title: "IoT Sensor Networks",
    icon: <Network className="w-12 h-12 text-orange-500 transition group-hover:text-orange-600" />,
    description: "Real-time data collection on soil, moisture, & weather.",
    environmentalImpact: "Optimizes fertilizer usage to reduce soil degradation.",
    color: "orange"
  },
  {
    title: "Wind Turbine Integration",
    icon: <Wind className="w-12 h-12 text-yellow-500 transition group-hover:text-yellow-600" />,
    description: "Sustainable energy solutions for farm automation.",
    environmentalImpact: "Provides clean energy, reducing carbon footprint on farms.",
    color: "yellow"
  },
  {
    title: "Cloud-Based Forecasting",
    icon: <CloudLightning className="w-12 h-12 text-teal-500 transition group-hover:text-teal-600" />,
    description: "Weather prediction models for disaster prevention.",
    environmentalImpact: "Helps farms prepare for extreme weather, reducing crop losses.",
    color: "teal"
  },
  {
    title: "Precision Temperature Control",
    icon: <Thermometer className="w-12 h-12 text-red-500 transition group-hover:text-red-600" />,
    description: "Smart climate control for greenhouses & open fields.",
    environmentalImpact: "Minimizes energy consumption in temperature regulation.",
    color: "red"
  },
];

export default function TechnologiesPage() {
  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 p-2">
          Core Technologies
        </h1>

        {/* Add Introduction to Precision Farming */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Precision farming utilizes advanced technologies to optimize agricultural practices. These technologies help farmers manage resources efficiently, improve crop yields, and reduce environmental impact. By leveraging data, automation, and IoT, precision farming is revolutionizing modern agriculture.
          </p>
        </div>

        {/* Mention Precision Farming as Intensive & Agricultural Model */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Precision farming is an example of <strong>intensive farming</strong> and falls under <strong>commercial farming</strong> and <strong>high-tech agriculture</strong>. It requires a high level of technology and resources to maximize yield and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((tech, index) => (
            <motion.div 
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Card className="p-8 hover:shadow-2xl transition-all group w-full max-w-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors group-hover:text-${tech.color}-600`}>
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">{tech.environmentalImpact}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Von Thunen Model Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Von Thunen Model & Economic Limitations
          </h2>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The Von Thunen model explains the spatial organization of agricultural activities around a central market. It helps us understand the economic costs of food production and how location factors such as transportation costs, land quality, and proximity to the market influence crop selection. However, real-world factors, such as processing facilities and distribution systems, challenge the model's practical application.
            </p>
          </div>

          {/* Flexbox Layout for Von Thunen Model Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex-1 py-8">
              <img 
                src="https://thegreenhorns.wordpress.com/wp-content/uploads/2014/08/berglee-fig04_008.jpg" 
                alt="Von Thunen Model Diagram"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Limitations of the Von Thunen Model
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                The Von Thunen model assumes an isolated market with uniform land quality, but in the real world, factors such as the location of food-processing facilities, economies of scale, and distribution networks come into play. These elements can affect food-production practices and profitability, and are essential for understanding the economic reality of modern farming.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Precision farming technologies, like GPS-guided machinery and real-time weather data, can help address some of these limitations by improving efficiency and reducing transportation costs. However, they still cannot overcome challenges like market proximity or infrastructure limitations, which are central to the economic landscape of farming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
