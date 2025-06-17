// /components/reusable/SearchBar.tsx

import { Search } from "lucide-react"

const SearchBar = ({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) => {
  return (
    <>
      <div className="fixed flex flex-row bg-gray-50 shadow-md p-2 rounded-full w-sm md:w-md">
        <div className="flex flex-row items-center rounded-full bg-white shadow-lg hover:bg-gray-200 hover:scale-95 transition-all duration-200 ease-in-out p-2">
          <Search />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for hotels, locations, or experiences"
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 pl-2"
        />
      </div>
    </>
  )
}

export default SearchBar
