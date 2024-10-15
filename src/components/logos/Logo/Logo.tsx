import css from "./css.module.css";
import logo from "./icons/logo_edarcode_3.webp";

export default function Logo() {
  return <img className={css.logo} src={logo} alt="logo edarcode" />;
}
