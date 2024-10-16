import { useQuery } from "@tanstack/react-query";
import css from "./css.module.css";
import { getAccountService } from "./getAccountService";
import { useAuth } from "../../auth/useAuth";
import { DefaultImg } from "../../components/icons/DefaultImg";
import InputText from "../../components/inputs/InputText/InputText";

export default function Chat() {
  const token = useAuth((auth) => auth.token);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["accounts", token],
    queryFn: (tanStack) =>
      getAccountService({
        signal: tanStack.signal,
        token,
      }),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!token,
    retry: 1,
  });

  return (
    <section className={css.view}>
      {isError && <span>Error</span>}

      {isLoading && <span>Cargando...</span>}

      <article className={css.chat}>
        <section className={css.followingTo}>
          <InputText className={css.search} />
          {data?.followingTo.map((record) => (
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
        <section className={css.msgs}>msgs</section>
      </article>
    </section>
  );
}
