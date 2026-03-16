import "./portfolio.css";

type PortfolioInfo = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
};

const HomePortfolioCard = ({
  portfolioInfo,
}: {
  portfolioInfo: PortfolioInfo;
}) => {
  const { imageSrc, imageAlt, title, text } = portfolioInfo;
  return (
    <div className="card xs:w-[170px]">
      <img
        className="h-45 w-full object-cover rounded-t-lg"
        src={imageSrc}
        alt={imageAlt}
        draggable={false}
      />
      <div className="flex flex-col justify-start p-3">
        <h5 className="text-2xl font-semibold tracking-tight text-off-white dark:text-white">
          {title}
        </h5>
        <p className="mt-1.5 font-normal text-off-white dark:text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HomePortfolioCard;
