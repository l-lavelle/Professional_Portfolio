import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import type { BlogData, BlogFocus } from "../types/custom";
import { truncateText } from "../functions";
import BlogPageCard from "./card";

const MoblieSection = ({ data }: { data: BlogData[] }) => {
  const [open, setOpen] = useState<BlogFocus[]>([]);

  const isOpen = (id: number) =>
    !!open.find(({ dataId }) => dataId === id)?.open;

  const updateCardExpanded = (id: number) => {
    const updatedOpen = [...open];
    const openIndex = updatedOpen.findIndex(({ dataId }) => dataId === id);
    if (openIndex !== -1) {
      updatedOpen[openIndex].open = updatedOpen[openIndex].open ? false : true;
      setOpen(updatedOpen);
    } else {
      setOpen((prev) => [...prev, { dataId: id, open: true }]);
    }
  };

  if (data.length === 0) {
    return (
      <div className="md:hidden">
        <BlogPageCard
          title={"No Blogs Found"}
          img={"/LinkedIn_logo.png"}
          badgeArray={[]}
          textNode={"Try different search terms"}
        />
      </div>
    );
  }

  return (
    <div className="md:hidden space-y-3 mb-2">
      {data.map(({ id, title, text, img, badges }, index) => (
        <BlogPageCard
          key={`${title} ${index}`}
          title={title}
          img={img}
          badgeArray={badges}
          textNode={
            <>
              <p>{isOpen(id) ? text : truncateText(text)}</p>
              {isOpen(id) ? (
                <ChevronUpIcon
                  className="w-6 h-6 justify-self-center mb-2 cursor-pointer"
                  onClick={() => updateCardExpanded(id)}
                />
              ) : (
                <ChevronDownIcon
                  className="w-6 h-6 justify-self-center mb-2 cursor-pointer"
                  onClick={() => updateCardExpanded(id)}
                />
              )}
            </>
          }
        />
      ))}
    </div>
  );
};

export default MoblieSection;
