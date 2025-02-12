"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const slides = [
  {
    image: "/tech3.jpeg",
    title: "Industry Outlooks",
    subtitle: "Discover the trends driving transformation this year.",
    year: "2025",
  },
  {
    image: "hero2.avif",
    title: "The ASB experience",
    subtitle: "End-to-end services that transform your business.",
    year: "2025",
  },
  {
    image: "hero3.webp",
    title: "The ASB experience",
    subtitle: "End-to-end services that transform your business.",
    year: "2025",
  },
  {
    image: "hero4.jpg",
    title: "Building Stronger Customer Connections",
    subtitle: "End-to-end services that transform your business.",
    year: "2025",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                {slide.title}
                <div className="inline-block relative ml-4">
                  <span className="relative z-10 text-[#e4ff1a]">{slide.year}</span>
                  <div className="absolute inset-0 border border-[#e4ff1a] -rotate-2" />
                </div>
              </h1>
              <p className="text-xl text-white/90">{slide.subtitle}</p>
              <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-8 py-6">
                Explore outlooks
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" size="icon" className="text-white" onClick={prevSlide}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white" onClick={nextSlide}>
          <ChevronRight className="h-5 w-5" />
        </Button>
        <div className="w-64 h-1 bg-white/20 rounded-full">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

