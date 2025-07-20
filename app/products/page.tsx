"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, ShoppingCart, Heart, Grid3X3, List } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Wheat Seeds (HD-2967)",
    price: 2500,
    originalPrice: 3000,
    rating: 4.8,
    reviews: 124,
    image: "/wheat-seeds-in-bag.png",
    category: "Seeds",
    brand: "AgriSeeds Pro",
    inStock: true,
    discount: 17,
    description: "High-yielding wheat variety suitable for irrigated conditions",
  },
  {
    id: 2,
    name: "Organic NPK Fertilizer (20-20-20)",
    price: 1200,
    originalPrice: 1500,
    rating: 4.6,
    reviews: 89,
    image: "/organic-fertilizer-bag.png",
    category: "Fertilizers",
    brand: "GreenGrow",
    inStock: true,
    discount: 20,
    description: "Balanced NPK fertilizer for all crops with micronutrients",
  },
  {
    id: 3,
    name: "Smart Drip Irrigation Kit",
    price: 8500,
    originalPrice: 10000,
    rating: 4.9,
    reviews: 45,
    image: "/drip-irrigation.png",
    category: "Tools",
    brand: "AquaTech",
    inStock: true,
    discount: 15,
    description: "Complete drip irrigation system for 1 acre coverage",
  },
  {
    id: 4,
    name: "Battery Operated Sprayer",
    price: 3200,
    originalPrice: 4000,
    rating: 4.5,
    reviews: 67,
    image: "/placeholder-wodow.png",
    category: "Tools",
    brand: "SprayMaster",
    inStock: false,
    discount: 20,
    description: "16L capacity with adjustable nozzle and long battery life",
  },
  {
    id: 5,
    name: "Hybrid Tomato Seeds (Arka Rakshak)",
    price: 450,
    originalPrice: 500,
    rating: 4.7,
    reviews: 156,
    image: "/tomato-seeds-packet.png",
    category: "Seeds",
    brand: "VegSeeds",
    inStock: true,
    discount: 10,
    description: "Disease resistant hybrid tomato variety with high yield",
  },
  {
    id: 6,
    name: "Vermicompost Organic Manure",
    price: 800,
    originalPrice: 1000,
    rating: 4.4,
    reviews: 78,
    image: "/vermicompost-organic-fertilizer.png",
    category: "Fertilizers",
    brand: "EcoFarm",
    inStock: true,
    discount: 20,
    description: "Premium quality vermicompost for soil health improvement",
  },
]

const categories = ["All", "Seeds", "Fertilizers", "Tools", "Pesticides"]
const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest First" },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popularity")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [wishlist, setWishlist] = useState<number[]>([])

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Agricultural Products</h1>
          <p className="text-lg text-gray-600">Quality seeds, fertilizers, and farming tools at competitive prices</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for seeds, fertilizers, tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">Showing {filteredProducts.length} products</p>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              {viewMode === "grid" ? (
                <>
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge variant="destructive" className="text-xs">
                          {product.discount}% OFF
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="bg-white/80 hover:bg-white"
                          onClick={() => toggleWishlist(product.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                            }`}
                          />
                        </Button>
                      </div>
                      <Badge variant={product.inStock ? "default" : "secondary"} className="absolute bottom-2 right-2">
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
                    <CardTitle className="text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
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
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs">
                        {product.discount}% OFF
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Badge variant="outline" className="text-xs mb-1">
                            {product.category}
                          </Badge>
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                        <Button size="icon" variant="ghost" onClick={() => toggleWishlist(product.id)}>
                          <Heart
                            className={`h-4 w-4 ${
                              wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                            }`}
                          />
                        </Button>
                      </div>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                        <Badge variant={product.inStock ? "default" : "secondary"} className="ml-4">
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <Button disabled={!product.inStock} variant={product.inStock ? "default" : "secondary"}>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
