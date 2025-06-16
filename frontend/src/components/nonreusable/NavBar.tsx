// /components/nonreusable/NavBar.tsx
"use client"

import { CalendarCheck2, Heart, Home, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Home", href: "/", icon: <Home /> },
  { label: "Explore", href: "/explore", icon: <Search /> },
  { label: "Bookings", href: "/bookings", icon: <CalendarCheck2 /> },
  { label: "Wishlist", href: "/wishlist", icon: <Heart /> },
]

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const breakpoint = 640 // Define your breakpoint for mobile view

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < breakpoint)
    checkWidth()

    window.addEventListener("resize", checkWidth)
    return () => window.removeEventListener("resize", checkWidth)
  }, [breakpoint])

  return (
    <>
      <div>
        <nav
          className={`flex fixed items-center rounded-2xl bg-gray-50 shadow-lg ${
            isMobile
              ? "flex-row bottom-0 left-1/2 -translate-x-1/2 gap-10 justify-center p-2 mb-2"
              : "flex-col mx-2 top-20 left-0 gap-5 px-3 py-4 "
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative rounded-full bg-white shadow-lg p-2 hover:bg-gray-200 hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer"
            >
              {item.icon}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap z-50">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default NavBar
