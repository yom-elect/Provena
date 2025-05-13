import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, Heart, MessageSquare, Share2, MoreHorizontal, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EventSuggestionForm } from "@/components/event-suggestion-form"

// Sample social feed data
const socialFeed = [
  {
    id: "post-1",
    vendorId: "elegant-events-photography",
    vendorName: "Elegant Events Photography",
    vendorAvatar: "/placeholder.svg?height=40&width=40",
    vendorCategory: "Photography",
    vendorLocation: "New York, NY",
    vendorRating: 4.9,
    postedAt: "2 hours ago",
    content:
      "Captured this magical moment at Sarah and Michael's wedding last weekend. The sunset created the perfect backdrop for their first dance as a married couple. #WeddingPhotography #SunsetMoments",
    image: "/placeholder.svg?height=600&width=800",
    likes: 342,
    comments: 28,
    shares: 15,
    isLiked: false,
    isSaved: true,
    commentsList: [
      {
        id: "comment-1",
        userName: "Jessica Williams",
        userAvatar: "/placeholder.svg?height=30&width=30",
        content: "Absolutely stunning! The lighting is perfect.",
        postedAt: "1 hour ago",
        likes: 12,
      },
      {
        id: "comment-2",
        userName: "Robert Chen",
        userAvatar: "/placeholder.svg?height=30&width=30",
        content: "You captured the moment beautifully. Great work as always!",
        postedAt: "45 minutes ago",
        likes: 8,
      },
    ],
  },
  {
    id: "post-2",
    vendorId: "delicious-delights-catering",
    vendorName: "Delicious Delights Catering",
    vendorAvatar: "/placeholder.svg?height=40&width=40",
    vendorCategory: "Catering",
    vendorLocation: "Los Angeles, CA",
    vendorRating: 4.8,
    postedAt: "5 hours ago",
    content:
      "Our newest creation: Mini avocado toast bites with microgreens and edible flowers. Perfect for your next brunch event or wedding cocktail hour! #EventCatering #GourmetFood",
    image: "/placeholder.svg?height=600&width=800",
    likes: 256,
    comments: 42,
    shares: 23,
    isLiked: true,
    isSaved: false,
    commentsList: [
      {
        id: "comment-3",
        userName: "Amanda Lee",
        userAvatar: "/placeholder.svg?height=30&width=30",
        content: "These look amazing! Would love to have these at my upcoming event.",
        postedAt: "3 hours ago",
        likes: 15,
      },
    ],
  },
  {
    id: "post-3",
    vendorId: "creative-decor-solutions",
    vendorName: "Creative Decor Solutions",
    vendorAvatar: "/placeholder.svg?height=40&width=40",
    vendorCategory: "Decoration",
    vendorLocation: "Chicago, IL",
    vendorRating: 4.7,
    postedAt: "1 day ago",
    content:
      "Transformed this blank canvas venue into a magical forest-themed wonderland for Emily and Jason's wedding. Swipe to see the before and after! #VenueTransformation #WeddingDecor",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    likes: 512,
    comments: 76,
    shares: 38,
    isLiked: false,
    isSaved: false,
    commentsList: [
      {
        id: "comment-4",
        userName: "David Thompson",
        userAvatar: "/placeholder.svg?height=30&width=30",
        content: "The transformation is incredible! Love the hanging lights.",
        postedAt: "20 hours ago",
        likes: 24,
      },
      {
        id: "comment-5",
        userName: "Sarah Johnson",
        userAvatar: "/placeholder.svg?height=30&width=30",
        content: "This is exactly what I've been looking for! Do you have availability in June?",
        postedAt: "18 hours ago",
        likes: 7,
      },
    ],
  },
  {
    id: "post-4",
    vendorId: "sweet-celebrations-bakery",
    vendorName: "Sweet Celebrations Bakery",
    vendorAvatar: "/placeholder.svg?height=40&width=40",
    vendorCategory: "Cakes & Desserts",
    vendorLocation: "Seattle, WA",
    vendorRating: 4.9,
    postedAt: "2 days ago",
    content:
      "Our latest wedding cake creation: four tiers of vanilla bean cake with raspberry filling, covered in hand-piped buttercream flowers. Congratulations to the happy couple! #WeddingCake #ButtercreamArt",
    image: "/placeholder.svg?height=600&width=800",
    likes: 423,
    comments: 51,
    shares: 29,
    isLiked: true,
    isSaved: true,
    commentsList: [
      {
        id: "comment-6",
        userName: "Michael Chen",
        userAvatar: "/placeholder.svg?height=30&width=30",
        content: "This cake was absolutely delicious! Thank you for making our day special.",
        postedAt: "1 day ago",
        likes: 32,
      },
    ],
  },
]

