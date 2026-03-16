const IconLink = ({ href, img }: { href: string; img: string }) => (
  <div className="bg-off-white border-2 border-off-white p-1 rounded-sm mr-2">
    <a href={href} target="_blank">
      <img src={img} width={30} />
    </a>
  </div>
);

export default IconLink;
