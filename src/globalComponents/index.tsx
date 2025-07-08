const CustomDivider = ({
  color,
  margin,
}: {
  color: string;
  margin: string;
}) => <div className={`border-t border-${color} my-${margin}`}></div>;

export { CustomDivider };
