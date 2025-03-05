"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/men",
      label: "Men",
      active: pathname === "/men",
    },
    {
      href: "/women",
      label: "Women",
      active: pathname === "/women",
    },
    {
      href: "/kids",
      label: "Kids",
      active: pathname === "/kids",
    },
    {
      href: "/cart",
      label: "Cart",
      active: pathname === "/cart",
    },
  ]

  return (
    <div className="flex h-16 items-center px-4 bg-blue-900 text-white">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="mr-2 px-0 text-white hover:bg-blue-800 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-blue-900 text-white">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <span className="font-bold text-xl">Blue Moon Shoes</span>
          </Link>
          <div className="mt-8 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-lg font-medium transition-colors hover:text-blue-300 ${
                  route.active ? "text-blue-300" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Blue Moon Shoes</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`transition-colors hover:text-blue-300 ${route.active ? "text-blue-300" : ""}`}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-2 ml-auto">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-800"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-medium flex items-center justify-center">
              0
            </span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

