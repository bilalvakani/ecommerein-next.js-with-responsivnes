import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  link: string
}

export function CategoryCard({ title, description, image, link }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 md:h-60">
        <Image src={image || "https://i.pinimg.com/236x/88/cb/30/88cb3030068dd597a87ea295cdeeed0a.jpg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <Link href={link}>
          <Button variant="outline" className="w-full gap-1">
            Shop Now <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

