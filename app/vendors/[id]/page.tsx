"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Star,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  Share2,
  Heart,
  Check,
  ChevronLeft,
  Send,
  ThumbsUp,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample vendors data with more realistic information
const vendors = [
  {
    id: "elegant-events-photography",
    name: "Elegant Events Photography",
    category: "Photography",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 124,
    image: "/vendor-photography.jpg",
    coverImage: "/vendor-photography-cover.jpg",
    featured: true,
    description: "Capturing your special moments with artistic flair and attention to detail.",
    priceRange: "$$$",
    minPrice: 2500,
    fullDescription:
      "Elegant Events Photography specializes in capturing the most precious moments of your special day with a blend of artistic vision and technical expertise. With over 10 years of experience in wedding and event photography, our team of professional photographers knows exactly how to document your event in a way that tells your unique story. We pride ourselves on our ability to capture both the grand moments and the subtle details that make your event special.",
    services: [
      "Wedding Photography",
      "Engagement Sessions",
      "Corporate Events",
      "Family Portraits",
      "Photo Booths",
      "Same-Day Edits",
      "Custom Albums",
    ],
    packages: [
      {
        name: "Essential Package",
        price: "$2,500",
        description: "6 hours of coverage, 1 photographer, 300+ edited photos, online gallery",
      },
      {
        name: "Premium Package",
        price: "$3,500",
        description:
          "8 hours of coverage, 2 photographers, 500+ edited photos, engagement session, online gallery, custom album",
      },
      {
        name: "Luxury Package",
        price: "$5,000",
        description:
          "10 hours of coverage, 2 photographers, unlimited photos, engagement session, bridal session, online gallery, custom album, canvas print",
      },
    ],
    portfolio: [
      {
        id: "photo1",
        image: "/portfolio-photo-1.jpg",
        title: "Summer Wedding",
        description: "Beachside ceremony in the Hamptons",
        likes: 87,
        comments: 12,
      },
      {
        id: "photo2",
        image: "/portfolio-photo-2.jpg",
        title: "Corporate Gala",
        description: "Annual charity event at the Plaza Hotel",
        likes: 64,
        comments: 8,
      },
      {
        id: "photo3",
        image: "/portfolio-photo-3.jpg",
        title: "Engagement Session",
        description: "Central Park autumn photoshoot",
        likes: 112,
        comments: 15,
      },
      {
        id: "photo4",
        image: "/portfolio-photo-4.jpg",
        title: "Family Portrait",
        description: "Multi-generational family session",
        likes: 53,
        comments: 7,
      },
      {
        id: "photo5",
        image: "/portfolio-photo-5.jpg",
        title: "Wedding Reception",
        description: "First dance captured in natural light",
        likes: 98,
        comments: 14,
      },
      {
        id: "photo6",
        image: "/portfolio-photo-6.jpg",
        title: "Product Launch",
        description: "Tech company product unveiling",
        likes: 76,
        comments: 9,
      },
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        avatar: "/review-avatar-1.jpg",
        date: "May 15, 2023",
        rating: 5,
        comment:
          "Absolutely amazing! They captured our wedding day perfectly. The photos are stunning and they were so professional throughout the entire process.",
      },
      {
        name: "Michael Chen",
        avatar: "/review-avatar-2.jpg",
        date: "April 3, 2023",
        rating: 5,
        comment:
          "We hired Elegant Events for our corporate gala and they exceeded our expectations. The team was unobtrusive yet managed to capture all the key moments.",
      },
      {
        name: "Jessica Williams",
        avatar: "/review-avatar-3.jpg",
        date: "March 22, 2023",
        rating: 4,
        comment:
          "Beautiful photos and great service. The only reason I'm not giving 5 stars is because it took a bit longer than expected to get our final album.",
      },
    ],
    faq: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 6-8 months in advance for weddings, and 2-3 months for other events to ensure availability.",
      },
      {
        question: "Do you travel for events?",
        answer:
          "Yes, we are available for travel throughout the US and internationally. Travel fees may apply depending on the location.",
      },
      {
        question: "How long until we receive our photos?",
        answer: "You'll receive a sneak peek within 1 week and your full gallery within 4-6 weeks after your event.",
      },
    ],
    contactInfo: {
      phone: "(212) 555-7890",
      email: "info@eleganteventsphoto.com",
      website: "www.eleganteventsphoto.com",
      instagram: "@eleganteventsphoto",
    },
    socialStats: {
      followers: 12500,
      following: 850,
      posts: 432,
    },
  },
  {
    id: "delicious-delights-catering",
    name: "Delicious Delights Catering",
    category: "Catering",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviewCount: 98,
    image: "/vendor-catering.jpg",
    coverImage: "/vendor-catering-cover.jpg",
    featured: true,
    description: "Exquisite cuisine tailored to your event's unique style and dietary needs.",
    priceRange: "$$",
    minPrice: 1800,
    fullDescription:
      "Delicious Delights Catering brings culinary excellence to your special events. Our team of experienced chefs creates custom menus that reflect your personal taste and event theme. We source the freshest local ingredients to prepare dishes that will impress your guests and create memorable dining experiences. From intimate gatherings to large-scale events, we handle everything from preparation to service with professionalism and attention to detail.",
    services: [
      "Wedding Catering",
      "Corporate Events",
      "Cocktail Receptions",
      "Buffet Service",
      "Plated Dinners",
      "Food Stations",
      "Dessert Tables",
      "Bar Service",
    ],
    packages: [
      {
        name: "Silver Package",
        price: "$45 per person",
        description: "Buffet service with 2 entrées, 3 sides, salad, bread, non-alcoholic beverages",
      },
      {
        name: "Gold Package",
        price: "$65 per person",
        description:
          "Plated service with 3 entrée options, 4 sides, appetizers, salad, bread, dessert, non-alcoholic beverages",
      },
      {
        name: "Platinum Package",
        price: "$85 per person",
        description:
          "Full-service catering with passed hors d'oeuvres, 3 entrée options, premium sides, dessert station, full bar service",
      },
    ],
    portfolio: [
      {
        id: "food1",
        image: "/portfolio-food-1.jpg",
        title: "Wedding Reception",
        description: "Elegant plated dinner for 150 guests",
        likes: 92,
        comments: 14,
      },
      {
        id: "food2",
        image: "/portfolio-food-2.jpg",
        title: "Corporate Lunch",
        description: "Executive buffet for tech company",
        likes: 78,
        comments: 9,
      },
      {
        id: "food3",
        image: "/portfolio-food-3.jpg",
        title: "Dessert Station",
        description: "Custom dessert display for anniversary",
        likes: 105,
        comments: 17,
      },
      {
        id: "food4",
        image: "/portfolio-food-4.jpg",
        title: "Cocktail Hour",
        description: "Passed appetizers and signature drinks",
        likes: 67,
        comments: 8,
      },
      {
        id: "food5",
        image: "/portfolio-food-5.jpg",
        title: "Holiday Party",
        description: "Seasonal menu for corporate celebration",
        likes: 83,
        comments: 11,
      },
      {
        id: "food6",
        image: "/portfolio-food-6.jpg",
        title: "Brunch Event",
        description: "Morning gathering with breakfast stations",
        likes: 71,
        comments: 9,
      },
    ],
    reviews: [
      {
        name: "Robert Garcia",
        avatar: "/review-avatar-4.jpg",
        date: "June 10, 2023",
        rating: 5,
        comment:
          "The food was absolutely incredible! Our wedding guests are still talking about it months later. The service staff was professional and attentive.",
      },
      {
        name: "Amanda Lee",
        avatar: "/review-avatar-5.jpg",
        date: "May 22, 2023",
        rating: 5,
        comment:
          "Delicious Delights catered our corporate event and they were fantastic. The food was delicious and they accommodated all our dietary restrictions.",
      },
      {
        name: "David Thompson",
        avatar: "/review-avatar-6.jpg",
        date: "April 15, 2023",
        rating: 4,
        comment:
          "Great food and service. Would have given 5 stars but they were a bit late in setting up. Food quality made up for it though!",
      },
    ],
    faq: [
      {
        question: "Do you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please let us know in advance.",
      },
      {
        question: "Do you provide tastings?",
        answer:
          "Yes, we offer tastings for weddings and large events. Tastings are complimentary for confirmed bookings.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We require a 50% deposit to secure your date. Cancellations made 30+ days before the event receive a full deposit refund, 15-29 days receive 50%, and less than 15 days are non-refundable.",
      },
    ],
    contactInfo: {
      phone: "(310) 555-1234",
      email: "info@deliciousdelightscatering.com",
      website: "www.deliciousdelightscatering.com",
      instagram: "@deliciousdelightscatering",
    },
    socialStats: {
      followers: 9800,
      following: 650,
      posts: 378,
    },
  },
  // Other vendors data would continue here...
]

