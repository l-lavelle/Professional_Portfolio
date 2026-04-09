import { type ReactNode } from "react";
import CustomBadges from "../components/customBadges";
import type { Badges } from "../types/custom";
import CalendarDate from "../components/calendarDate";

// TODO: rename card and textNode
const BlogPageCard = ({
  title,
  image,
  badges,
  textNode,
  date,
}: {
  title: string;
  image: string;
  badges?: Badges[];
  textNode: ReactNode;
  date?: string;
}) => (
  <div className="bg-primary-light p-4 rounded-md">
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      {date && (
        <div className="mb-3">
          <CalendarDate date={date} />
        </div>
      )}

      <img
        className="max-h-55 w-full object-cover rounded-lg mr-5 mb-3"
        src={image}
      />

      {textNode}

      {badges && (
        <div className="mt-3">
          <CustomBadges badges={badges.slice(0, 4)} />
        </div>
      )}
    </div>
  </div>
);

export default BlogPageCard;
