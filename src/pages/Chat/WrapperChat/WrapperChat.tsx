import css from "./css.module.css";
import Msgs from "./Msgs/Msgs";
import WrapperFollowingTo from "./WrapperFollowingTo/WrapperFollowingTo";

export default function WrapperChat() {
  return (
    <article className={css.wrapperChat}>
      <WrapperFollowingTo />
      <Msgs />
    </article>
  );
}
