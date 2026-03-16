import { Card } from "flowbite-react";
import { ExperienceCards } from "./experienceCards";
import { AboutInfoSection } from "./infoCards";
import "./about.css";

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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    infoData: [
      {
        tooltipImage: "/LinkedIn_logo.png",
        infoImage: "/LinkedIn_logo.png",
        infoInformation: {
          title: "Masters of Science",
          additional: ["Western Michinga", "GPA:3.8"],
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

  const continuedLearning = {
    title: "Certifications",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
    infoData: [
      {
        tooltipImage: "/LinkedIn_logo.png",
        infoImage: "/LinkedIn_logo.png",
        infoInformation: {
          title: "Masters of Science",
          subtitle: "subtitle",
          additional: ["Western Michinga"],
        },
      },
      {
        tooltipImage: "/LinkedIn_logo.png",
        infoImage: "/LinkedIn_logo.png",
        infoInformation: {
          title: "Masters of Science",
          subtitle: "subtitle",
          additional: ["Western Michinga"],
        },
      },
    ],
  };

  return (
    <section className="bg-dark-black w-full h-full p-5">
      <Card className="bg-primary lg:mx-auto max-w-6xl border-none">
        <div>
          <div className="flex items-center pb-4 space-x-2">
            <div className="p-1.5 glassy-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-2xl">Experience</h4>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-dark-black" />
            <div className="space-y-4 relative">
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
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <AboutInfoSection
              title={educationInfo.title}
              infoData={educationInfo.infoData}
              icon={educationInfo.icon}
            />
            <AboutInfoSection
              title={continuedLearning.title}
              infoData={continuedLearning.infoData}
              icon={continuedLearning.icon}
            />
            {/* <AboutInfoSection
              title={openSource.title}
              infoData={openSource.infoData}
              icon={openSource.icon}
            /> */}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
