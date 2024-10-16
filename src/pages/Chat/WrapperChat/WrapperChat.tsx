import { Account } from "../getAccountService";
import css from "./css.module.css";
import FollowingTo from "./FollowingTo/FollowingTo";
import Msgs from "./Msgs/Msgs";

export default function WrapperChat({ account }: Props) {
  if (!account) return null;
  return (
    <article className={css.wrapperChat}>
      <FollowingTo followingTo={account.followingTo} />
      <Msgs />
    </article>
  );
}

type Props = {
  account?: Account;
};
