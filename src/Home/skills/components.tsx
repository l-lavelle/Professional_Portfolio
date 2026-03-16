import type { Dispatch, SetStateAction } from "react";

const SkillsBadges = ({
  badgeImage,
  badgeTitle,
}: {
  badgeImage: string;
  badgeTitle: string;
}) => (
  <div
    key={`${badgeTitle}`}
    className="flex flex-col items-center glassy-background rounded p-4 space-y-2"
  >
    <img src={badgeImage} width={60} height={60} />
    <p>{badgeTitle}</p>
  </div>
);

const TagTabs = ({
  tagTabs,
  tag,
  setTag,
}: {
  tagTabs: { title: string; image: string }[];
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
}) => (
  <div className="space-x-1">
    {tagTabs.map(({ title, image }, index) => (
      <span
        key={`${title} ${index}`}
        onClick={() => setTag(title)}
        className={`inline-flex items-center bg-primary-light px-2 py-1.5 rounded-t-md font-medium text-gray-600 cursor-pointer space-x-1`}
      >
        <img
          src={image}
          width={20}
          className={`rounded-full ${tag === title ? "" : "grayscale opacity-50"}`}
        />
        <p className="text-base">{title}</p>
      </span>
    ))}
  </div>
);

export { SkillsBadges, TagTabs };
