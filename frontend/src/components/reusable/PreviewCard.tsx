// /components/reusable/PreviewCard.tsx
"use client"

import Image from "next/image"
import { Hotel } from "../../../types/hotel"
import { useRouter } from "next/navigation"

const PreviewCard = ({ hotel }: { hotel: Hotel }) => {
  const router = useRouter()
  return (
    <>
      <div
        onClick={() => {
          router.push(`/explore/${hotel.id}/`)
        }}
        className="flex flex-row justify-between gap-2 w-full bg-gray-50 shadow-lg rounded-lg p-2"
      >
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{hotel.title}</span>
          <span>{hotel.location}</span>

          {hotel.is_booked ? (
            <>
              <span>
                {hotel.dates[0]} to {hotel.dates[1]}
              </span>
              <button
                className="bg-black text-white hover:opacity-70 font-bold rounded-full px-4 py-2 mx-auto cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  router.push(`/explore/${hotel.id}/`)
                }}
              >
                Cancel booking
              </button>
            </>
          ) : (
            <button
              className="bg-black text-white hover:opacity-70 font-bold rounded-full py-2 px-4 mx-auto cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                router.push(`/bookings/${hotel.id}/`)
              }}
            >
              Book now!
            </button>
          )}
        </div>
        <div>
          <Image
            src={hotel.image_urls[1]}
            alt={hotel.title}
            width={180}
            height={100}
            className="shadow-md rounded-lg"
          />
        </div>
      </div>
    </>
  )
}

export default PreviewCard
