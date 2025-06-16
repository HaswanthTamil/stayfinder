// /components/reusable/HotelCard.tsx

import Image from "next/image"

type Hotel = {
  image_urls: string[]
  title: string
  location: string
  price_per_night: number
}

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className="flex flex-col items-center w-fit rounded-2xl shadow-md bg-white">
      <div className="w-50 h-50 overflow-hidden rounded-2xl">
        <Image
          src={hotel.image_urls[0]}
          alt={hotel.title}
          className="w-full h-full object-cover"
          width={50}
          height={50}
        />
      </div>
      <div className="p-3 w-50 overflow-x-hidden">
        <h2 className="text-md font-semibold">{hotel.title}</h2>
        <p className="text-sm text-gray-600">{hotel.location}</p>
        <p className="text-sm font-medium mt-1">
          €{hotel.price_per_night} / night
        </p>
      </div>
    </div>
  )
}

export default HotelCard
