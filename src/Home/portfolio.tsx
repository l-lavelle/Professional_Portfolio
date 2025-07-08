import { Card } from "flowbite-react";
import HeaderLink from "./homeComponents/headerLink";
import { useRef, useState } from "react";
import { handleMouseDown, handleMouseMove, handleMouseUp } from "../functions";

// scrollbar section
const HomePortfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
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
          <div
            className="flex my-4 space-x-3 space-y-3"
            ref={containerRef}
            onMouseDown={(event) => {
              handleMouseDown(
                event,
                containerRef,
                setIsDragging,
                setStartX,
                setScrollLeft
              );
            }}
            onMouseMove={(event) => {
              handleMouseMove(
                event,
                isDragging,
                containerRef,
                startX,
                scrollLeft
              );
            }}
            onMouseUp={() => {
              handleMouseUp(setIsDragging);
            }}
            // onMouseLeave={handleMouseUp}
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
  <Card className="project-card w-80 bg-light-black border border-2 border-light-black shadow-[2px_3px_4px_var(--color-box-shadow-dark)] flex-1 h-full cursor-pointer">
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
