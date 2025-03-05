import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Kids' Shoes - Blue Moon Shoes",
  description: "Browse our collection of kids' shoes",
}

// Sample product data for kids' shoes
const products = [
  {
    id: 201,
    name: "Kids' Running Shoes",
    price: 59.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: true,
  },
  {
    id: 202,
    name: "Kids' School Shoes",
    price: 49.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: false,
  },
  {
    id: 203,
    name: "Kids' Sport Shoes",
    price: 54.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: true,
  },
  {
    id: 204,
    name: "Kids' Casual Shoes",
    price: 44.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: false,
  },
  {
    id: 205,
    name: "Kids' Sandals",
    price: 39.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: false,
  },
  {
    id: 206,
    name: "Kids' Boots",
    price: 64.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: true,
  },
]

export default function KidsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Kids' Shoes</h1>
          <p className="text-muted-foreground">Browse our collection of kids' shoes</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="p-2 border rounded-md">
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-64">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.isNew && <Badge className="absolute top-2 right-2 bg-blue-600">New Arrival</Badge>}
            </div>
            <CardContent className="p-4">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">{product.name}</h3>
              </Link>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/products/${product.id}`} className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" /> View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

