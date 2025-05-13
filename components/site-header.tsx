"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/vendors/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
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
              href="/#features"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-foreground",
                pathname === "/#features" ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Features
            </Link>
            <Link
              href="/vendors"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-foreground",
                pathname === "/vendors" || pathname.startsWith("/vendors/")
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              Vendors
            </Link>
            <Link
              href="/#pricing"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-foreground",
                pathname === "/#pricing" ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="relative w-full max-w-sm md:w-auto">
              <Input
                type="search"
                placeholder="Search vendors..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </form>
          ) : (
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <nav className="hidden md:flex items-center space-x-2">
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
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search vendors..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <nav className="grid gap-2">
              <Link
                href="/#features"
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/vendors"
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vendors
              </Link>
              <Link
                href="/#pricing"
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                Log in
              </Button>
              <Button
                className="w-full justify-start bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
                size="sm"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
