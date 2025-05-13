"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function EventSuggestionForm() {
  const router = useRouter()
  const [eventDescription, setEventDescription] = useState("")
  const [budget, setBudget] = useState(5000)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // In a real app, we would send this data to the server
    // For now, we'll simulate a delay and redirect to the search results
    setTimeout(() => {
      const searchParams = new URLSearchParams({
        description: eventDescription,
        budget: budget.toString(),
      })
      router.push(`/vendors/suggestions?${searchParams.toString()}`)
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-white">Tell us about your event</CardTitle>
        <CardDescription>Describe your event and budget, and we'll suggest the perfect vendors for you</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="event-description">Event Description</Label>
            <Textarea
              id="event-description"
              placeholder="I'm planning a wedding for 100 guests in June with an outdoor ceremony and indoor reception..."
              className="min-h-[120px]"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="budget">Budget</Label>
              <span className="text-sm font-medium">${budget.toLocaleString()}</span>
            </div>
            <Slider
              id="budget"
              min={1000}
              max={50000}
              step={500}
              value={[budget]}
              onValueChange={(value) => setBudget(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$1,000</span>
              <span>$25,000</span>
              <span>$50,000</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
            disabled={loading}
          >
            {loading ? "Finding vendors..." : "Find Vendors"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
