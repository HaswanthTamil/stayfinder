// /components/reusable/BookingForm.tsx
"use client"

import { useState, useEffect } from "react"
import { Hotel } from "../../../types/hotel"
import { useRouter } from "next/navigation"
import dayjs from "dayjs"

const BookingForm = ({ id }: { id: number }) => {
  const [hotel, setHotel] = useState<Hotel>()
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/api/hotels/${id}/`)
      const data = await res.json()
      setHotel(data)
    }
    fetchData()
  }, [id])

  const getNights = () => {
    if (!fromDate || !toDate) return 0
    const diff = dayjs(toDate).diff(dayjs(fromDate), "day")
    return diff > 0 ? diff : 0
  }

  const nights = getNights()
  const totalCost = hotel ? nights * hotel.price_per_night : 0

  const handlePay = () => {
    if (!fromDate || !toDate || nights === 0) {
      alert("Please select valid check-in and check-out dates!")
      return
    }

    alert(`Processing payment of €${totalCost} for ${nights} night(s)...`)

    setTimeout(() => {
      alert("Booking confirmed! 🎉")
      router.push("/")

      // set hotel.is_booked to true
      if (hotel) {
        hotel.is_booked = true
        fetch(`http://localhost:8000/api/hotels/${id}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hotel),
        })
      }
    }, 1000)
  }
  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{hotel?.title}</h1>
        <p className="text-gray-600">{hotel?.location}</p>
      </div>

      <div className="space-y-1">
        <p className="text-lg">
          <span className="font-medium">Price per night:</span> €
          {hotel?.price_per_night}
        </p>
        <p className="text-lg">
          <span className="font-medium">Beds:</span> {hotel?.num_beds}
        </p>
      </div>

      {/* Date Inputs */}
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium">From:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border px-4 py-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">To:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border px-4 py-2 rounded-md"
          />
        </div>
        {nights > 0 && (
          <p className="text-green-600 font-semibold">
            Booking for {nights} night{nights > 1 && "s"} — Total: €{totalCost}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 pt-2">
        <button
          onClick={handlePay}
          className="flex-1 bg-black text-white py-2 px-4 rounded-full hover:opacity-80 hover:scale-95 transition-all"
        >
          Pay €{totalCost}
        </button>
        <button
          onClick={handleCancel}
          className="flex-1 border border-gray-400 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-100 hover:scale-95 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default BookingForm
