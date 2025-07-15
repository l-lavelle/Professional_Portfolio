import { Card } from "flowbite-react";
import HeaderLink from "./homeComponents/headerLink";
import { useRef, type RefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const HomePortfolio = () => {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    safeDisplacement: 11,
  });
  const featuredPortfolio = [
    {
      imageSrc: "/LinkedIn_logo.png",
      imageAlt: "Example Image",
      title: "Noteworthy technology",
      text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageSrc: "/LinkedIn_logo.png",
      imageAlt: "Example Image",
      title: "Noteworthy technology",
      text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageSrc: "/LinkedIn_logo.png",
      imageAlt: "Example Image",
      title: "Noteworthy technology",
      text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];

  return (
    <section className="bg-dark-black w-full flex justify-center">
      <section className="w-full xl:max-w-6xl">
        <div className="mx-3 xl:mx-auto my-6">
          <HeaderLink
            extraClasses={"text-off-white justify-self-start"}
            link={"/Portfolio"}
            title={"Featured Portfolio"}
          />
          <div className="project-container pb-4">
            <div
              className="project-track sm:flex sm:flex-row sm:mt-2 sm:space-x-4 sm:items-center xl:w-6xl"
              ref={ref}
              {...events}
            >
              {featuredPortfolio.map(({ imageSrc, imageAlt, title, text }) => (
                <HomePortfolioCard
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                  title={title}
                  text={text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default HomePortfolio;

const HomePortfolioCard = ({
  imageSrc,
  imageAlt,
  title,
  text,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
}) => (
  <Card className="project-card xs:w-[170px]  bg-light-black border border-2 border-light-black shadow-[2px_3px_4px_var(--color-box-shadow-dark)] cursor-pointer">
    <img
      className="max-h-33 object-cover rounded-t-lg"
      src={imageSrc}
      alt={imageAlt}
    />
    <div className="flex flex-col justify-start p-2">
      <h5 className="text-2xl font-bold tracking-tight text-off-white dark:text-white">
        {title}
      </h5>
      <p className="mt-1 font-normal text-off-white dark:text-gray-400">
        {text}
      </p>
    </div>
  </Card>
);
