"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Wrist Connect has transformed how our staff communicates. Response times have decreased by 58% and guest satisfaction scores have increased dramatically. The ROI was evident within just 6 months of implementation.",
      author: "Sarah Johnson",
      role: "General Manager",
      hotel: "Grand Plaza Hotel",
      location: "New York, NY",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The emergency templates feature alone has made this system invaluable. During a recent power outage, we were able to coordinate our staff efficiently and ensure guest safety. Our team now feels more confident in handling any situation.",
      author: "Michael Chen",
      role: "Operations Director",
      hotel: "Seaside Resort & Spa",
      location: "Miami, FL",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Our housekeeping team is now 35% more efficient thanks to the task management and location tracking features. The vibration alerts ensure our staff never miss important notifications even in noisy environments.",
      author: "Elena Rodriguez",
      role: "Executive Housekeeper",
      hotel: "Metropolitan Suites",
      location: "Chicago, IL",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-12">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from hotels that have transformed their operations with Wrist Connect
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-xl bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                    <img
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                    <div className="text-gray-600 text-[0.8rem]">{testimonials[activeIndex].role}</div>
                    <div className="text-teal-600 font-medium text-[0.8rem]">{testimonials[activeIndex].hotel}</div>
                    <div className="text-gray-500 text-xs">{testimonials[activeIndex].location}</div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <blockquote className="text-xl italic text-gray-700 relative">
                    <span className="absolute -tosm:p-2 p-6 -left-6 text-6xl text-teal-200">"</span>
                    {testimonials[activeIndex].quote}
                    <span className="absolute -bottom-10 -right-6 text-6xl text-teal-200">"</span>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full shadow-md">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 p-0 rounded-full ${index === activeIndex ? "bg-teal-600" : "bg-gray-300"}`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full shadow-md">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

