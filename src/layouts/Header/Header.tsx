import css from "./css.module.css";
import Logo from "../../components/logos/Logo/Logo";
import { Link } from "react-router-dom";
import LinkTo from "../../components/links/LinkTo/LinkTo";
import { CHAT, HOME } from "../../router/children";

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link className={css.logo} to={HOME.to}>
          <Logo />
        </Link>
        <LinkTo to={HOME.to}>{HOME.display}</LinkTo>
        <LinkTo to={CHAT.to}>{CHAT.display}</LinkTo>
      </nav>
    </header>
  );
}