export default function SocialFeedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px]">
            {/* Main content - Social feed */}
            <div className="space-y-6">
              <Tabs defaultValue="for-you">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="for-you">For You</TabsTrigger>
                    <TabsTrigger value="following">Following</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                  </TabsList>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <TabsContent value="for-you" className="mt-6 space-y-8">
                  {socialFeed.map((post) => (
                    <div key={post.id} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                      {/* Post header */}
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={post.vendorAvatar || "/placeholder.svg"} alt={post.vendorName} />
                            <AvatarFallback>{post.vendorName.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <Link href={`/vendors/${post.vendorId}`} className="font-semibold hover:underline">
                                {post.vendorName}
                              </Link>
                              <Badge variant="outline" className="ml-2">
                                {post.vendorCategory}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="mr-1 h-3 w-3" />
                              {post.vendorLocation}
                              <span className="mx-1">•</span>
                              {post.postedAt}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center mr-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm font-medium">{post.vendorRating}</span>
                          </div>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Post content */}
                      <div className="px-4 pb-3">
                        <p className="mb-3">{post.content}</p>
                      </div>

                      {/* Post image(s) */}
                      {post.image && (
                        <div className="relative aspect-video w-full">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Post image"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {post.images && (
                        <div className="grid grid-cols-3 gap-1">
                          {post.images.map((image, index) => (
                            <div key={index} className="relative aspect-square w-full">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Post image ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Post actions */}
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className={post.isLiked ? "text-red-500" : ""}>
                            <ThumbsUp className="mr-1 h-4 w-4" />
                            <span>{post.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="mr-1 h-4 w-4" />
                            <span>{post.comments}</span>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="mr-1 h-4 w-4" />
                            <span>{post.shares}</span>
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className={post.isSaved ? "text-purple-500" : ""}>
                          <Heart className={`h-4 w-4 ${post.isSaved ? "fill-purple-500" : ""}`} />
                          <span className="ml-1">{post.isSaved ? "Saved" : "Save"}</span>
                        </Button>
                      </div>

                      {/* Comments section */}
                      {post.commentsList && post.commentsList.length > 0 && (
                        <div className="border-t px-4 py-3">
                          <h4 className="mb-2 text-sm font-medium">Comments</h4>
                          <div className="space-y-3">
                            {post.commentsList.map((comment) => (
                              <div key={comment.id} className="flex space-x-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={comment.userAvatar || "/placeholder.svg"} alt={comment.userName} />
                                  <AvatarFallback>{comment.userName.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="rounded-lg bg-muted p-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium">{comment.userName}</span>
                                      <span className="text-xs text-muted-foreground">{comment.postedAt}</span>
                                    </div>
                                    <p className="text-sm">{comment.content}</p>
                                  </div>
                                  <div className="mt-1 flex items-center space-x-2 text-xs text-muted-foreground">
                                    <button className="hover:text-foreground">Like</button>
                                    <span>•</span>
                                    <button className="hover:text-foreground">Reply</button>
                                    <span>•</span>
                                    <span>{comment.likes} likes</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>ME</AvatarFallback>
                            </Avatar>
                            <Input placeholder="Write a comment..." className="flex-1" />
                            <Button size="sm">Post</Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="following" className="mt-6">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h3 className="text-xl font-bold">Follow vendors to see their updates</h3>
                    <p className="mt-2 text-muted-foreground">
                      When you follow vendors, their latest work and updates will appear here
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href="/vendors">Discover Vendors</Link>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="trending" className="mt-6">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h3 className="text-xl font-bold">Trending content coming soon</h3>
                    <p className="mt-2 text-muted-foreground">
                      We're working on bringing you the most popular content from event vendors
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event suggestion form */}
              <div className="sticky top-20">
                <EventSuggestionForm />

                <div className="mt-6 rounded-lg border bg-card p-4">
                  <h3 className="font-semibold">Popular Categories</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="secondary">Photography</Badge>
                    <Badge variant="secondary">Catering</Badge>
                    <Badge variant="secondary">Venues</Badge>
                    <Badge variant="secondary">Decoration</Badge>
                    <Badge variant="secondary">Music</Badge>
                    <Badge variant="secondary">Cakes</Badge>
                    <Badge variant="secondary">Florists</Badge>
                    <Badge variant="secondary">Beauty</Badge>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border bg-card p-4">
                  <h3 className="font-semibold">Suggested Vendors</h3>
                  <div className="mt-3 space-y-3">
                    {socialFeed.slice(0, 3).map((post) => (
                      <div key={`suggest-${post.id}`} className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={post.vendorAvatar || "/placeholder.svg"} alt={post.vendorName} />
                          <AvatarFallback>{post.vendorName.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Link href={`/vendors/${post.vendorId}`} className="font-medium hover:underline">
                            {post.vendorName}
                          </Link>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Badge variant="outline" className="mr-1 text-xs">
                              {post.vendorCategory}
                            </Badge>
                            <Star className="ml-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="ml-0.5">{post.vendorRating}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Follow
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="link" size="sm" asChild>
                      <Link href="/vendors">View All Vendors</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
