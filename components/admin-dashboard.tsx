"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Package, ShoppingCart, DollarSign, Eye, Edit, Trash2 } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Products",
    value: "456",
    change: "+5%",
    icon: Package,
    color: "text-green-600",
  },
  {
    title: "Orders",
    value: "789",
    change: "+18%",
    icon: ShoppingCart,
    color: "text-purple-600",
  },
  {
    title: "Revenue",
    value: "₹2,34,567",
    change: "+23%",
    icon: DollarSign,
    color: "text-orange-600",
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Rajesh Kumar",
    product: "Premium Wheat Seeds",
    amount: "₹2,500",
    status: "Pending",
    date: "2024-01-20",
  },
  {
    id: "ORD-002",
    customer: "Priya Sharma",
    product: "Organic NPK Fertilizer",
    amount: "₹1,200",
    status: "Shipped",
    date: "2024-01-19",
  },
  {
    id: "ORD-003",
    customer: "Amit Singh",
    product: "Smart Irrigation Kit",
    amount: "₹8,500",
    status: "Delivered",
    date: "2024-01-18",
  },
]

const recentProducts = [
  {
    id: 1,
    name: "Premium Wheat Seeds",
    category: "Seeds",
    price: "₹2,500",
    stock: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "Organic NPK Fertilizer",
    category: "Fertilizers",
    price: "₹1,200",
    stock: 0,
    status: "Out of Stock",
  },
]

export function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your agriculture platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} from last month</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-gray-600">{order.product}</p>
                    <p className="text-xs text-gray-500">
                      {order.id} • {order.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <Badge
                      variant={
                        order.status === "Delivered" ? "default" : order.status === "Shipped" ? "secondary" : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Product Management */}
        <Card>
          <CardHeader>
            <CardTitle>Product Management</CardTitle>
            <CardDescription>Manage your product inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      {product.category} • {product.price}
                    </p>
                    <p className="text-xs text-gray-500">Stock: {product.stock}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={product.stock > 0 ? "default" : "destructive"}>{product.status}</Badge>
                    <div className="flex space-x-1">
                      <Button size="icon" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">Add New Product</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
