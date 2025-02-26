'use client'
import { Rocket, Leaf, Satellite, BrainCircuit, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/hero-section';
import FeatureGrid from '@/components/feature-grid';
import {motion} from "framer-motion"
import {Card} from "@/components/ui/card"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection 
        title="Precision Farming Revolution"
        subtitle="Reducing Chemical Use Through Smart Agriculture"
        background="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
      />

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            What is Precision Farming?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Precision farming is a <strong>modern agricultural practice</strong> that uses <strong>AI, GPS, sensors, and automation</strong> 
            to optimize crop production while reducing environmental impact. It minimizes <strong>fertilizer and pesticide 
            waste, conserves water, and increases crop yields</strong>—leading to a <strong>more sustainable</strong> global food system.
          </p>
        </div>

        {/* Add CTA Button to Direct Users to Key Sections */}
        <div className="text-center">
          <Link href="/technologies">
            <Button size="lg" className="bg-gradient-to-r from-blue-400 to-green-500 text-white hover:bg-gradient-to-l">
              Discover the Technologies
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Explore Our Sections
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {
          [
            {
              title: "Benefits", href: "/benefits", icon: <BrainCircuit className="h-8 w-8 text-green-500" />, color: "green"
            }, 
            {
              title: "Technologies", href: "/technologies", icon: <Satellite className="h-8 w-8 text-blue-500" />, color: "blue"
            },
            {
              title: "Case Studies", href: "/case-studies", icon: <FileText className="h-8 w-8 text-purple-500" />, color: "purple"
            }
          ].map((item) => (
            <Link key={item.title} href={item.href} className="group block p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className={`text-2xl font-bold text-center group-hover:text-${item.color}-500 transition`}>
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Why Precision Farming?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
          <motion.div
                key="50-90% Reduction"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className={`h-full p-8 bg-background/50 backdrop-blur-lg border-transparent hover:border-green-500/30 transition-all group`}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`mb-6 text-green-500 bg-green-500/10 p-4 rounded-2xl`}
                    >
                      <Leaf className="w-12 h-12 text-green-500" />
                    </motion.div>
                    
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors`}>
                      {"50-90% Reduction"}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {"In pesticide and fertilizer use through targeted application"}
                    </p>
                    
                    {/* Hover effect line */}
                    <div className={`w-0 h-1 bg-green-500 mt-6 group-hover:w-20 transition-all duration-300`} />
                  </div>
                </Card>
          </motion.div>
          <motion.div
                key="Satellite Monitoring"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className={`h-full p-8 bg-background/50 backdrop-blur-lg border-transparent hover:border-blue-500/30 transition-all group`}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`mb-6 text-blue-500 bg-blue-500/10 p-4 rounded-2xl`}
                    >
                      <Satellite className="w-12 h-12 text-blue-500" />
                    </motion.div>
                    
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors`}>
                      {"Satellite Monitoring"}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {"Real-time field analysis with GPS & IoT sensors"}
                    </p>
                    
                    {/* Hover effect line */}
                    <div className={`w-0 h-1 bg-blue-500 mt-6 group-hover:w-20 transition-all duration-300`} />
                  </div>
                </Card>
          </motion.div>
          <motion.div
                key="AI Predictions"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className={`h-full p-8 bg-background/50 backdrop-blur-lg border-transparent hover:border-purple-500/30 transition-all group`}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`mb-6 text-green-500 bg-purple-500/10 p-4 rounded-2xl`}
                    >
                      <BrainCircuit className="w-12 h-12 text-purple-500" />
                    </motion.div>
                    
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors`}>
                      {"AI Predictions"}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {"Machine learning modesl predict crop needs"}
                    </p>
                    
                    {/* Hover effect line */}
                    <div className={`w-0 h-1 bg-purple-500 mt-6 group-hover:w-20 transition-all duration-300`} />
                  </div>
                </Card>
          </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/technologies">
              <Button size="lg">
                <Rocket className="mr-2 h-4 w-4" />
                Explore the Future
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
