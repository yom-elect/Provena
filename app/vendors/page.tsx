"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Star, MapPin, ArrowRight, Heart, MessageSquare, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"

// Sample vendors data with more realistic information
const allVendors = [
  {
    id: "elegant-events-photography",
    name: "Elegant Events Photography",
    category: "Photography",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 124,
    image: "/vendor-photography.jpg",
    featured: true,
    description: "Capturing your special moments with artistic flair and attention to detail.",
    priceRange: "$$$",
    minPrice: 2500,
    likes: 342,
    comments: 28,
    tags: ["Wedding", "Portrait", "Event"],
  },
  {
    id: "delicious-delights-catering",
    name: "Delicious Delights Catering",
    category: "Catering",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviewCount: 98,
    image: "/vendor-catering.jpg",
    featured: true,
    description: "Exquisite cuisine tailored to your event's unique style and dietary needs.",
    priceRange: "$$",
    minPrice: 1800,
    likes: 256,
    comments: 42,
    tags: ["Wedding", "Corporate", "Buffet"],
  },
  {
    id: "creative-decor-solutions",
    name: "Creative Decor Solutions",
    category: "Decoration",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 87,
    image: "/vendor-decor.jpg",
    featured: false,
    description: "Transforming venues into magical spaces with innovative design concepts.",
    priceRange: "$$",
    minPrice: 1500,
    likes: 189,
    comments: 31,
    tags: ["Wedding", "Corporate", "Theme"],
  },
  {
    id: "harmony-wedding-planners",
    name: "Harmony Wedding Planners",
    category: "Planning",
    location: "Miami, FL",
    rating: 5.0,
    reviewCount: 56,
    image: "/vendor-planner.jpg",
    featured: true,
    description: "Full-service wedding planning to create your perfect day from start to finish.",
    priceRange: "$$$",
    minPrice: 3500,
    likes: 421,
    comments: 47,
    tags: ["Wedding", "Luxury", "Full-Service"],
  },
  {
    id: "rhythm-masters-dj",
    name: "Rhythm Masters DJ",
    category: "Music & Entertainment",
    location: "Austin, TX",
    rating: 4.6,
    reviewCount: 112,
    image: "/vendor-dj.jpg",
    featured: false,
    description: "Setting the perfect mood with customized playlists and professional sound equipment.",
    priceRange: "$$",
    minPrice: 1200,
    likes: 278,
    comments: 53,
    tags: ["Wedding", "Corporate", "Party"],
  },
  {
    id: "sweet-celebrations-bakery",
    name: "Sweet Celebrations Bakery",
    category: "Cakes & Desserts",
    location: "Seattle, WA",
    rating: 4.9,
    reviewCount: 78,
    image: "/vendor-bakery.jpg",
    featured: true,
    description: "Artisanal cakes and desserts that taste as amazing as they look.",
    priceRange: "$$",
    minPrice: 800,
    likes: 312,
    comments: 39,
    tags: ["Wedding", "Birthday", "Custom"],
  },
  {
    id: "floral-fantasies",
    name: "Floral Fantasies",
    category: "Florist",
    location: "Portland, OR",
    rating: 4.8,
    reviewCount: 65,
    image: "/vendor-florist.jpg",
    featured: false,
    description: "Creating stunning floral arrangements that bring your vision to life.",
    priceRange: "$$",
    minPrice: 1000,
    likes: 245,
    comments: 28,
    tags: ["Wedding", "Event", "Seasonal"],
  },
  {
    id: "glamour-hair-and-makeup",
    name: "Glamour Hair & Makeup",
    category: "Beauty Services",
    location: "San Francisco, CA",
    rating: 4.7,
    reviewCount: 92,
    image: "/vendor-beauty.jpg",
    featured: true,
    description: "Professional beauty services to make you look and feel your best on your special day.",
    priceRange: "$$$",
    minPrice: 1500,
    likes: 367,
    comments: 45,
    tags: ["Wedding", "Photoshoot", "Special Event"],
  },
  {
    id: "luxe-limo-services",
    name: "Luxe Limo Services",
    category: "Transportation",
    location: "Boston, MA",
    rating: 4.8,
    reviewCount: 73,
    image: "/vendor-limo.jpg",
    featured: false,
    description: "Elegant transportation solutions for weddings and special events.",
    priceRange: "$$",
    minPrice: 900,
    likes: 198,
    comments: 24,
    tags: ["Wedding", "Corporate", "Airport"],
  },
  {
    id: "crystal-clear-videography",
    name: "Crystal Clear Videography",
    category: "Videography",
    location: "Denver, CO",
    rating: 4.9,
    reviewCount: 84,
    image: "/vendor-video.jpg",
    featured: true,
    description: "Cinematic storytelling that captures the emotion and magic of your special day.",
    priceRange: "$$$",
    minPrice: 2800,
    likes: 289,
    comments: 37,
    tags: ["Wedding", "Corporate", "Documentary"],
  },
]

