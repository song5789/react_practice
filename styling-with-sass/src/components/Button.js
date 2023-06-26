import "../css/Button.scss";
import classNames from "../../node_modules/classnames/index";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button className={classNames("Button", size, color, { outline, fullWidth })} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
