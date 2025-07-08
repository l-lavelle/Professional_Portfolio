import { Card } from "flowbite-react";
import { CustomDivider } from "../globalComponents";
import { useState, type ReactNode } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import CustomBadges from "../Home/customBadges";
import type { BadgeArray, BlogData, BlogFocus } from "../types/custom";

export const truncateText = (text: string) => {
  return text.length > 150 ? text.substring(0, 150) : text;
};

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

  return (
    <div className="md:hidden space-y-3 mb-5">
      {data.map(({ id, title, text, img, badgeArray }) => (
        <BlogCard
          title={title}
          img={img}
          badgeArray={badgeArray}
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

export const BlogCard = ({
  title,
  img,
  badgeArray,
  textNode,
}: {
  title: string;
  img: string;
  badgeArray: BadgeArray[];
  textNode: ReactNode;
}) => {
  return (
    <Card className="bg-primary">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>

        <CustomDivider color={"light-black"} margin={"2"} />
        {textNode}

        <img
          className="max-h-30 w-full object-cover rounded-lg mr-5"
          src={img}
        />
        <div className="mt-2">
          <CustomBadges badgeArray={badgeArray} />
        </div>
      </div>
    </Card>
  );
};
