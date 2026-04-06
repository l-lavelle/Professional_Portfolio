import HeaderLink from "../components/headerLink";
import HomePortfolioCard from "./portfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import LinkedinLogo from "/LinkedIn_logo.png";

const HomePortfolio = () => {
  const portfolioOptions = [
    {
      id: 1,
      img: "https://www.w3schools.com/css/img_5terre_wide.jpg",
      projectName: "Project-1",
      tagline: "tagline-1",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/css/paris.jpg",
      projectName: "Project-2",
      tagline: "tagline-2",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/css/lights600x400.jpg",
      projectName: "Project-3",
      tagline: "tagline-3",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      img: "https://www.w3schools.com/css/img_forest.jpg",
      projectName: "Project-4",
      tagline: "tagline-4",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      img: "https://www.w3schools.com/css/img_mountains.jpg",
      projectName: "Project-5",
      tagline: "tagline-5",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="bg-dark-black w-full flex justify-center">
      <section className="w-full xl:max-w-6xl">
        <div className="mx-3 xl:mx-auto my-8 sm:my-10">
          <HeaderLink
            extraClasses={"text-off-white justify-self-center sm:mb-4"}
            link={"/Portfolio"}
            title={"Featured Portfolio"}
          />
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            initialSlide={2}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="portfolioSwiper"
          >
            {portfolioOptions.map((info, index) => (
              <SwiperSlide key={index}>
                <HomePortfolioCard
                  key={`${info.projectName} ${index}`}
                  portfolioInfo={info}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
};
export default HomePortfolio;
