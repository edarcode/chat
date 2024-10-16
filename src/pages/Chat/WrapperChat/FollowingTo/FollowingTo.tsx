import { DefaultImg } from "../../../../components/icons/DefaultImg";
import InputText from "../../../../components/inputs/InputText/InputText";
import { Follows } from "../../getAccountService";
import css from "./css.module.css";

export default function FollowingTo({ followingTo }: Props) {
  if (!followingTo) return null;
  return (
    <section className={css.followingTo}>
      <InputText className={css.search} />
      {followingTo.map((record) => (
        <div key={record.id} className={css.followed}>
          {(record.img && (
            <img
              className={css.img}
              src={record.img}
              alt={record.name ?? record.email}
            />
          )) || <DefaultImg className={css.img} />}
          <span>{record.email.split("@")[0]}</span>
        </div>
      ))}
    </section>
  );
}

type Props = {
  followingTo?: Follows[];
};
