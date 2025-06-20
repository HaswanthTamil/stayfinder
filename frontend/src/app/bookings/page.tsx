// /bookings/page.tsx

"use client"
import PreviewCard from "@/components/reusable/PreviewCard"
import { Hotel } from "../../../types/hotel"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const Booking = () => {
  const [bookedHotels, setBookedHotels] = useState<Hotel[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/api/hotels/")
      const data = await res.json()
      if (!data) return
      const filtered = data.filter((hotel: Hotel) => hotel.is_booked === true)
      setBookedHotels(filtered)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-20 px-2 sm:px-20 gap-y-4 w-full">
        {bookedHotels.length > 0 ? (
          bookedHotels.map((hotel) => (
            <PreviewCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <>
            <h1 className="font-semibold text-lg">No bookings yet.</h1>
            <button
              className="bg-black text-white hover:opacity-70 font-bold rounded-full py-2 px-4 mx-auto cursor-pointer"
              onClick={() => router.push("/explore")}
            >
              Explore hotels
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default Booking
