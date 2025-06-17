// /explore/[id]/page.tsx

import Details from "@/components/reusable/Details"
import DetailSlider from "@/components/reusable/DetailSlider"

const ExplorePage = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <div className="bg-gray-100 py-20 px-2 sm:px-20 items-center flex flex-col w-full min-h-screen">
        <div className="bg-gray-50 w-full items-center flex flex-col rounded-lg shadow-md p-4">
          <DetailSlider hotel_id={params.id} />
          <Details id={params.id} />
        </div>
      </div>
    </>
  )
}

export default ExplorePage
