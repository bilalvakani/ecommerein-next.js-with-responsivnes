import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import hero from "../public/hero (2).png"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedProducts from "@/components/featured-products"
import { CategoryCard } from "@/components/category-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-900 to-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Blue Moon Shoes</h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Step into style with our premium collection of footwear for the entire family.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/men">
                  <Button className="bg-blue-600 hover:bg-blue-700">Shop Men</Button>
                </Link>
                <Link href="/women">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Shop Women
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={hero}
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop by Category</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find the perfect shoes for every occasion
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <CategoryCard
              title="Men's Collection"
              description="Stylish and comfortable shoes for men"
              image="/placeholder.svg?height=300&width=400"
              link="/men"
            />
            <CategoryCard
              title="Women's Collection"
              description="Elegant and trendy shoes for women"
              image="/placeholder.svg?height=300&width=400"
              link="/women"
            />
            <CategoryCard
              title="Kids' Collection"
              description="Fun and durable shoes for kids"
              image="/placeholder.svg?height=300&width=400"
              link="/kids"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New Arrivals</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our latest styles and designs
              </p>
            </div>
          </div>
          <FeaturedProducts />
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button variant="outline" className="gap-1">
                View All Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-blue-800 border-none text-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-full bg-blue-700 w-12 h-12 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Free Shipping</h3>
                <p className="text-gray-300">On all orders over $50</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-800 border-none text-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-full bg-blue-700 w-12 h-12 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Cash on Delivery</h3>
                <p className="text-gray-300">Pay when you receive</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-800 border-none text-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-full bg-blue-700 w-12 h-12 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality Guarantee</h3>
                <p className="text-gray-300">30-day return policy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

