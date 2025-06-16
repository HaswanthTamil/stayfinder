// /app/page.tsx

import HotelCard from "@/components/reusable/HotelCard"

export default function Home() {
  return (
    <>
      <div className="flex flex-col py-20 px-2 items-center min-h-screen bg-gray-100 w-full">
        <HotelCard />
      </div>
    </>
  )
}
