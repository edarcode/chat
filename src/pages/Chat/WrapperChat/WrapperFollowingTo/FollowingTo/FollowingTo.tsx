import { DefaultImg } from "../../../../../components/icons/DefaultImg";
import { Follows } from "../../../getAccountService";
import { useGlobalChatState } from "../../../useGlobalChatState";
import css from "./css.module.css";

export default function FollowingTo() {
  const account = useGlobalChatState((chat) => chat.account);

  if (!account || !account.followingTo.length)
    return <span>Aún no sigues a nadie.</span>;
  return (
    <section className={css.followingTo}>
      {account.followingTo.map((record) => (
        <div key={record.id} className={css.followed}>
          <Img record={record} />
          <span>{record.email.split("@")[0]}</span>
        </div>
      ))}
    </section>
  );
}

function Img({ record }: { record: Follows }) {
  if (!record.img) return <DefaultImg />;
  return (
    <img
      className={css.img}
      src={record.img}
      alt={record.name ?? record.email}
    />
  );
}
