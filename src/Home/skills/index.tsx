import LinkedinLogo from "/LinkedIn_logo.png";
import "./skills.css";
import { TagTabs, SkillsBadges } from "./components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import type { BadgeCategories } from "../../types/custom";

// TODO: make tabs little bigger - at least on larger screens
const tagTabs = [
  {
    title: "All",
    image: "/LinkedIn_logo.png",
  },
  {
    title: "Frontend",
    image: "/LinkedIn_logo.png",
  },
  {
    title: "Backend",
    image: "/LinkedIn_logo.png",
  },
  {
    title: "trial",
    image: "/LinkedIn_logo.png",
  },
];

const skillsBadges = [
  {
    badgeTitle: "tailwind",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },

  {
    badgeTitle: "bootstrap",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },

  {
    badgeTitle: "python",
    badgeImage: LinkedinLogo,
    tag: "Backend",
  },

  {
    badgeTitle: "node",
    badgeImage: LinkedinLogo,
    tag: "Backend",
  },
  {
    badgeTitle: "typescript",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },
  {
    badgeTitle: "css",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },
];

const filteredSkills = (
  data: BadgeCategories[],
  currentTag: string,
): BadgeCategories[] => {
  if (currentTag === "All") {
    return data;
  } else {
    return data.filter(({ tag }) => tag === currentTag);
  }
};

const SkillsSection = () => {
  const [tag, setTag] = useState<string>("All");

  return (
    <section className="relative w-full py-6 bg-primary">
      <div className=" flex flex-col max-w-6xl my-8 px-3 mx-auto space-y-1 lg:space-x-10">
        <h3 className="text-2xl font-medium text-center md:text-left mb-4">
          Skills
        </h3>
        <TagTabs tagTabs={tagTabs} tag={tag} setTag={setTag} />
        <div className="diamond-pattern p-3">
          {/* TODO: turn autoplay on */}
          <Swiper
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 8 },
            }}
            spaceBetween={30}
            loop={true}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay]}
            className="skillsSwiper"
          >
            {filteredSkills(skillsBadges, tag).map(
              ({ badgeImage, badgeTitle }) => (
                <SwiperSlide>
                  <SkillsBadges
                    badgeImage={badgeImage}
                    badgeTitle={badgeTitle}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
