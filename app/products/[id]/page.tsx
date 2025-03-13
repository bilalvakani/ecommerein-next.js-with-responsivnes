"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = {
  1: {
    id: 1,
    name: "Men's Running Shoes",
    price: 89.99,
    category: "men",
    description: "Premium running shoes designed for comfort...",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "Blue", "Gray"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    isNew: true,
  },
  2: {
    id: 2,
    name: "Women's Casual Sneakers",
    price: 79.99,
    category: "women",
    description: "Stylish and comfortable casual sneakers...",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["White", "Pink", "Black"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    isNew: true,
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.isNaN(Number.parseInt(params.id)) ? 1 : Number.parseInt(params.id)
  const product = products[productId as keyof typeof products] || products[1]

  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  const selectImage = (index: number) => setCurrentImage(index)

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2 space-y-4">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border">
            <Image src={product.images[currentImage]} alt={product.name} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button variant="ghost" size="icon" onClick={prevImage}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" onClick={nextImage}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button key={index} className={`h-20 w-20 border-2 ${currentImage === index ? "border-blue-600" : ""}`} onClick={() => selectImage(index)}>
                <Image src={image} alt={`${product.name} thumbnail`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>

          <div>
            <h3 className="text-lg font-medium">Select Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button key={size} className={`px-4 py-2 border ${selectedSize === size ? "bg-blue-600 text-white" : "bg-white"}`} onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Select Color</h3>
            <RadioGroup value={selectedColor || ""} onValueChange={setSelectedColor}>
              {product.colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <RadioGroupItem value={color} id={`color-${color.toLowerCase()}`} />
                  <Label htmlFor={`color-${color.toLowerCase()}`}>{color}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </Button>
            <Button variant="outline">
              <Heart className="h-5 w-5" /> Add to Wishlist
            </Button>
          </div>

          <Tabs defaultValue="description">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="details">
              <ul>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>Sizes:</strong> {product.sizes.join(", ")}</li>
                <li><strong>Colors:</strong> {product.colors.join(", ")}</li>
                <li><strong>Material:</strong> Synthetic, Mesh</li>
                <li><strong>Shipping:</strong> Free shipping on orders over $50</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
