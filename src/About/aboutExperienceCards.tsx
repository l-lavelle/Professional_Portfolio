import { Card } from "flowbite-react";
import { CustomDivider } from "../globalComponents";

const ExperienceCards = ({
  position,
  location,
  imgage,
  imageHref,
  company,
  date,
  experinceArray,
}: {
  position: string;
  location: string;
  imgage: string;
  imageHref: string;
  company: string;
  date: string;
  experinceArray: string[];
}) => (
  <Card>
    <div className="flex">
      <img
        className="max-h-35 object-cover rounded-lg mr-5 hidden md:block"
        src={imgage}
        alt={imageHref}
      />
      <div className="w-full">
        <div className="flex md:justify-between">
          <div className="flex">
            <img
              className="max-h-20 object-cover rounded-lg mr-5 mb-2 md:hidden"
              src={imgage}
              alt={imageHref}
            />
            <div>
              <h3 className="text-lg font-bold">{position}</h3>
              <h3>
                {company} - <span className="italic">{location}</span>
              </h3>
              <p className="md:hidden">{date}</p>
            </div>
          </div>
          <p className="hidden md:block">{date}</p>
        </div>
        <CustomDivider color={"gray-300"} margin={"2"} />
        <p className="mt-1">
          <ul className="list-disc list-inside ml-3">
            {experinceArray.map((experience) => (
              <li>{experience}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  </Card>
);

export { ExperienceCards };
