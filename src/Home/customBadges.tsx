const CustomBadges = ({
  badgeArray,
}: {
  badgeArray: {
    badgeTitle: string;
    badgeImage: string;
  }[];
}) => (
  <div className="rounded-sm space-x-2 space-y-2">
    {badgeArray.map(({ badgeTitle, badgeImage }) => (
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
        <img src={badgeImage} width={20} className="mr-2" />
        <p className="text-base">{badgeTitle}</p>
      </span>
    ))}
  </div>
);
export default CustomBadges;
