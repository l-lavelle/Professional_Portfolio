import HeaderLink from "../components/headerLink";
import HomePortfolioCard from "./portfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

const HomePortfolio = () => {
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
        <div className="mx-3 xl:mx-auto my-8 sm:my-10">
          <HeaderLink
            extraClasses={
              "text-off-white justify-self-center md:justify-self-start sm:mb-4"
            }
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
            initialSlide={1}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="portfolioSwiper"
          >
            {featuredPortfolio.map((info, index) => (
              <SwiperSlide key={index}>
                <HomePortfolioCard
                  key={`${info.title} ${index}`}
                  portfolioInfo={info}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="portfolio-cards-wrapper flex pb-4 md:space-x-3">
            {featuredPortfolio.map((info, index) => (
              <HomePortfolioCard
                key={`${info.title} ${index}`}
                portfolioInfo={info}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
export default HomePortfolio;
