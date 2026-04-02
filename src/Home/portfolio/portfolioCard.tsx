import type { PortfolioOptions } from "../../types/custom";
import "./portfolio.css";
import { GlobalContext } from "../../globalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// TODO: add back in image alt
const HomePortfolioCard = ({
  portfolioInfo,
}: {
  portfolioInfo: PortfolioOptions;
}) => {
  const navigate = useNavigate();
  const { id, img, projectName, description } = portfolioInfo;
  const { setPortfolioId } = useContext(GlobalContext);

  return (
    <div
      className="card xs:w-[170px]"
      onClick={() => {
        setPortfolioId(id);
        window.scrollTo(0, 0);
        navigate("/Portfolio");
      }}
    >
      <img
        className="h-45 w-full object-cover rounded-t-lg"
        src={img}
        // alt={imageAlt}
        draggable={false}
      />
      <div className="flex flex-col justify-start p-3">
        <h5 className="text-2xl font-semibold tracking-tight text-off-white dark:text-white">
          {projectName}
        </h5>
        <p className="mt-1.5 font-normal text-off-white dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomePortfolioCard;
