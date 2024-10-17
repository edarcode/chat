import { useEffect } from "react";
import { useAuth } from "../../../../auth/useAuth";
import Btn from "../../../../components/buttons/Btn/Btn";
import InputText from "../../../../components/inputs/InputText/InputText";
import { useFetch } from "../../../../hooks/useFetch";
import css from "./css.module.css";
import FollowingTo from "./FollowingTo/FollowingTo";
import {
  UnfollowToPayload,
  UnfollowToRes,
  unfollowToService,
} from "./unfollowToService";
import { useSearchAccount } from "./useSearchAccount";
import { useQueryClient } from "@tanstack/react-query";
import {
  FollowToPayload,
  FollowToRes,
  followToService,
} from "./followToService";

export default function WrapperFollowingTo() {
  const { accountFound, setEmail, cleanEmail, email } = useSearchAccount();
  const token = useAuth((auth) => auth.token);
  const queryClient = useQueryClient();

  const { startFetch, loading, res, err } = useFetch<
    UnfollowToPayload,
    UnfollowToRes
  >(unfollowToService);

  const {
    startFetch: startFetchFollowTo,
    loading: loadingFollowTo,
    res: resFollowTo,
    err: errFollowTo,
  } = useFetch<FollowToPayload, FollowToRes>(followToService);

  useEffect(() => {
    if (!res) return;
    cleanEmail();
    queryClient.invalidateQueries();
  }, [res, queryClient]);

  useEffect(() => {
    if (!resFollowTo) return;
    cleanEmail();
    queryClient.invalidateQueries();
  }, [resFollowTo, queryClient]);

  return (
    <section className={css.wrapperFollowingTo}>
      <form className={css.form} onSubmit={(e) => e.preventDefault()}>
        <InputText
          className={css.search}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {accountFound && (
          <span className={css.accountFound}>
            {accountFound?.email.split("@")[0]}
            {!accountFound.isReadyFolloweb && (
              <Btn
                type="button"
                disabled={loadingFollowTo}
                err={!!errFollowTo}
                onClick={() =>
                  startFetchFollowTo({ token, id: accountFound.id })
                }
              >
                seguir
              </Btn>
            )}
            {accountFound.isReadyFolloweb && (
              <Btn
                type="button"
                disabled={loading}
                err={!!err}
                onClick={() => startFetch({ token, id: accountFound.id })}
              >
                ignorar
              </Btn>
            )}
          </span>
        )}
      </form>
      <FollowingTo />
    </section>
  );
}
