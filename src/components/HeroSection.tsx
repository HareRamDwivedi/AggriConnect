import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Bot } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Smart Farming with <span className="text-green-600">AI-Powered</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get personalized fertilizer recommendations, shop quality agricultural products, and access AI-powered
              farming assistance - all in one platform designed for Indian farmers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/fertilizer-recommendation" className="flex items-center">
                  Get AI Recommendations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">Shop Products</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/indian-farmer-smartphone.png"
              alt="Smart farming with technology"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-semibold">AI Assistant</p>
                  <p className="text-sm text-gray-600">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
