// /components/reusable/Details.tsx
"use client"

import { useEffect, useState } from "react"
import { Hotel } from "../../../types/hotel"
import { Heart } from "lucide-react"
import { useRouter } from "next/navigation"

const Details = ({ id }: { id: number }) => {
  const [hotel, setHotel] = useState<Hotel>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/api/hotels/${id}/`)
      const data = await res.json()
      setHotel(data)
    }
    fetchData()
  }, [id])

  const router = useRouter()

  const handleBook = () => {
    router.push(`/bookings/${id}/`)
  }

  return (
    <>
      <div className="flex flex-col py-4 w-full gap-y-4">
        <div className="flex flex-row justify-center gap-2">
          <div className="flex flex-col flex-grow rounded-xl bg-white p-2 shadow-lg">
            <h1 className="font-semibold text-lg">{hotel?.title}</h1>
            <h2 className=" text-md">{hotel?.location}</h2>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-xl bg-white p-2 shadow-lg w-fit">
            <div>
              <h1 className="font-semibold">€{hotel?.price_per_night}</h1>
              <h1>Beds: {hotel?.num_beds}</h1>
            </div>
            <div
              className={`p-2 rounded-full hover:bg-gray-200 hover:scale-95 transition-all duration-200 ease-in-out shadow-xl`}
            >
              <Heart
                className={`${
                  hotel?.is_liked ? "text-red-500 fill-red-500" : "text-black"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-2 shadow-lg rounded-xl">
          {hotel?.description}
        </div>
        <div className="flex flex-col items-center justify-center">
          {!hotel?.is_booked ? (
            <button
              className="py-2 px-5 bg-black text-white rounded-full hover:opacity-80 hover:scale-95 transition-all duration-200 ease-in-out shadow-lg font-semibold text-lg"
              onClick={handleBook}
            >
              Book now!
            </button>
          ) : (
            <>
              <button
                disabled
                className="py-2 px-5 bg-gray-400 text-white rounded-full cursor-not-allowed"
              >
                Already booked
              </button>
              <button className="font-semibold p-2 text-lg cursor-pointer hover:translate-x-1.5 hover:italic transition-all duration-200 ease-in-out">
                {"View booking details >"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Details
