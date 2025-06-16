// /components/nonreusable/Header.tsx

import { User2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <div className="fixed flex items-center justify-between top-0 left-0 right-0 bg-white py-2 px-2 sm:px-4">
        <div className="flex flex-row items-center gap-2 sm:gap-4">
          <Image
            className="rounded-full"
            src="/logo.png"
            alt="Stayfinder"
            width={50}
            height={50}
          />
          <Image
            src="/stayfinder.png"
            alt="Stayfinder"
            width={100}
            height={10}
            className="-mb-1.5"
          />
        </div>
        <div>
          <Link
            href="/profile"
            className="flex items-center p-2 rounded-full shadow-md hover:bg-gray-200 hover:scale-95 transition-colors duration-200 ease-in-out"
          >
            <User2 />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