export default function VendorsPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const budgetParam = searchParams.get("budget") || ""
  const descriptionParam = searchParams.get("description") || ""

  const [searchTerm, setSearchTerm] = useState(query)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [minRating, setMinRating] = useState(0)
  const [vendors, setVendors] = useState(allVendors)
  const [sortOption, setSortOption] = useState("featured")
  const [likedVendors, setLikedVendors] = useState<string[]>([])

  // Filter vendors based on search and filters
  useEffect(() => {
    let filtered = [...allVendors]

    // Search term filter
    if (searchTerm) {
      filtered = filtered.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vendor.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vendor.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Budget description filter (for event suggestion feature)
    if (budgetParam && descriptionParam) {
      const budget = Number.parseInt(budgetParam)
      filtered = filtered.filter((vendor) => vendor.minPrice <= budget)

      // Additional filtering based on event description keywords
      const keywords = descriptionParam.toLowerCase().split(" ")
      const relevantKeywords = ["wedding", "corporate", "birthday", "party", "outdoor", "indoor"]

      const matchingKeywords = keywords.filter((word) => relevantKeywords.some((keyword) => word.includes(keyword)))

      if (matchingKeywords.length > 0) {
        filtered = filtered.filter((vendor) =>
          vendor.tags.some((tag) => matchingKeywords.some((keyword) => tag.toLowerCase().includes(keyword))),
        )
      }
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((vendor) => vendor.category === selectedCategory)
    }

    // Location filter
    if (selectedLocation !== "all") {
      filtered = filtered.filter((vendor) => vendor.location.includes(selectedLocation))
    }

    // Price range filter
    filtered = filtered.filter((vendor) => vendor.minPrice >= priceRange[0] && vendor.minPrice <= priceRange[1])

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter((vendor) => vendor.rating >= minRating)
    }

    // Sort vendors
    switch (sortOption) {
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case "rating-high":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "reviews":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case "price-low":
        filtered.sort((a, b) => a.minPrice - b.minPrice)
        break
      case "price-high":
        filtered.sort((a, b) => b.minPrice - a.minPrice)
        break
      case "popular":
        filtered.sort((a, b) => b.likes - a.likes)
        break
    }

    setVendors(filtered)
  }, [searchTerm, selectedCategory, selectedLocation, priceRange, minRating, sortOption, budgetParam, descriptionParam])

  const toggleLike = (id: string) => {
    setLikedVendors((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedLocation("all")
    setPriceRange([0, 5000])
    setMinRating(0)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] dark:bg-[#121212]">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 dark:from-teal-900/20 dark:to-emerald-900/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                  {budgetParam && descriptionParam
                    ? "Vendors Matching Your Event"
                    : "Find the Perfect Vendor for Your Event"}
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  {budgetParam && descriptionParam
                    ? `Here are vendors that match your ${Number.parseInt(budgetParam).toLocaleString()} budget`
                    : "Browse our curated selection of top-rated event professionals"}
                </p>
              </div>
              <div className="w-full max-w-md">
                <form
                  className="relative"
                  onSubmit={(e) => {
                    e.preventDefault()
                    // The search is handled by the useEffect
                  }}
                >
                  <Input
                    type="search"
                    placeholder="Search vendors, categories, or tags..."
                    className="pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:gap-10">
              {/* Mobile filters */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 md:hidden">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow down your search with these filters</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="mobile-category" className="text-sm font-medium">
                        Category
                      </Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger id="mobile-category">
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="Photography">Photography</SelectItem>
                          <SelectItem value="Catering">Catering</SelectItem>
                          <SelectItem value="Decoration">Decoration</SelectItem>
                          <SelectItem value="Planning">Planning</SelectItem>
                          <SelectItem value="Music & Entertainment">Music & Entertainment</SelectItem>
                          <SelectItem value="Cakes & Desserts">Cakes & Desserts</SelectItem>
                          <SelectItem value="Florist">Florist</SelectItem>
                          <SelectItem value="Beauty Services">Beauty Services</SelectItem>
                          <SelectItem value="Transportation">Transportation</SelectItem>
                          <SelectItem value="Videography">Videography</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile-location" className="text-sm font-medium">
                        Location
                      </Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger id="mobile-location">
                          <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="New York">New York</SelectItem>
                          <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                          <SelectItem value="Chicago">Chicago</SelectItem>
                          <SelectItem value="Miami">Miami</SelectItem>
                          <SelectItem value="Austin">Austin</SelectItem>
                          <SelectItem value="Seattle">Seattle</SelectItem>
                          <SelectItem value="Portland">Portland</SelectItem>
                          <SelectItem value="San Francisco">San Francisco</SelectItem>
                          <SelectItem value="Boston">Boston</SelectItem>
                          <SelectItem value="Denver">Denver</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="mobile-price" className="text-sm font-medium">
                          Price Range
                        </Label>
                        <span className="text-sm font-medium">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        id="mobile-price"
                        min={0}
                        max={5000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="py-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile-rating" className="text-sm font-medium">
                        Minimum Rating
                      </Label>
                      <Select
                        value={minRating.toString()}
                        onValueChange={(value) => setMinRating(Number.parseFloat(value))}
                      >
                        <SelectTrigger id="mobile-rating">
                          <SelectValue placeholder="Any Rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Any Rating</SelectItem>
                          <SelectItem value="4.5">4.5+</SelectItem>
                          <SelectItem value="4">4.0+</SelectItem>
                          <SelectItem value="3.5">3.5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button variant="outline" className="w-full" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Desktop filters */}
              <div className="hidden md:block w-[250px] shrink-0 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filter By</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-medium">
                        Category
                      </Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="Photography">Photography</SelectItem>
                          <SelectItem value="Catering">Catering</SelectItem>
                          <SelectItem value="Decoration">Decoration</SelectItem>
                          <SelectItem value="Planning">Planning</SelectItem>
                          <SelectItem value="Music & Entertainment">Music & Entertainment</SelectItem>
                          <SelectItem value="Cakes & Desserts">Cakes & Desserts</SelectItem>
                          <SelectItem value="Florist">Florist</SelectItem>
                          <SelectItem value="Beauty Services">Beauty Services</SelectItem>
                          <SelectItem value="Transportation">Transportation</SelectItem>
                          <SelectItem value="Videography">Videography</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-sm font-medium">
                        Location
                      </Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="New York">New York</SelectItem>
                          <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                          <SelectItem value="Chicago">Chicago</SelectItem>
                          <SelectItem value="Miami">Miami</SelectItem>
                          <SelectItem value="Austin">Austin</SelectItem>
                          <SelectItem value="Seattle">Seattle</SelectItem>
                          <SelectItem value="Portland">Portland</SelectItem>
                          <SelectItem value="San Francisco">San Francisco</SelectItem>
                          <SelectItem value="Boston">Boston</SelectItem>
                          <SelectItem value="Denver">Denver</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="price" className="text-sm font-medium">
                          Price Range
                        </Label>
                        <span className="text-sm font-medium">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        id="price"
                        min={0}
                        max={5000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="py-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rating" className="text-sm font-medium">
                        Minimum Rating
                      </Label>
                      <Select
                        value={minRating.toString()}
                        onValueChange={(value) => setMinRating(Number.parseFloat(value))}
                      >
                        <SelectTrigger id="rating">
                          <SelectValue placeholder="Any Rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Any Rating</SelectItem>
                          <SelectItem value="4.5">4.5+</SelectItem>
                          <SelectItem value="4">4.0+</SelectItem>
                          <SelectItem value="3.5">3.5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>

              {/* Vendors grid */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    {vendors.length === 0
                      ? "No vendors found matching your criteria"
                      : `Showing ${vendors.length} vendor${vendors.length === 1 ? "" : "s"}`}
                  </p>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="rating-high">Highest Rated</SelectItem>
                      <SelectItem value="reviews">Most Reviews</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {vendors.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-muted p-6 mb-4">
                      <Search className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No vendors found</h3>
                    <p className="text-muted-foreground max-w-md">
                      We couldn't find any vendors matching your criteria. Try adjusting your filters or search term.
                    </p>
                    <Button variant="outline" className="mt-6" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {vendors.map((vendor) => (
                      <div
                        key={vendor.id}
                        className="group relative overflow-hidden rounded-xl border bg-white dark:bg-[#1a1a1a] transition-all hover:shadow-md"
                      >
                        <Link href={`/vendors/${vendor.id}`} className="absolute inset-0 z-10">
                          <span className="sr-only">View {vendor.name}</span>
                        </Link>
                        <div className="aspect-video w-full overflow-hidden">
                          <Image
                            src={vendor.image || "/placeholder.svg"}
                            alt={vendor.name}
                            width={400}
                            height={300}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          {vendor.featured && (
                            <div className="absolute top-2 right-2 z-20 rounded-full bg-teal-500 px-2 py-1 text-xs font-medium text-white">
                              Featured
                            </div>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 left-2 z-20 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              toggleLike(vendor.id)
                            }}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                likedVendors.includes(vendor.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-gray-600 dark:text-gray-400"
                              }`}
                            />
                            <span className="sr-only">Like</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="outline"
                              className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800"
                            >
                              {vendor.category}
                            </Badge>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{vendor.priceRange}</p>
                          </div>
                          <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{vendor.name}</h3>
                          <div className="mt-1 flex items-center">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                            </div>
                            <span className="mx-1 text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{vendor.reviewCount} reviews</span>
                          </div>
                          <div className="mt-1 flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            {vendor.location}
                          </div>
                          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{vendor.description}</p>
                          <div className="mt-3 flex flex-wrap gap-1">
                            {vendor.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t pt-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Heart className="mr-1 h-3.5 w-3.5" />
                                <span>{vendor.likes}</span>
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="mr-1 h-3.5 w-3.5" />
                                <span>{vendor.comments}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm font-medium text-teal-600 dark:text-teal-400">
                              View Profile
                              <ArrowRight className="ml-1 h-3.5 w-3.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {vendors.length > 0 && (
                  <div className="flex items-center justify-center space-x-2 pt-6">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-teal-50 dark:bg-teal-900/30">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
