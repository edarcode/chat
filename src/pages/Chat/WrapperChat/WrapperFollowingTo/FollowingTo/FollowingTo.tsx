import { DefaultImg } from "../../../../../components/icons/DefaultImg";
import { Follow } from "../../../getAccountService";
import { useCurrentChat } from "../../../useCurrentChat";
import css from "./css.module.css";
import { useGetChat } from "./useGetChat";

export default function FollowingTo() {
  const sender = useCurrentChat((state) => state.sender);
  const { startChat } = useGetChat();

  if (!sender || !sender.followingTo.length)
    return <span>Aún no sigues a nadie.</span>;
  return (
    <section className={css.followingTo}>
      {sender.followingTo.map((record) => (
        <div
          key={record.id}
          className={css.followed}
          onClick={() => startChat(record.id)}
        >
          <Img record={record} />
          <span>{record.email.split("@")[0]}</span>
        </div>
      ))}
    </section>
  );
}

function Img({ record }: { record: Follow }) {
  if (!record.img) return <DefaultImg />;
  return (
    <img
      className={css.img}
      src={record.img}
      alt={record.name ?? record.email}
    />
  );
}
