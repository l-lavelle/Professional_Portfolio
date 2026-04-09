import { Card } from "flowbite-react";
import CustomBadges from "../../components/customBadges";
import CalendarDate from "../../components/calendarDate";
import type { Blog } from "../../types/custom";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, description, image, imageAlt, date, badges } = blog;
  return (
    <Card className="blog-card xs:w-[170px] sm:max-w-sm bg-primary">
      <div className="flex flex-col p-0 space-y-2">
        <div className="pt-3 px-3">
          <h5 className="text-2xl font-bold tracking-tight text-light-black dark:text-white">
            {title}
          </h5>
          <CalendarDate date={date} />
          <p className="font-normal text-light-black dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="blog-wrapper-img">
          <img
            className="max-h-50 object-cover rounded-3xl"
            src={image}
            alt={imageAlt}
          />
          <div className="desktop-badge-wrapper">
            <CustomBadges badges={badges.slice(0, 3)} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
