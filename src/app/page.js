'use client'
import { Rocket, Leaf, Satellite, BrainCircuit, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/hero-section';
import FeatureGrid from '@/components/feature-grid';
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
          
          <FeatureGrid features={[{
            icon: <Leaf className="w-12 h-12 text-green-500" />,
            title: "50-90% Reduction",
            description: "In pesticide and fertilizer use through targeted application",
            color: "green"
          }, {
            icon: <Satellite className="w-12 h-12 text-blue-500" />,
            title: "Satellite Monitoring",
            description: "Real-time field analysis with GPS & IoT sensors",
            color: "blue"
          }, {
            icon: <BrainCircuit className="w-12 h-12 text-purple-500" />,
            title: "AI Predictions",
            description: "Machine learning models predict crop needs",
            color: "purple"
          }]} />

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