export default function VendorProfilePage({ params }: { params: { id: string } }) {
  // Find the vendor by ID
  const vendor = vendors.find((v) => v.id === params.id)
  
  const [activePortfolioItem, setActivePortfolioItem] = useState(vendor?.portfolio[0]?.id || "")
  const [isLiked, setIsLiked] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [portfolioComments, setPortfolioComments] = useState<Record<string, Array<{id: string, user: string, avatar: string, text: string, timestamp: string, likes: number}>>>({
    photo1: [
      {
        id: "c1",
        user: "Emily Johnson",
        avatar: "/comment-avatar-1.jpg",
        text: "This is absolutely stunning! Love the lighting and composition.",
        timestamp: "2 days ago",
        likes: 12
      },
      {
        id: "c2",
        user: "Mark Wilson",
        avatar: "/comment-avatar-2.jpg",
        text: "Beautiful work as always! The colors are amazing.",
        timestamp: "1 day ago",
        likes: 8
      }
    ],
    photo2: [
      {
        id: "c3",
        user: "Jennifer Lee",
        avatar: "/comment-avatar-3.jpg",
        text: "What camera did you use for this shot? The detail is incredible!",
        timestamp: "3 days ago",
        likes: 5
      }
    ]
  })
  
  // If vendor not found, you could redirect or show an error
  if (!vendor) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">Vendor not found</h1>
        <p className="mt-4">The vendor you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link href="/vendors">Back to Vendors</Link>
        </Button>
      </div>
    )
  }
  
  const handleAddComment = () => {
    if (!newComment.trim() || !activePortfolioItem) return
    
    const newCommentObj = {
      id: `c${Date.now()}`,
      user: "You",
      avatar: "/your-avatar.jpg",
      text: newComment,
      timestamp: "Just now",
      likes: 0
    }
    
    setPortfolioComments(prev => {
      const updatedComments = { ...prev }
      if (!updatedComments[activePortfolioItem]) {
        updatedComments[activePortfolioItem] = []
      }
      updatedComments[activePortfolioItem] = [
        newCommentObj,
        ...updatedComments[activePortfolioItem]
      ]
      return updatedComments
    })
    
    setNewComment("")
  }
  
  const activePortfolioImage = vendor.portfolio.find(item => item.id === activePortfolioItem)

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] dark:bg-[#121212]">
      <SiteHeader />

      <main className="flex-1">
        {/* Back button */}
        <div className="container px-4 py-4 md:px-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/vendors">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Vendors
            </Link>
          </Button>
        </div>

        {/* Hero section with cover image */}
        <section className="w-full bg-gradient-to-br from-teal-500/10 to-emerald-500/10 dark:from-teal-900/20 dark:to-emerald-900/20">
          <div className="container px-4 md:px-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
              <Image
                src={vendor.coverImage || vendor.image}
                alt={vendor.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-teal-500">{vendor.category}</Badge>
                  <Badge variant="outline" className="text-white border-white">
                    {vendor.priceRange}
                  </Badge>
                </div>
                <h1 className="mt-2 text-3xl font-bold md:text-4xl">{vendor.name}</h1>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-lg font-medium">{vendor.rating}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <span>{vendor.reviewCount} reviews</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {vendor.location}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 flex space-x-2">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="rounded-full"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  Save
                </Button>
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vendor stats */}
        <section className="w-full py-4 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center space-x-8 md:space-x-16">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{vendor.socialStats.posts}</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{vendor.socialStats.followers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{vendor.socialStats.following.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main content with tabs */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
              {/* Left column - Main content */}
              <div>
                <Tabs defaultValue="portfolio">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="packages">Packages</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  
                  {/* Portfolio Tab - Social Media Style */}
                  <TabsContent value="portfolio" className="pt-6">
                    <div className="grid grid-cols-1 gap-6">
                      {/* Featured portfolio item */}
                      {activePortfolioImage && (
                        <Card className="overflow-hidden">
                          <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                              src={activePortfolioImage.image || "/placeholder.svg"}
                              alt={activePortfolioImage.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-2">
                                <Avatar>
                                  <AvatarImage src="/vendor-avatar.jpg" alt={vendor.name} />
                                  <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">{vendor.name}</p>
                                  <p className="text-xs text-muted-foreground">{vendor.location}</p>
                                </div>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">More options</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Save</DropdownMenuItem>
                                  <DropdownMenuItem>Share</DropdownMenuItem>
                                  <DropdownMenuItem>Report</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{activePortfolioImage.title}</h3>
                              <p className="text-sm text-muted-foreground">{activePortfolioImage.description}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-4">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="flex items-center gap-1 px-2"
                                  onClick={() => {
                                    // Toggle like on the active portfolio item
                                  }}
                                >
                                  <Heart className="h-4 w-4" />
                                  <span>{activePortfolioImage.likes}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>{activePortfolioImage.comments}</span>
                                </Button>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            {/* Comments section */}
                            <div className="mt-4 pt-4 border-t">
                              <div className="flex items-center gap-2 mb-4">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/your-avatar.jpg" alt="Your Avatar" />
                                  <AvatarFallback>YA</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 flex gap-2">
                                  <Textarea
                                    placeholder="Add a comment..."
                                    className="min-h-0 h-9 py-2 resize-none"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault()
                                        handleAddComment()
                                      }
                                    }}
                                  />
                                  <Button 
                                    size="sm" 
                                    className="h-9 bg-teal-500 hover:bg-teal-600"
                                    onClick={handleAddComment}
                                    disabled={!newComment.trim()}
                                  >
                                    <Send className="h-4 w-4" />
                                    <span className="sr-only">Send</span>
                                  </Button>
                                </div>
                              </div>
                              
                              {/* Comment list */}
                              <div className="space-y-4">
                                {portfolioComments[activePortfolioItem]?.map((comment) => (
                                  <div key={comment.id} className="flex gap-2">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.user} />
                                      <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="bg-muted/50 rounded-lg p-2">
                                        <div className="flex items-center justify-between">
                                          <p className="text-sm font-medium text-gray-900 dark:text-white">{comment.user}</p>
                                          <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                                        </div>
                                        <p className="text-sm">{comment.text}</p>
                                      </div>
                                      <div className="flex items-center gap-4 mt-1 ml-2">
                                        <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                                          <ThumbsUp className="h-3 w-3" />
                                          <span>{comment.likes}</span>
                                        </button>
                                        <button className="text-xs text-muted-foreground hover:text-foreground">
                                          Reply
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                      
                      {/* Portfolio grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {vendor.portfolio.map((item) => (
                          <div 
                            key={item.id} 
                            className={`aspect-square overflow-hidden rounded-md cursor-pointer ${
                              activePortfolioItem === item.id ? 'ring-2 ring-teal-500' : ''
                            }`}
                            onClick={() => setActivePortfolioItem(item.id)}
                          >
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={300}
                              className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* About Tab */}
                  <TabsContent value="about" className="space-y-6 pt-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About {vendor.name}</h2>
                      <p className="mt-4 text-muted-foreground">{vendor.fullDescription}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Services Offered</h3>
                      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {vendor.services.map((service, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-teal-500" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
                      <div className="mt-4 space-y-4">
                        {vendor.faq.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-medium text-gray-900 dark:text-white">{item.question}</h4>
                            <p className="text-muted-foreground">{item.answer}</p>
                            {index < vendor.faq.length - 1 && <Separator className="mt-4" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Packages Tab */}
                  <TabsContent value="packages" className="pt-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Packages & Pricing</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                      {vendor.packages.map((pkg, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-1">
                            <CardHeader className="bg-white dark:bg-[#1a1a1a] pb-2">
                              <CardTitle className="text-gray-900 dark:text-white">{pkg.name}</CardTitle>
                              <CardDescription>
                                <span className="text-xl font-bold text-teal-600 dark:text-teal-400">{pkg.price}</span>
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent className="p-4">
                            <p className="text-muted-foreground">{pkg.description}</p>
                          </CardContent>
                          <CardFooter className="bg-muted/30 p-4">
                            <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                              Select Package
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Reviews Tab */}
                  <TabsContent value="reviews" className="pt-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reviews</h2>
                      <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                        Write a Review
                      </Button>
                    </div>
                    
                    <div className="mt-6 space-y-6">
                      {vendor.reviews.map((review, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">{review.name}</h4>
                                <p className="text-sm text-muted-foreground">{review.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                          {index < vendor.reviews.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Right column - Contact and booking */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Book this Vendor</CardTitle>
                    <CardDescription>Check availability and request a quote</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Check your date</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Select Date
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Clock className="mr-2 h-4 w-4" />
                        Select Time
                      </Button>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                      Request a Quote
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">Phone:</span>
                      <span>{vendor.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                      <span>{vendor.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">Website:</span>
                      <Link href="#" className="text-teal-600 dark:text-teal-400 hover:underline">
                        {vendor.contactInfo.website}
                      </Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">Instagram:</span>
                      <Link href="#" className="text-teal-600 dark:text-teal-400 hover:underline">
                        {vendor.contactInfo.instagram}
                      </Link>
                    </div>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message Vendor
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">

\
