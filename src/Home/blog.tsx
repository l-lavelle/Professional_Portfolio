import { Card } from "flowbite-react";
import CustomBadges from "./customBadges";
import HeaderLink from "./homeComponents/headerLink";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef, type RefObject } from "react";

const HomeBlog = () => {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    safeDisplacement: 11,
  });

  const blogs = [
    {
      title: "Noteworthy technology",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      badgeArray: [
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
      ],
    },
    {
      title: "Noteworthy technology",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      badgeArray: [
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
      ],
    },
  ];

  return (
    <section className="relative min-w-full">
      <div className="absolute inset-0 bg-light-black z-[-1] min-w-full bottom-[0px]" />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full xl:w-6xl">
          <div className="mx-3 xl:mx-auto mt-6 mb-10">
            <HeaderLink
              extraClasses={
                "text-off-white justify-self-center sm:justify-self-start"
              }
              link={"/Blog"}
              title={"Featured Blog"}
            />
            <div className="blog-container">
              <div
                className="blog-track sm:flex sm:flex-row sm:mt-2 sm:space-x-4 sm:items-center xl:w-6xl"
                ref={ref}
                {...events}
              >
                {blogs.map(
                  ({ title, description, image, imageAlt, badgeArray }) => (
                    <BlogCard
                      title={title}
                      description={description}
                      badgeArray={badgeArray}
                      image={image}
                      imageAlt={imageAlt}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;

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
  <Card className="blog-card xs:w-[170px] sm:max-w-sm bg-primary p-1 shadow-[2px_3px_4px_1px_var(--color-dark-black)] cursor-pointer">
    <div className="flex flex-col p-0 space-y-2">
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-light-black dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-light-black dark:text-gray-400">
          {description}
        </p>
      </div>
      <img
        className="max-h-33 object-cover rounded-lg"
        src={image}
        alt={imageAlt}
      />
      <CustomBadges badgeArray={badgeArray} />
    </div>
  </Card>
);
