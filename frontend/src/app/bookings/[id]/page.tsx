// /bookings/[id]/page.tsx

import BookingForm from "@/components/reusable/BookingForm"

const NewBooking = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-20 sm:px-20 gap-y-4 w-full">
        <BookingForm id={params.id} />
      </div>
    </>
  )
}

export default NewBooking
