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
  <div className="p-3 glassy-background">
    <div className="flex">
      <div className="absolute top-10 -left-9.5 w-3 h-3 bg-dark-black rounded-full" />
      <div className="absolute top-8.5 -left-11 w-6 h-6 bg-light-black rounded-full animate-ping-slow" />
      <div className="w-full">
        <div className="flex items-center">
          <img
            className="max-h-18 object-cover rounded-lg mr-3.5"
            src={imgage}
            alt={imageHref}
          />
          <div>
            <h3 className="text-lg font-semibold text-dark-black">
              {position}
            </h3>
            <h3 className="text-dark-black">
              {company} -{" "}
              <span className="italic text-dark-black">{location}</span>
            </h3>
            <h4>{date}</h4>
          </div>
        </div>

        <p className="mt-3">
          <ul className="list-disc list-inside ml-3">
            {experinceArray.map((experience) => (
              <li className="text-dark-black my-1">{experience}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export { ExperienceCards };
