import { Card } from "flowbite-react";
import { CustomDivider } from "../components";
import { type ReactNode } from "react";
import CustomBadges from "../components/customBadges";
import type { Badges } from "../types/custom";

const BlogPageCard = ({
  title,
  img,
  badgeArray,
  textNode,
}: {
  title: string;
  img: string;
  badgeArray: Badges[];
  textNode: ReactNode;
}) => {
  return (
    <Card className="bg-primary">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>

        <CustomDivider color={"light-black"} margin={"2"} />
        {textNode}

        <div className="blog-img-section">
          <img
            className="max-h-55 w-full object-cover rounded-lg mr-5"
            src={img}
          />
          <div className="blog-badge-wrapper">
            <CustomBadges badgeArray={badgeArray.slice(0, 4)} />
          </div>
        </div>
      </div>
    </Card>
  );
};
export default BlogPageCard;
