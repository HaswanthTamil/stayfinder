// /explore/[id]/page.tsx
"use client"

import Details from "@/components/reusable/Details"
import DetailSlider from "@/components/reusable/DetailSlider"
import { useParams } from "next/navigation"

const ExplorePage = () => {
  const { id } = useParams()
  const id_num = typeof id === "string" ? parseInt(id, 10) : NaN
  return (
    <>
      <div className="bg-gray-100 py-20 px-2 sm:px-20 items-center flex flex-col w-full min-h-screen">
        <div className="bg-gray-50 w-full items-center flex flex-col rounded-lg shadow-md p-4">
          <DetailSlider hotel_id={id_num} />
          <Details id={id_num} />
        </div>
      </div>
    </>
  )
}

export default ExplorePage
