// // "use client"

// // import { useState } from "react"
// // import Image from "next/image"
// // import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react"

// // import { Button } from "@/components/ui/button"
// // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// // import { Label } from "@/components/ui/label"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// // // Sample product data
// // const products = {
// //   1: {
// //     id: 1,
// //     name: "Men's Running Shoes",
// //     price: 89.99,
// //     category: "men",
// //     description:
// //       "Premium running shoes designed for comfort and performance. These shoes feature advanced cushioning technology and breathable materials to keep your feet comfortable during long runs.",
// //     sizes: [7, 8, 9, 10, 11, 12],
// //     colors: ["Black", "Blue", "Gray"],
// //     images: [
// //       "/placeholder.svg?height=600&width=600",
// //       "/placeholder.svg?height=600&width=600",
// //       "/placeholder.svg?height=600&width=600",
// //     ],
// //     isNew: true,
// //   },
// //   2: {
// //     id: 2,
// //     name: "Women's Casual Sneakers",
// //     price: 79.99,
// //     category: "women",
// //     description:
// //       "Stylish and comfortable casual sneakers perfect for everyday wear. These sneakers combine fashion with functionality, featuring a sleek design and cushioned insoles for all-day comfort.",
// //     sizes: [5, 6, 7, 8, 9, 10],
// //     colors: ["White", "Pink", "Black"],
// //     images: [
// //       "/placeholder.svg?height=600&width=600",
// //       "/placeholder.svg?height=600&width=600",
// //       "/placeholder.svg?height=600&width=600",
// //     ],
// //     isNew: true,
// //   },
// //   3: {
// //     id: 3,
// //     name: "Kids' Sport Shoes",
// //     price: 59.99,
// //     category: "kids",
// //     description:
// //       "Durable and comfortable sport shoes designed for active kids. These shoes provide excellent support and traction, making them perfect for playground activities and sports.",
// //     sizes: [3, 4, 5, 6, 7],
// //     colors: ["Blue", "Red", "Green"],
// //     images: [
// //       "/placeholder.svg?height=600&width=600",
// //       "/placeholder.svg?height=600&width=600",
// //       "/placeholder.svg?height=600&width=600",
// //     ],
// //     isNew: true,
// //   },
// // }

// // export default function ProductPage({ params }: { params: { id: string } }) {
// //   const productId = Number.parseInt(params.id)
// //   const product = products[productId as keyof typeof products] || products[1]

// //   const [selectedSize, setSelectedSize] = useState<number | null>(null)
// //   const [selectedColor, setSelectedColor] = useState<string | null>(null)
// //   const [currentImage, setCurrentImage] = useState(0)

// //   const nextImage = () => {
// //     setCurrentImage((prev) => (prev + 1) % product.images.length)
// //   }

// //   const prevImage = () => {
// //     setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
// //   }

// //   const selectImage = (index: number) => {
// //     setCurrentImage(index)
// //   }

// //   return (
// //     <div className="container px-4 py-8 md:py-12">
// //       <div className="flex flex-col md:flex-row gap-8">
// //         {/* Product Images */}
// //         <div className="md:w-1/2 space-y-4">
// //           <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border">
// //             <Image
// //               src={product.images[currentImage] || "/placeholder.svg"}
// //               alt={product.name}
// //               fill
// //               className="object-cover"
// //             />
// //             <div className="absolute inset-0 flex items-center justify-between px-4">
// //               <Button
// //                 variant="ghost"
// //                 size="icon"
// //                 className="h-10 w-10 rounded-full bg-white/80 text-gray-800"
// //                 onClick={prevImage}
// //               >
// //                 <ChevronLeft className="h-6 w-6" />
// //                 <span className="sr-only">Previous image</span>
// //               </Button>
// //               <Button
// //                 variant="ghost"
// //                 size="icon"
// //                 className="h-10 w-10 rounded-full bg-white/80 text-gray-800"
// //                 onClick={nextImage}
// //               >
// //                 <ChevronRight className="h-6 w-6" />
// //                 <span className="sr-only">Next image</span>
// //               </Button>
// //             </div>
// //           </div>
// //           <div className="flex gap-2 overflow-x-auto pb-2">
// //             {product.images.map((image, index) => (
// //               <button
// //                 key={index}
// //                 className={`relative h-20 w-20 rounded-md overflow-hidden border-2 ${
// //                   currentImage === index ? "border-blue-600" : "border-transparent"
// //                 }`}
// //                 onClick={() => selectImage(index)}
// //               >
// //                 <Image
// //                   src={image || "/placeholder.svg"}
// //                   alt={`${product.name} thumbnail ${index + 1}`}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Product Details */}
// //         <div className="md:w-1/2 space-y-6">
// //           <div>
// //             <h1 className="text-3xl font-bold">{product.name}</h1>
// //             <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
// //           </div>

