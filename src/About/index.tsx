import { Card } from "flowbite-react";
import { CustomDivider } from "../globalComponents";
import { ExperienceCards } from "./aboutExperienceCards";
import { AboutInfoSection } from "./aboutInfo";

const About = () => {
  const experienceArray = [
    {
      position: "position",
      location: "location",
      imgage: "/LinkedIn_logo.png",
      imageHref: "imageAlt",
      company: "company",
      date: "date",
      experinceArray: ["trial", "tirl", "trial"],
    },
    {
      position: "position",
      location: "location",
      imgage: "/LinkedIn_logo.png",
      imageHref: "imageAlt",
      company: "company",
      date: "date",
      experinceArray: ["trial", "tirl", "trial"],
    },
  ];

  const educationInfo = {
    title: "Education",
    infoData: [
      {
        tooltipImage: "/LinkedIn_logo.png",
        infoImage: "/LinkedIn_logo.png",
        infoInformation: {
          title: "Masters of Science",
          additional: ["Western Michinga"],
        },
      },
      {
        tooltipImage: "/LinkedIn_logo.png",
        infoImage: "/LinkedIn_logo.png",
        infoInformation: {
          title: "Masters of Science",
          additional: ["Western Michinga"],
        },
      },
    ],
  };

  return (
    <section className="bg-light-black w-full h-full p-5">
      <Card className="bg-gray-50 lg:mx-auto max-w-6xl shadow-lg shadow-primary inset-ring-2 inset-ring-primary">
        <div>
          <h3 className="text-2xl pt-2">Summary</h3>
          <CustomDivider color={"gray-300"} margin={"1"} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h3 className="text-2xl py-2 pt-6">Experience</h3>
          <div className="space-y-2">
            {experienceArray.map(
              ({
                position,
                location,
                imgage,
                imageHref,
                company,
                date,
                experinceArray,
              }) => (
                <ExperienceCards
                  position={position}
                  location={location}
                  imgage={imgage}
                  imageHref={imageHref}
                  company={company}
                  date={date}
                  experinceArray={experinceArray}
                />
              )
            )}
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <AboutInfoSection
              title={educationInfo.title}
              infoData={educationInfo.infoData}
            />
            <AboutInfoSection
              title={educationInfo.title}
              infoData={educationInfo.infoData}
            />
            <AboutInfoSection
              title={educationInfo.title}
              infoData={educationInfo.infoData}
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
