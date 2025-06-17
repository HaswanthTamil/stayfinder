"use client"

import { useEffect, useState } from "react"
import SearchBar from "@/components/reusable/SearchBar"
import HotelCard from "@/components/reusable/HotelCard"
import { Hotel } from "../../../types/hotel"

const Explore = () => {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [query, setQuery] = useState("")
  const [filtered, setFiltered] = useState<Hotel[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/api/hotels/")
      const data = await res.json()
      setHotels(data)
      setFiltered(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const q = query.toLowerCase()
    const filtered = hotels.filter((h) =>
      [h.title, h.location, h.tags].some((f) => f.toLowerCase().includes(q))
    )
    setFiltered(filtered)
  }, [query, hotels])

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-20 sm:px-20 gap-y-4 w-full">
      <SearchBar value={query} onChange={setQuery} />
      <div className="bg-gray-50 py-4 lg:px-4 rounded-lg shadow-md w-full my-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((hotel) => (
            <div key={hotel.id} className="flex justify-center w-full py-1">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore
