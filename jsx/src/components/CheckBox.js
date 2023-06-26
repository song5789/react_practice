import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./CheckBox.module.css";
import classNames from "../../node_modules/classnames/bind";

const cx = classNames.bind(styles);

function CheckBox({ children, checked, ...rest }) {
  return (
    <div className={cx("checkbox")}>
      <label>
        <input type="checkbox" {...rest} />
        <div className={cx("icon", "icon2")}>{checked ? <MdCheckBox className={cx("checked")} /> : <MdCheckBoxOutlineBlank />}</div>
      </label>
      <span className={checked ? cx("my-component") : ""}>{children}</span>
    </div>
  );
}

export default CheckBox;
