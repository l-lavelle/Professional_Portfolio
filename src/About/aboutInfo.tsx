import { Card, Tooltip } from "flowbite-react";
import type { AboutInfo } from "../types/custom";

const AboutInfoSection = ({
  title,
  infoData,
}: {
  title: string;
  infoData: AboutInfo[];
}) => (
  <div className="w-full">
    <h3 className="text-2xl py-2 pt-6">{title}</h3>
    <div className="space-y-2 space-x-2">
      {infoData.map(({ tooltipImage, infoImage, infoInformation }) => (
        <AboutInfoCards
          tooltipImage={tooltipImage}
          infoImage={infoImage}
          infoInformation={infoInformation}
        />
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
    arrow={false}
    content={
      <img
        className="max-h-15 object-cover rounded-lg mr-5"
        src={tooltipImage}
      />
    }
  >
    <Card className="flex flex-col w-full about-card-p">
      <div className="flex">
        <div>
          <img
            className="max-h-15 object-cover rounded-lg mr-5"
            src={infoImage}
          />
        </div>
        <div>
          <p className="font-bold">{infoInformation.title}</p>
          {infoInformation.additional.map((info) => (
            <p>{info}</p>
          ))}
        </div>
      </div>
    </Card>
  </Tooltip>
);
export { AboutInfoSection };
