import css from "./css.module.css";
import WrapperChat from "./WrapperChat/WrapperChat";
import { useGetAccount } from "./useGetAccount";

export default function Chat() {
  const { account, isError, isLoading } = useGetAccount();

  if (isError) return <span>Error</span>;
  if (isLoading) return <span>Cargando...</span>;

  return (
    <section className={css.view}>
      <WrapperChat account={account} />
    </section>
  );
}
