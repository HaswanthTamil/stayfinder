"use client"

import { useEffect, useState } from "react"
import Slider from "@/components/reusable/Slider"
import { Hotel } from "../../types/hotel"

const categories = [
  { label: "Explore Europe", keyword: "europe" },
  { label: "Hidden Gems of Asia", keyword: "asia" },
  { label: "Desert Delights", keyword: "desert" },
  { label: "Coastal Cabins", keyword: "coast" },
  { label: "Forest & Nature", keyword: "forest" },
  { label: "Urban Universe", keyword: "urban" },
]

export default function Home() {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/hotels/")
        const data = await res.json()
        setHotels(data)
      } catch (err) {
        console.error("Failed to fetch hotels:", err)
      }
    }

    fetchHotels()
  }, [])

  return (
    <div className="flex flex-col py-20 px-2 sm:px-20 items-center min-h-screen bg-gray-100 w-full gap-6">
      {categories.map(({ label, keyword }) => {
        const filtered = hotels.filter((hotel: Hotel) =>
          hotel.tags?.toLowerCase().includes(keyword)
        )

        return filtered.length > 0 ? (
          <Slider key={label} hotels={filtered} title={label} />
        ) : null
      })}
    </div>
  )
}
