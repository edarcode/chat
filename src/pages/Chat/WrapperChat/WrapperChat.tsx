import css from "./css.module.css";
import WrapperFollowingTo from "./WrapperFollowingTo/WrapperFollowingTo";
import WrapperMsgs from "./WrapperMsgs/WrapperMsgs";

export default function WrapperChat() {
  return (
    <article className={css.wrapperChat}>
      <WrapperFollowingTo />
      <WrapperMsgs />
    </article>
  );
}
