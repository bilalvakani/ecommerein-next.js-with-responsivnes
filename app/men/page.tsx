
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Men's Shoes - Blue Moon Shoes",
  description: "Browse our collection of men's shoes",
}

// Sample product data for men's shoes
const products = [
  {
    id: 1,
    name: "Men's Running Shoes",
    price: 89.99,
    images: ["/https://i.pinimg.com/236x/88/cb/30/88cb3030068dd597a87ea295cdeeed0a.jpg"],
    isNew: true,
  },
  {
    id: 2,
    name: "Men's Formal Shoes",
    price: 99.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: false,
  },
  {
    id: 3,
    name: "Men's Casual Sneakers",
    price: 79.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: true,
  },
  {
    id: 4,
    name: "Men's Hiking Boots",
    price: 129.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: false,
  },
  {
    id: 5,
    name: "Men's Loafers",
    price: 89.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: false,
  },
  {
    id: 6,
    name: "Men's Sport Sandals",
    price: 59.99,
    images: ["/placeholder.svg?height=300&width=300"],
    isNew: true,
  },
]

export default function MenPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          {/* <h1 className="text-3xl font-bold tracking-tight">Men's Shoes</h1>
          <p className="text-muted-foreground">Browse our collection of men's shoes</p> */}
          <h1 className="text-3xl font-bold tracking-tight">Men&apos;s Shoes</h1>
<p className="text-muted-foreground">Browse our collection of men&apos;s shoes</p>

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

