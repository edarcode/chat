import InputText from "../../../../components/inputs/InputText/InputText";
import css from "./css.module.css";
import FollowingTo from "./FollowingTo/FollowingTo";

export default function WrapperFollowingTo() {
  return (
    <section className={css.wrapperFollowingTo}>
      <InputText className={css.search} />
      <FollowingTo />
    </section>
  );
}
