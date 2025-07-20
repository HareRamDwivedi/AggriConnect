import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Camera, ShoppingCart, TrendingUp, Smartphone, Globe } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Soil Analysis",
    description: "Upload soil images and reports for AI-powered analysis and recommendations",
    color: "text-blue-600",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "24/7 intelligent assistant for farming queries, pest control, and crop guidance",
    color: "text-green-600",
  },
  {
    icon: ShoppingCart,
    title: "Quality Products",
    description: "Premium seeds, fertilizers, and farming tools from trusted suppliers",
    color: "text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description: "Track your farming progress and get insights to improve yield",
    color: "text-orange-600",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed for smartphones with simple, intuitive interface",
    color: "text-pink-600",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Available in Hindi and English for better accessibility",
    color: "text-indigo-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Everything You Need for Smart Farming</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with practical farming solutions to help you make better
            decisions and increase your crop yield.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
