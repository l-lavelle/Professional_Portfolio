import { Card } from "flowbite-react";
import CustomBadges from "../../components/customBadges";

const BlogCard = ({
  title,
  description,
  badgeArray,
  image,
  imageAlt,
  date,
}: {
  title: string;
  description: string;
  badgeArray: { badgeTitle: string; badgeImage: string }[];
  image: string;
  imageAlt: string;
  date: string;
}) => (
  <Card className="blog-card xs:w-[170px] sm:max-w-sm bg-primary">
    <div className="flex flex-col p-0 space-y-2">
      <div className="pt-3 px-3">
        <h5 className="text-2xl font-bold tracking-tight text-light-black dark:text-white">
          {title}
        </h5>
        <div className="flex justify-center items-center glassy-background py-1 px-2 space-x-1 w-fit my-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <p className="text-sm font-semibold text-light-black dark:text-gray-400">
            {date}
          </p>
        </div>
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
          <CustomBadges badgeArray={badgeArray.slice(0, 3)} />
        </div>
      </div>
    </div>
  </Card>
);

export default BlogCard;
