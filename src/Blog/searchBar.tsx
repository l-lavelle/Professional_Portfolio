import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { GlobalContext } from "../globalContext";
import { useContext } from "react";

const CustomSearchBar = ({ categories }: { categories: string[] }) => {
  const { setQuery, setTag } = useContext(GlobalContext);

  return (
    <div className="mb-3">
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-dark-black">
          <div className="grid shrink-0 grid-cols-1">
            <select
              id="blog-category"
              name="blog-category"
              aria-label="Blog Category"
              className="col-start-1 row-start-1 w-full text-base text-off-white placeholder:text-gray-400 sm:text-sm/6"
              onChange={(e) => {
                setTag(e.target.value);
              }}
            >
              {categories.map((category) => (
                <option>{category}</option>
              ))}
            </select>
          </div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            id="price"
            name="price"
            type="text"
            placeholder="Search..."
            className="block min-w-0 grow py-1.5 pr-3 pl-3 text-base text-off-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
          />
          <MagnifyingGlassIcon className="shrink-0 text-base text-gray-300 select-none sm:text-sm/6 mr-2 w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CustomSearchBar;
