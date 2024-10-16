import { useQuery } from "@tanstack/react-query";
import css from "./css.module.css";
import { getAccountService } from "./getAccountService";
import { useAuth } from "../../auth/useAuth";
import WrapperChat from "./WrapperChat/WrapperChat";

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

  if (isError) return <span>Error</span>;
  if (isLoading) return <span>Cargando...</span>;

  return (
    <section className={css.view}>
      <WrapperChat account={data} />
    </section>
  );
}
