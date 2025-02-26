import { CheckCircle, XCircle, Globe, Leaf, CloudRainWind, TreeDeciduous } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function BenefitsPage() {
  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 p-2">
          Pros & Cons of Precision Farming
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Benefits Card */}
          <Card className="p-8 border border-green-500/30 bg-green-50/50 dark:bg-green-900/10 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold">Benefits</h2>
            </div>
            <ul className="space-y-4 text-lg">
              <li>✅ <strong>30-50% increase in crop yields</strong></li>
              <li>✅ <strong>90% reduction in chemical runoff</strong> into soil and water</li>
              <li>✅ <strong>Real-time disease detection</strong> prevents crop loss</li>
              <li>✅ <strong>Automated resource management</strong> saves time & labor</li>
            </ul>
          </Card>

          {/* Challenges Card */}
          <Card className="p-8 border border-red-500/30 bg-red-50/50 dark:bg-red-900/10 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold">Challenges</h2>
            </div>
            <ul className="space-y-4 text-lg">
              <li>❌ <strong>High initial investment costs</strong> for sensors, AI & GPS</li>
              <li>❌ <strong>Requires technical knowledge & training</strong> for farmers</li>
              <li>❌ <strong>Data privacy risks</strong> with cloud-based farm management</li>
              <li>❌ <strong>Infrastructure dependence</strong> (needs reliable internet & power)</li>
            </ul>
          </Card>
        </div>

        {/* Expanded SDG Section */}
        <div className="mt-16 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
            How Precision Farming Supports Global Sustainability
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
            Precision farming is a key innovation for global sustainability, directly supporting four United Nations Sustainable Development Goals.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* SDG 2 - Zero Hunger */}
            <Card className="p-6 bg-green-50 dark:bg-green-900/10 border border-green-500/30 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6 text-green-500" />
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">SDG 2: Zero Hunger</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                By increasing <strong>crop yields while using fewer resources</strong>, precision farming helps address food insecurity and ensures <strong>sustainable food production</strong>.
              </p>
            </Card>

            {/* SDG 6 - Clean Water */}
            <Card className="p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-500/30 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">SDG 6: Clean Water</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Reduces <strong>water waste & pollution</strong> by <strong>optimizing irrigation</strong> and preventing <strong>chemical runoff into water sources</strong>.
              </p>
            </Card>

            {/* SDG 13 - Climate Action */}
            <Card className="p-6 bg-gray-100 dark:bg-gray-900 border border-gray-500/30 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <CloudRainWind className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">SDG 13: Climate Action</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Precision farming <strong>reduces greenhouse gas emissions</strong> by minimizing overuse of <strong>nitrogen-based fertilizers</strong> and promoting <strong>carbon-efficient practices</strong>.
              </p>
            </Card>

            {/* SDG 15 - Biodiversity Protection */}
            <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-500/30 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <TreeDeciduous className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">SDG 15: Life on Land</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                By reducing <strong>pesticide and fertilizer overuse</strong>, precision farming helps <strong>preserve soil health, protect pollinators, and maintain biodiversity</strong>.
              </p>
            </Card>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-16 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Final Verdict</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Precision farming <strong>optimizes agriculture</strong> for the future, <strong>reducing waste and improving efficiency</strong>. However, barriers like <strong>costs, infrastructure, and access to technology</strong> must be addressed to ensure <strong>global adoption</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
