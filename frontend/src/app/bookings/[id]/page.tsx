// /bookings/[id]/page.tsx
"use client"

import BookingForm from "@/components/reusable/BookingForm"
import { useParams } from "next/navigation"

const NewBooking = () => {
  const { id } = useParams()
  const id_num = typeof id === "string" ? parseInt(id, 10) : NaN
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-20 sm:px-20 gap-y-4 w-full">
        <BookingForm id={id_num} />
      </div>
    </>
  )
}

export default NewBooking
