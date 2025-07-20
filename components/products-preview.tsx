import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wheat Seeds",
    price: "₹2,500",
    originalPrice: "₹3,000",
    rating: 4.8,
    reviews: 124,
    image: "/wheat-seeds-in-bag.png",
    category: "Seeds",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic NPK Fertilizer",
    price: "₹1,200",
    originalPrice: "₹1,500",
    rating: 4.6,
    reviews: 89,
    image: "/organic-fertilizer-bag.png",
    category: "Fertilizers",
    inStock: true,
  },
  {
    id: 3,
    name: "Smart Irrigation Kit",
    price: "₹8,500",
    originalPrice: "₹10,000",
    rating: 4.9,
    reviews: 45,
    image: "/drip-irrigation.png",
    category: "Tools",
    inStock: true,
  },
  {
    id: 4,
    name: "Pesticide Sprayer",
    price: "₹3,200",
    originalPrice: "₹4,000",
    rating: 4.5,
    reviews: 67,
    image: "/placeholder-wodow.png",
    category: "Tools",
    inStock: false,
  },
]

export function ProductsPreview() {
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
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
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
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
