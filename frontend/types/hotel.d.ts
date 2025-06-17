// /types/hotel.d.ts

export type Hotel = {
  id: number
  title: string
  description: string
  host: string
  location: string
  price_per_night: number
  num_beds: number
  is_booked: boolean
  is_liked: boolean
  dates: string[]
  image_urls: string[]
  tags: string
}
