"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, ArrowRight, ThumbsUp, MessageSquare, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample vendors data - we would normally fetch this from an API
const allVendors = [
  {
    id: "elegant-events-photography",
    name: "Elegant Events Photography",
    category: "Photography",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 124,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    description: "Capturing your special moments with artistic flair and attention to detail.",
    priceRange: "$$$",
    minPrice: 1500,
    maxPrice: 3500,
    tags: ["wedding", "portrait", "event"],
    socialStats: {
      likes: 842,
      comments: 156,
      shares: 64,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "delicious-delights-catering",
    name: "Delicious Delights Catering",
    category: "Catering",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviewCount: 98,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    description: "Exquisite cuisine tailored to your event's unique style and dietary needs.",
    priceRange: "$$",
    minPrice: 2000,
    maxPrice: 5000,
    tags: ["wedding", "corporate", "buffet", "plated"],
    socialStats: {
      likes: 623,
      comments: 89,
      shares: 42,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "creative-decor-solutions",
    name: "Creative Decor Solutions",
    category: "Decoration",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 87,
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    description: "Transforming venues into magical spaces with innovative design concepts.",
    priceRange: "$$",
    minPrice: 1000,
    maxPrice: 3000,
    tags: ["wedding", "corporate", "floral", "lighting"],
    socialStats: {
      likes: 512,
      comments: 76,
      shares: 38,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "harmony-wedding-planners",
    name: "Harmony Wedding Planners",
    category: "Planning",
    location: "Miami, FL",
    rating: 5.0,
    reviewCount: 56,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    description: "Full-service wedding planning to create your perfect day from start to finish.",
    priceRange: "$$$",
    minPrice: 3000,
    maxPrice: 10000,
    tags: ["wedding", "coordination", "full-service"],
    socialStats: {
      likes: 423,
      comments: 67,
      shares: 31,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "rhythm-masters-dj",
    name: "Rhythm Masters DJ",
    category: "Music & Entertainment",
    location: "Austin, TX",
    rating: 4.6,
    reviewCount: 112,
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    description: "Setting the perfect mood with customized playlists and professional sound equipment.",
    priceRange: "$$",
    minPrice: 800,
    maxPrice: 2000,
    tags: ["wedding", "corporate", "party", "equipment"],
    socialStats: {
      likes: 756,
      comments: 124,
      shares: 58,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "sweet-celebrations-bakery",
    name: "Sweet Celebrations Bakery",
    category: "Cakes & Desserts",
    location: "Seattle, WA",
    rating: 4.9,
    reviewCount: 78,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    description: "Artisanal cakes and desserts that taste as amazing as they look.",
    priceRange: "$$",
    minPrice: 500,
    maxPrice: 1500,
    tags: ["wedding", "birthday", "custom", "dessert-table"],
    socialStats: {
      likes: 892,
      comments: 143,
      shares: 76,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "floral-fantasies",
    name: "Floral Fantasies",
    category: "Florist",
    location: "Portland, OR",
    rating: 4.8,
    reviewCount: 65,
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    description: "Creating stunning floral arrangements that bring your vision to life.",
    priceRange: "$$",
    minPrice: 1000,
    maxPrice: 3000,
    tags: ["wedding", "corporate", "centerpieces", "bouquets"],
    socialStats: {
      likes: 634,
      comments: 98,
      shares: 47,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "glamour-hair-and-makeup",
    name: "Glamour Hair & Makeup",
    category: "Beauty Services",
    location: "San Francisco, CA",
    rating: 4.7,
    reviewCount: 92,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    description: "Professional beauty services to make you look and feel your best on your special day.",
    priceRange: "$$$",
    minPrice: 300,
    maxPrice: 1000,
    tags: ["wedding", "bridal", "party", "on-location"],
    socialStats: {
      likes: 723,
      comments: 118,
      shares: 53,
    },
    portfolioImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export default function SuggestionsPage() {
  const searchParams = useSearchParams()
  const description = searchParams.get("description") || ""
  const budget = Number.parseInt(searchParams.get("budget") || "5000")

  // Filter vendors based on budget
  // In a real app, we would use NLP to analyze the description and match vendors
  const suggestedVendors = allVendors.filter((vendor) => vendor.minPrice <= budget)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-teal-50 to-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Suggested Vendors for Your Event
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Based on your event description and budget of ${budget.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              {/* Event summary card */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Event Details</CardTitle>
                  <CardDescription>We've analyzed your requirements to find the best matches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                      <p className="mt-1">{description || "No description provided"}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Budget</h3>
                      <p className="mt-1">${budget.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Suggested Vendors: {suggestedVendors.length}</Badge>
                      <Badge variant="outline">Within Budget: {suggestedVendors.length}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vendor suggestions */}
              <h2 className="text-2xl font-bold mt-6">Recommended Vendors</h2>
              <div className="grid gap-6">
                {suggestedVendors.map((vendor) => (
                  <Card key={vendor.id} className="overflow-hidden">
                    <div className="md:grid md:grid-cols-[1fr_2fr]">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={vendor.image || "/placeholder.svg"}
                          alt={vendor.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-gradient-to-r from-teal-500 to-emerald-500">{vendor.priceRange}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold">{vendor.name}</h3>
                            <div className="flex items-center mt-1">
                              <Badge variant="outline" className="mr-2">
                                {vendor.category}
                              </Badge>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                                <span className="mx-1 text-sm text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">{vendor.reviewCount} reviews</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Save</span>
                          </Button>
                        </div>

                        <p className="mt-4 text-muted-foreground">{vendor.description}</p>

                        <div className="mt-4 flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          {vendor.location}
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {vendor.portfolioImages.map((image, index) => (
                            <div key={index} className="relative h-20 overflow-hidden rounded-md">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Portfolio image ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <ThumbsUp className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{vendor.socialStats.likes}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{vendor.socialStats.comments}</span>
                            </div>
                          </div>
                          <Button asChild>
                            <Link href={`/vendors/${vendor.id}`}>
                              View Profile <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {suggestedVendors.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold">No vendors found within your budget</h3>
                  <p className="mt-2 text-muted-foreground">
                    Try increasing your budget or modifying your requirements
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/vendors">Browse All Vendors</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
