const IconLink = ({ href, img }: { href: string; img: string }) => (
  <div className="glassy-background p-1">
    <a href={href} target="_blank">
      <img src={img} width={30} />
    </a>
  </div>
);

export default IconLink;
