import { useAuth } from "../../auth/useAuth";
import Btn from "../../components/buttons/Btn/Btn";
import Networks from "../../components/navs/Networks/Networks";
import css from "./css.module.css";

export default function Footer() {
  const token = useAuth((auth) => auth.token);
  const logout = useAuth((auth) => auth.removeToken);
  return (
    <footer className={css.footer}>
      <Btn onClick={logout} isVisible={!!token}>
        Cerrar sesión
      </Btn>
      <Networks />
      <p>© Casi todos los derechos reservados.</p>
    </footer>
  );
}
