import { Link } from "react-router-dom";

const HeaderLink = ({
  extraClasses,
  link,
  title,
}: {
  extraClasses: string;
  link: string;
  title: string;
}) => (
  <h3
    className={`${extraClasses} link-hover text-2xl font-medium mb-1 -ml-[12px]`}
  >
    <Link to={link}>{title}</Link>
  </h3>
);

export default HeaderLink;
