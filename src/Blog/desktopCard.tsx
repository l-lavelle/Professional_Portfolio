import { useState } from "react";
import type { BlogData } from "../types/custom";
import { CustomDivider } from "../components";
import CustomBadges from "../components/customBadges";
import { truncateText } from "../functions";
import BlogPageCard from "./card";

const DesktopCard = ({ data }: { data: BlogData[] }) => {
  console.log("data", data);
  const [selectedCard, setSelectedCard] = useState<BlogData | undefined>(
    data[0],
  );
  return (
    <div className="flex flex-row space-x-3 hidden md:flex">
      <div className="md:w-1/2 lg:w-1/3 bg-light-black rounded-md mx-3 p-4 mb-5 space-y-3 shadow-[3px_3px_4px_4px_var(--color-dark-black)] max-h-230 overflow-y-auto">
        {data.map((item) => (
          <div
            onClick={() => {
              setSelectedCard(item);
            }}
            className="cursor-pointer"
          >
            <BlogPageCard
              title={item.title}
              img={item.img}
              badgeArray={item.badges}
              textNode={
                <p className="mb-2">{`${truncateText(item.text)}...`}</p>
              }
            />
          </div>
        ))}
      </div>
      <div className="md:w-1/2 lg:w-2/3 bg-light-black rounded-md mx-3 p-5 mb-5 shadow-[3px_3px_4px_4px_var(--color-dark-black)] max-h-230 overflow-y-auto">
        <h3 className="text-2xl font-bold">
          {selectedCard?.title || "No Blogs Found"}
        </h3>
        <CustomDivider color={"dark-black"} margin={"2"} />
        <div className="flex flex-col items-center">
          <div className="max-w-200">
            <img
              className="max-h-90 w-full object-cover rounded-lg mr-5 my-3"
              src={selectedCard?.img || "/LinkedIn_logo.png"}
            />
            <p>{selectedCard?.text}</p>
            <div className="my-3">
              <CustomBadges badgeArray={selectedCard?.badgeArray || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCard;
