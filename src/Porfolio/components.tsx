export const PortfolioList = ({
  list,
  title,
}: {
  list: string[];
  title: string;
}) => (
  <>
    {list && (
      <>
        <p className="text-md font-semibold underline leading-relaxed mb-2">
          {title}
        </p>
        <ul className="list-disc pl-4">
          {list.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </>
    )}
  </>
);

export const PortfolioIconLink = ({
  link,
  imageNode,
}: {
  link: string;
  imageNode: React.ReactNode;
}) => (
  <>
    {link && (
      <div className="glassy-background p-1">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {imageNode}
        </a>
      </div>
    )}
  </>
);

export const PortfolioTechStack = ({ techStack }: { techStack: string[] }) => (
  <div>
    <p className="text-md font-semibold underline leading-relaxed mb-2">
      Technology Stack
    </p>
    <div className="flex flex-row space-x-3">
      {techStack.map((tech, i) => (
        <img key={i} src={tech} className="w-10 h-10" />
      ))}
    </div>
  </div>
);

export const DesktopPortfolioCarsouselImg = ({
  imgSrc,
  wrapperAddClasses,
  onClick,
}: {
  imgSrc: string;
  wrapperAddClasses?: string;
  onClick?: () => void;
}) => (
  <div
    className={`relative h-[350px] bg-light-black rounded-md ${wrapperAddClasses}`}
    onClick={onClick}
  >
    <img
      src={imgSrc}
      className="absolute inset-0 w-full h-full object-cover rounded-md"
    />
  </div>
);
