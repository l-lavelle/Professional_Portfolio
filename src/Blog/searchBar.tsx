import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { QueryContext } from "./context";
import { useContext } from "react";

const CustomSearchBar = ({ categories }: { categories: string[] }) => {
  const { query, setQuery } = useContext(QueryContext);
  console.log("triel", query);
  return (
    <div className="mb-3">
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-dark-black">
          <div className="grid shrink-0 grid-cols-1 focus-within:relative pr-2">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-dark-black sm:text-sm/6"
            >
              {categories.map((category) => (
                <option>{category}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>

          <input
            onChange={(e) => setQuery(e.target.value)}
            id="price"
            name="price"
            type="text"
            placeholder="Search..."
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <MagnifyingGlassIcon className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 mr-2 w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CustomSearchBar;
