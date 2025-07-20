"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Link } from "react-router-dom"
import { ShoppingCart, Bot, Camera, TrendingUp, Package, MapPin, Phone, Mail } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

const recentOrders = [
  {
    id: "ORD-001",
    product: "Premium Wheat Seeds",
    amount: "₹2,500",
    status: "Delivered",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    product: "Organic NPK Fertilizer",
    amount: "₹1,200",
    status: "In Transit",
    date: "2024-01-18",
  },
]

const recommendations = [
  {
    title: "Soil Analysis Pending",
    description: "Upload your soil report for personalized fertilizer recommendations",
    action: "Upload Now",
    href: "/fertilizer-recommendation",
  },
  {
    title: "Weather Alert",
    description: "Heavy rainfall expected this week. Consider protective measures.",
    action: "View Details",
    href: "/weather",
  },
]

export function FarmerDashboard() {
  const { user } = useAuth()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your farming activities</p>
      </div>

      {/* Profile Card */}
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{user?.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{user?.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{user?.location}</span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access your most used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-20 flex-col">
                <Link to="/fertilizer-recommendation">
                  <Camera className="h-6 w-6 mb-2" />
                  Soil Analysis
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col bg-transparent">
                <Link to="/ai-assistant">
                  <Bot className="h-6 w-6 mb-2" />
                  AI Assistant
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col bg-transparent">
                <Link to="/products">
                  <ShoppingCart className="h-6 w-6 mb-2" />
                  Shop Products
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{order.product}</p>
                    <p className="text-sm text-gray-600">
                      {order.id} • {order.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
              <Link to="/orders">View All Orders</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">{rec.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                  <Button size="sm" asChild>
                    <Link to={rec.href}>{rec.action}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
