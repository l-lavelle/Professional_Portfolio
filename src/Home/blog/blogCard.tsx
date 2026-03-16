import { Card } from "flowbite-react";
import CustomBadges from "../../components/customBadges";

const BlogCard = ({
  title,
  description,
  badgeArray,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  badgeArray: { badgeTitle: string; badgeImage: string }[];
  image: string;
  imageAlt: string;
}) => (
  <Card className="blog-card xs:w-[170px] sm:max-w-sm bg-primary">
    <div className="flex flex-col p-0 space-y-2">
      <div className="pt-3 px-3">
        <h5 className="text-2xl font-bold tracking-tight text-light-black dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-light-black dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="blog-wrapper-img">
        <img
          className="max-h-50 object-cover rounded-lg"
          src={image}
          alt={imageAlt}
        />
        <div className="desktop-badge-wrapper">
          <CustomBadges badgeArray={badgeArray.slice(0, 3)} />
        </div>
      </div>
    </div>
  </Card>
);

export default BlogCard;
