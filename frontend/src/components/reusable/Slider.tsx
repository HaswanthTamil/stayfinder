// /components/reusable/Slider.tsx

import HotelCard from "./HotelCard"
import { Hotel } from "../../../types/hotel"

const Slider = ({ hotels, title }: { hotels: Hotel[]; title: string }) => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 shadow-lg rounded-lg w-full p-2 mb-2">
        <h1 className="font-semibold text-lg hover:translate-x-1 transition-all duration-200 ease-in-out cursor-pointer w-fit shadow-md rounded-lg p-1 bg-white mb-1">
          {`${title} >`}
        </h1>
        <div className="flex flex-row gap-4 overflow-x-scroll p-2">
          {hotels.map((hotel) => (
            <HotelCard hotel={hotel} key={hotel.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Slider
