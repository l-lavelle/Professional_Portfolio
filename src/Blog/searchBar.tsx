import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { GlobalContext } from "../globalContext";
import { useContext } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

const CustomSearchBar = ({ categories }: { categories: string[] }) => {
  const { setQuery, setTag, tag } = useContext(GlobalContext);

  return (
    <div className="my-4 md:mt-4 md:mb-0">
      <div className="flex items-center rounded-md bg-primary-light">
        <div className="grid shrink-0 grid-cols-1">
          <Dropdown
            label={tag}
            color="light"
            className="blog-category-select"
            placement="bottom-start"
            theme={{
              floating: {
                target: "pr-3 pl-4 py-2",
              },
            }}
          >
            {categories.map((category) => (
              <DropdownItem key={category} onClick={() => setTag(category)}>
                {category}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          id="blog-searchbar"
          name="blog-searchbar"
          type="text"
          placeholder="Search..."
          className="block min-w-0 grow py-1.5 pr-2 pl-2 text-base placeholder:text-gray-600 focus:outline-none sm:text-sm/6"
        />
        <MagnifyingGlassIcon className="shrink-0 text-base text-gray-600 select-none sm:text-sm/6 mr-2 w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default CustomSearchBar;
