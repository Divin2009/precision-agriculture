'use client'
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const caseStudies = [
  {
    title: "SmartAgro Solutions in Bangladesh",
    description: "SmartAgro Solutions, an agricultural technology startup in rural Bangladesh, uses drones with multispectral cameras to assess crop health, detect infestations, and optimize irrigation. They also provide farmers with a mobile app integrating weather forecasts and agronomic recommendations for real-time decision support, enhancing productivity and promoting sustainable development.",
    link: "https://www.linkedin.com/pulse/case-study-8-precision-agriculture-data-analytics-raisul-alam--bkl2c#:~:text=Overview%3A%20SmartAgro%20Solutions%20is,crop%20yields.&text=Bangladesh%2C%20specializing%20in%20precision,crop%20yields.&text=farmers.%20Leveraging%20modern%20technologies,crop%20yields.&text=analytics%20platforms%2C%20SmartAgro%20Solutions,crop%20yields.",
  },
  {
    title: "Variable Rate Irrigation at Clovelly Dairy",
    description: "Clovelly Dairy, with 1,133 hectares of pasture irrigated by 14 central pivots, installed VRI (Variable Rate Irrigation) software on four of these pivots. This technology allows for the application of different amounts of water to different areas, optimizing water consumption without negatively impacting crop performance.",
    link: "https://precisionag.earth/case_study/variable-rate-irrigation-clovelly-dairy/",
  },
  {
    title: "Red Tecnoparque Colombia with Libelium Technology",
    description: "In Colombia, Red Tecnoparque Colombia deployed a wireless sensor network using Libelium technology to monitor plantain crops in the Lembo area. The sensors monitor key parameters such as humidity, temperature, soil moisture, and solar radiation, allowing for remote supervision of agronomic variations, optimization of water usage, prevention of plagues and diseases, reduction of fertilizer consumption, and soil classification.",
    link: "https://www.rcrwireless.com/20170516/fundamentals/20170516smart-farmthree-precision-agriculture-iot-case-studies-tag23-tag99#:~:text=Precision%20agriculture%20uses%20the,IoT%20to&text=IoT%20to%20enable%20more,IoT%20to&text=farming%3B%20learn%20how%20Libelium%2C,IoT%20to&text=Telenor%20and%20Vodafone%20are,IoT%20to",
  },
];

const debates = [
  {
    title: "Arguments For Precision Farming",
    description: "Precision farming is lauded for its ability to increase efficiency, improve sustainability, and feed a growing global population. With real-time data, precision farming minimizes resource usage and reduces environmental impacts.",
    details: [
      "Efficiency and sustainability: It reduces water and fertilizer usage by optimizing crop management with data-driven decisions.",
      "Feeding a growing population: Precision farming can improve yields, ensuring enough food for the growing world population.",
      "Reduced environmental impact: Minimizes pesticide and fertilizer usage, lowering pollution and improving soil health."
    ]
  },
  {
    title: "Arguments Against Precision Farming",
    description: "Critics argue that precision farming has high costs, technological dependence, and concerns over data privacy. Many believe that the cost of implementation may not be feasible for small farmers, and that the reliance on tech could introduce vulnerabilities.",
    details: [
      "High initial costs: The technology needed for precision farming is expensive, making it hard for small farmers to afford.",
      "Technological dependence: Farmers become highly dependent on technology, leaving them vulnerable if systems fail or malfunction.",
      "Data privacy: The large-scale data collection and sharing might lead to privacy concerns, especially when used by large corporations."
    ]
  },
  {
    title: "Debates Over Agricultural Innovations",
    description: "Technologies like GMOs, biotechnology, and automation have their own set of debates. While they can increase productivity and reduce labor, they raise ethical questions and concerns over environmental impacts.",
    details: [
      "GMOs and biotechnology: These innovations promise higher yields and disease resistance, but critics raise concerns about biodiversity and health risks.",
      "Automation in agriculture: Automated systems reduce the need for manual labor, but may lead to job loss and ethical dilemmas regarding worker displacement."
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500"
        >
          Case Studies
        </motion.h1>
        
        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {caseStudy.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {caseStudy.description}
                </p>
                <a 
                  href={caseStudy.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More &rarr;
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add the Debate Section Below */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mt-16 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-500 text-black p-4"
        >
          The Debate on Precision Farming
        </motion.h2>

        <div className="space-y-8">
          {debates.map((debate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {debate.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {debate.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {debate.details.map((point, idx) => (
                    <li key={idx}><strong>{point.split(".")[0].split(":")[0]}</strong>: {point.split(".")[0].split(":")[1]}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
