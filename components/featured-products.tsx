// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// // Sample product data
// const products = [
//   {
//     id: 1,
//     name: "Men's Running Shoes",
//     price: 89.99,
//     category: "men",
//     images: [
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//     ],
//     isNew: true,
//   },
//   {
//     id: 2,
//     name: "Women's Casual Sneakers",
//     price: 79.99,
//     category: "women",
//     images: [
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//     ],
//     isNew: true,
//   },
//   {
//     id: 3,
//     name: "Kids' Sport Shoes",
//     price: 59.99,
//     category: "kids",
//     images: [
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//     ],
//     isNew: true,
//   },
//   {
//     id: 4,
//     name: "Men's Formal Shoes",
//     price: 99.99,
//     category: "men",
//     images: [
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//       "/placeholder.svg?height=300&width=300",
//     ],
//     isNew: true,
//   },
// ]

// export default function FeaturedProducts() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   )
// }

// function ProductCard({ product }: { product: any }) {
//   const [currentImage, setCurrentImage] = useState(0)

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % product.images.length)
//   }

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
//   }

//   return (
//     <Card className="overflow-hidden">
//       <div className="relative h-64">
//         <Image
//           src={product.images[currentImage] || "/placeholder.svg"}
//           alt={product.name}
//           fill
//           className="object-cover"
//         />
//         {product.isNew && <Badge className="absolute top-2 right-2 bg-blue-600">New Arrival</Badge>}
//         <div className="absolute inset-0 flex items-center justify-between px-2">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="h-8 w-8 rounded-full bg-white/80 text-gray-800"
//             onClick={prevImage}
//           >
//             <ChevronLeft className="h-4 w-4" />
//             <span className="sr-only">Previous image</span>
//           </Button>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="h-8 w-8 rounded-full bg-white/80 text-gray-800"
//             onClick={nextImage}
//           >
//             <ChevronRight className="h-4 w-4" />
//             <span className="sr-only">Next image</span>
//           </Button>
//         </div>
//       </div>
//       <CardContent className="p-4">
//         <Link href={`/products/${product.id}`}>
//           <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">{product.name}</h3>
//         </Link>
//         <p className="text-gray-500">${product.price.toFixed(2)}</p>
//       </CardContent>
//       <CardFooter className="p-4 pt-0">
//         <Link href={`/products/${product.id}`} className="w-full">
//           <Button variant="outline" className="w-full gap-2">
//             <ShoppingCart className="h-4 w-4" /> View Details
//           </Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   )
// }

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Define Product Type
interface Product {
  id: number
  name: string
  price: number
  category: string
  images: string[]
  isNew: boolean
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Men's Running Shoes",
    price: 89.99,
    category: "men",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    isNew: true,
  },
  {
    id: 2,
    name: "Women's Casual Sneakers",
    price: 79.99,
    category: "women",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    isNew: true,
  },
  {
    id: 3,
    name: "Kids' Sport Shoes",
    price: 59.99,
    category: "kids",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    isNew: true,
  },
  {
    id: 4,
    name: "Men's Formal Shoes",
    price: 99.99,
    category: "men",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    isNew: true,
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image
          src={product.images[currentImage] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.isNew && <Badge className="absolute top-2 right-2 bg-blue-600">New Arrival</Badge>}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80 text-gray-800"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80 text-gray-800"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
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
  )
}
