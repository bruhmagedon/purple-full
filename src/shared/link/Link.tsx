import "./link.scss";

interface LinkProps {
  title: string;
  active?: boolean;
}

export const Link = ({ active, title }: LinkProps) => {
  return (
    <a href="#" className={`link ${active ? "link__active" : ""}`}>
      {title}
    </a>
  );
};
