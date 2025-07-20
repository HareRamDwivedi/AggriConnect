"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { Star, ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wheat Seeds",
    price: 2500,
    originalPrice: 3000,
    rating: 4.8,
    reviews: 124,
    image: "/wheat-seeds-in-bag.png",
    category: "Seeds",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic NPK Fertilizer",
    price: 1200,
    originalPrice: 1500,
    rating: 4.6,
    reviews: 89,
    image: "/organic-fertilizer-bag.png",
    category: "Fertilizers",
    inStock: true,
  },
  {
    id: 3,
    name: "Smart Irrigation Kit",
    price: 8500,
    originalPrice: 10000,
    rating: 4.9,
    reviews: 45,
    image: "/drip-irrigation.png",
    category: "Tools",
    inStock: true,
  },
  {
    id: 4,
    name: "Pesticide Sprayer",
    price: 3200,
    originalPrice: 4000,
    rating: 4.5,
    reviews: 67,
    image: "/placeholder.svg?height=200&width=200",
    category: "Tools",
    inStock: false,
  },
]

export function ProductsPreview() {
  const { addToCart } = useCart()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Quality agricultural products at competitive prices</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge variant={product.inStock ? "default" : "secondary"} className="absolute top-2 right-2">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full"
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                  onClick={() => product.inStock && addToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
