import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, CreditCard, Search, Star, Smartphone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EventSuggestionForm } from "@/components/event-suggestion-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] dark:bg-[#121212]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-[#121212]/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#121212]/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                EventProLink
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="/vendors"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Vendors
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
              >
                Sign up
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white to-teal-50 dark:from-[#121212] dark:to-[#1a2e35]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                    Connect Event Professionals with Clients
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one platform for event vendors to showcase their work, get discovered, and grow their
                    business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                  >
                    Join as a Vendor <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/vendors">Find Vendors</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[350px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image src="/event-app-mockup.png" alt="EventProLink app mockup" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-[#151515]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                  Find Your Perfect Vendors
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
                  Tell us about your event and budget
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We'll suggest the perfect combination of vendors that match your vision and budget
                </p>
              </div>

              <div className="w-full max-w-3xl mt-8">
                <EventSuggestionForm />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50 dark:bg-[#131a1d]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
                  Everything You Need to Succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  EventProLink provides all the tools event professionals need to showcase their work, connect with
                  clients, and manage their business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                  <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Professional Profiles</h3>
                <p className="text-center text-muted-foreground">
                  Showcase your work with beautiful portfolios, pricing details, and client reviews.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-3">
                  <Search className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Search & Discovery</h3>
                <p className="text-center text-muted-foreground">
                  Clients can easily find you by filtering through type, location, and price range.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                  <Calendar className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Smart Booking</h3>
                <p className="text-center text-muted-foreground">
                  Manage your calendar, automate responses, and handle quote requests with ease.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-3">
                  <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Secure Payments</h3>
                <p className="text-center text-muted-foreground">
                  Handle deposits, contracts, and payment tracking all in one place.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                  <Star className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ratings & Reviews</h3>
                <p className="text-center text-muted-foreground">
                  Build trust with verified reviews from past clients to attract new business.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-3">
                  <Smartphone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mobile-First</h3>
                <p className="text-center text-muted-foreground">
                  Manage your business on the go with our easy-to-use mobile interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-[#151515]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
                  Loved by Vendors and Clients
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our users are saying about EventProLink.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-muted-foreground">
                    "EventProLink has transformed my photography business. I've gained new clients and streamlined my
                    booking process."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/testimonial-1.jpg"
                    alt="Maria Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Maria Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Event Photographer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-muted-foreground">
                    "Planning my wedding was so much easier with EventProLink. I found all my vendors in one place and
                    could compare them easily."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/testimonial-2.jpg"
                    alt="James Wilson"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">James Wilson</p>
                    <p className="text-xs text-muted-foreground">Client</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-muted-foreground">
                    "As a caterer, I've doubled my bookings since joining EventProLink. The platform handles all the
                    administrative work so I can focus on creating amazing food."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/testimonial-3.jpg"
                    alt="David Chen"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">David Chen</p>
                    <p className="text-xs text-muted-foreground">Event Caterer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50 dark:bg-[#131a1d]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Basic</h3>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-gray-900 dark:text-white">
                  $19<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Professional profile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Up to 20 portfolio items</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Basic booking tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>3% transaction fee</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border-2 border-teal-500 dark:border-teal-400 bg-white dark:bg-[#1a1a1a] p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-teal-500 dark:border-teal-400 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pro</h3>
                  <p className="text-muted-foreground">For established professionals</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-gray-900 dark:text-white">
                  $49<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Unlimited portfolio items</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Advanced booking tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>1.5% transaction fee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Priority search placement</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border bg-white dark:bg-[#1a1a1a] p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Business</h3>
                  <p className="text-muted-foreground">For teams and agencies</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-gray-900 dark:text-white">
                  $99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Multiple team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>1% transaction fee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-500 to-emerald-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Grow Your Event Business?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of event professionals already using EventProLink.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90">
                  Join as a Vendor <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link href="/vendors">Find Vendors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white dark:bg-[#121212] py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">EventProLink</h3>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Careers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Press
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Blog
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">For Vendors</h3>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                How It Works
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Success Stories
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Resources
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">For Clients</h3>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Find Vendors
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Planning Tools
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Event Ideas
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                FAQs
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Support</h3>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Help Center
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contact Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Subscribe</h3>
              <p className="text-sm text-muted-foreground">Get the latest news and updates from EventProLink.</p>
              <form className="mt-2 flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">© 2025 EventProLink. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
