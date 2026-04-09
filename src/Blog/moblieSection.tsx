import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import type { Blog, BlogFocus } from "../types/custom";
import { truncateText } from "../functions";
import BlogPageCard from "./card";

const BlogMoblieSection = ({ data }: { data: Blog[] }) => {
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
      <BlogPageCard
        title={"No Blogs Found"}
        image={"/LinkedIn_logo.png"}
        textNode={
          <div className="pb-5">Try different search terms or categories</div>
        }
      />
    );
  }

  return (
    <div className="space-y-3 mb-2">
      {data.map(({ id, title, description, image, badges, date }, index) => (
        <BlogPageCard
          key={`${title} ${index}`}
          title={title}
          image={image}
          badges={badges}
          date={date}
          textNode={
            <>
              <p>
                {isOpen(id) ? description : truncateText(description)}{" "}
                {isOpen(id) ? (
                  <ChevronUpIcon
                    className="w-6 h-5 cursor-pointer"
                    onClick={() => updateCardExpanded(id)}
                  />
                ) : (
                  <ChevronDownIcon
                    className="w-6 h-5 cursor-pointer inline align-middle"
                    onClick={() => updateCardExpanded(id)}
                  />
                )}
              </p>
            </>
          }
        />
      ))}
    </div>
  );
};

export default BlogMoblieSection;