// //           <div className="space-y-4">
// //             <div>
// //               <h3 className="text-lg font-medium mb-2">Select Size</h3>
// //               <div className="flex flex-wrap gap-2">
// //                 {product.sizes.map((size) => (
// //                   <button
// //                     key={size}
// //                     className={`h-10 min-w-[2.5rem] px-2 rounded border ${
// //                       selectedSize === size
// //                         ? "bg-blue-600 text-white border-blue-600"
// //                         : "bg-white text-gray-800 border-gray-300 hover:border-blue-600"
// //                     }`}
// //                     onClick={() => setSelectedSize(size)}
// //                   >
// //                     {size}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             <div>
// //               <h3 className="text-lg font-medium mb-2">Select Color</h3>
// //               <RadioGroup value={selectedColor || ""} onValueChange={setSelectedColor}>
// //                 <div className="flex flex-wrap gap-4">
// //                   {product.colors.map((color) => (
// //                     <div key={color} className="flex items-center space-x-2">
// //                       <RadioGroupItem value={color} id={`color-${color.toLowerCase()}`} />
// //                       <Label htmlFor={`color-${color.toLowerCase()}`}>{color}</Label>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </RadioGroup>
// //             </div>
// //           </div>

// //           <div className="flex flex-col gap-4 sm:flex-row">
// //             <Button className="gap-2 bg-blue-600 hover:bg-blue-700" size="lg">
// //               <ShoppingCart className="h-5 w-5" /> Add to Cart
// //             </Button>
// //             <Button variant="outline" size="lg" className="gap-2">
// //               <Heart className="h-5 w-5" /> Add to Wishlist
// //             </Button>
// //           </div>

// //           <Tabs defaultValue="description">
// //             <TabsList className="grid w-full grid-cols-2">
// //               <TabsTrigger value="description">Description</TabsTrigger>
// //               <TabsTrigger value="details">Details</TabsTrigger>
// //             </TabsList>
// //             <TabsContent value="description" className="pt-4">
// //               <p className="text-gray-600">{product.description}</p>
// //             </TabsContent>
// //             <TabsContent value="details" className="pt-4">
// //               <ul className="space-y-2 text-gray-600">
// //                 <li>
// //                   <strong>Category:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
// //                 </li>
// //                 <li>
// //                   <strong>Available Sizes:</strong> {product.sizes.join(", ")}
// //                 </li>
// //                 <li>
// //                   <strong>Available Colors:</strong> {product.colors.join(", ")}
// //                 </li>
// //                 <li>
// //                   <strong>Material:</strong> Synthetic, Mesh
// //                 </li>
// //                 <li>
// //                   <strong>Shipping:</strong> Free shipping on orders over $50
// //                 </li>
// //                 <li>
// //                   <strong>Returns:</strong> 30-day return policy
// //                 </li>
// //               </ul>
// //             </TabsContent>
// //           </Tabs>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const products = {
//   1: {
//     id: 1,
//     name: "Product 1",
//     description: "This is the first product.",
//     image: "/product1.jpg",
//     price: "$10.00",
//   },
//   2: {
//     id: 2,
//     name: "Product 2",
//     description: "This is the second product.",
//     image: "/product2.jpg",
//     price: "$15.00",
//   },
// };

// export default function ProductPage({ params }: { params: { id: string } }) {
//   if (!params || !params.id) return <p>Product not found</p>;

//   const productId = Number.parseInt(params.id);
//   const product = products[productId as keyof typeof products] || products[1];

//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row items-center">
//         <Image src={product.image} alt={product.name} width={300} height={300} className="rounded-lg" />
//         <div className="md:ml-8">
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-lg font-semibold">{product.price}</p>
//           <div className="mt-4 flex items-center">
//             <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1} className="bg-gray-300 px-2 py-1 rounded">-</button>
//             <span className="mx-2">{quantity}</span>
//             <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-300 px-2 py-1 rounded">+</button>
//           </div>
//           <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
//         </div>
//       </div>
//       <Link href="/" className="text-blue-600 mt-4 block">Back to Home</Link>
//     </div>
//   );
// }




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
  const productId = Number.parseInt(params.id)
  const product = products[productId as keyof typeof products] || products[1]

  // ✅ Hooks ہمیشہ کمپوننٹ کے شروع میں ہونے چاہییں
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

