import { Tooltip } from "flowbite-react";
type AboutInfo = {
  tooltipImage: string;
  infoImage: string;
  infoInformation: { title: string; subtitle?: string; additional: string[] };
};

const AboutInfoSection = ({
  title,
  infoData,
  icon,
}: {
  title: string;
  infoData: AboutInfo[];
  icon: React.ReactNode;
}) => (
  <div className="w-full">
    <div className="flex items-center pb-4 space-x-2 pt-6">
      <div className="p-1.5 glassy-background">{icon}</div>
      <h3 className="py-2  font-semibold text-2xl">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {infoData.map(({ tooltipImage, infoImage, infoInformation }) => (
        <div className="flex [&>div]:flex [&>div]:flex-1">
          <AboutInfoCards
            tooltipImage={tooltipImage}
            infoImage={infoImage}
            infoInformation={infoInformation}
          />
        </div>
      ))}
    </div>
  </div>
);

const AboutInfoCards = ({
  tooltipImage,
  infoImage,
  infoInformation,
}: AboutInfo) => (
  <Tooltip
    animation="duration-300"
    arrow={true}
    content={
      <img className="max-h-15 object-cover rounded-lg" src={tooltipImage} />
    }
  >
    <div className="flex flex-col justify-start w-full glassy-background p-3">
      <div className="flex flex-shrink-0">
        <img
          className="h-14 w-14 object-cover rounded-lg mr-3.5"
          src={infoImage}
        />
        <div>
          <p className="font-bold text-dark-black">{infoInformation.title}</p>
          {infoInformation.subtitle && (
            <p className="font-semibold text-dark-black">
              {infoInformation.subtitle}
            </p>
          )}
          {infoInformation.additional.map((info) => (
            <p className="text-dark-black text-sm">{info}</p>
          ))}
        </div>
      </div>
    </div>
  </Tooltip>
);
export { AboutInfoSection };
