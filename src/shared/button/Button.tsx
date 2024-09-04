import "./button.scss";

type ButtonType = "button" | "submit";
type ButtonSize = "base" | "s" | "xs";

interface ButtonProps {
  title: string;
  status?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  icon?: string;
}

export const Button = ({
  status,
  size = "base",
  title,
  type = "button",
  icon,
}: ButtonProps) => {
  const buttonSize = (size: string) => {
    switch (size) {
      case "base":
        return "button_base";
      case "s":
        return "button_s";
      case "xs":
        return "button_xs";
    }
  };

  return (
    <button
      type={type}
      className={`button ${status ? "button__active" : ""} ${buttonSize(size)}`}
    >
      {icon && <img src={icon} alt="иконка" />}
      <p>{title}</p>
    </button>
  );
};
