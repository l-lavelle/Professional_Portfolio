export type AboutInfo = {
  tooltipImage: string;
  infoImage: string;
  infoInformation: { title: string; additional: string[] };
};

export type BadgeArray = {
  badgeTitle: string;
  badgeImage: string;
};

export type BlogData = {
  id: number;
  title: string;
  text: string;
  img: string;
  badgeArray: BadgeArray[];
};

export type BlogFocus = { dataId: number; open: boolean };

export type PortfolioIndex = {
  first: number;
  middle: number;
  last: number;
};
