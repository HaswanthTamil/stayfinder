"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Hotel } from "../../../types/hotel"

const DetailSlider = ({ hotel_id }: { hotel_id: number }) => {
  const [index, setIndex] = useState(0)
  const [hotel, setHotel] = useState<Hotel>()
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/api/hotels/${hotel_id}/`)
      const data = await res.json()
      setHotel(data)
    }
    fetchData()
  }, [hotel_id])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // tailwind md = 768px
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const images = hotel?.image_urls || []

  const totalSlides = isMobile ? images.length : Math.ceil(images.length / 2)

  const next = () => setIndex((index + 1) % totalSlides)
  const prev = () => setIndex((index - 1 + totalSlides) % totalSlides)

  // Get current two images (for desktop/tablet)
  const currentImages = isMobile
    ? [images[index]]
    : [images[index * 2], images[index * 2 + 1]].filter(Boolean)

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slider */}
      <div className="overflow-hidden rounded-xl flex gap-2">
        {currentImages.length > 0 ? (
          currentImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`slide ${index}-${i}`}
              width={500}
              height={320}
              className="w-full h-80 object-cover transition-all duration-500 rounded-xl"
            />
          ))
        ) : (
          <div className="w-full h-80 bg-gray-200 animate-pulse rounded-xl" />
        )}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl bg-black/30 rounded-full px-2"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl bg-black/30 rounded-full px-2"
      >
        ›
      </button>

      {/* Dots like Instagram */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default DetailSlider
