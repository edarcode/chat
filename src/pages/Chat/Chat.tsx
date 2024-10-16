import css from "./css.module.css";
import WrapperChat from "./WrapperChat/WrapperChat";
import { useGetAccount } from "./useGetAccount";
import { useCurrentChat } from "./useCurrentChat";
import { useEffect } from "react";

export default function Chat() {
  const { account, isError, isLoading } = useGetAccount();
  const updateSender = useCurrentChat((state) => state.updateSender);

  useEffect(() => {
    if (!account) return;
    updateSender(account);
  }, [account, updateSender]);

  if (isError) return <span>Error</span>;
  if (isLoading) return <span>Cargando...</span>;

  return (
    <section className={css.view}>
      <WrapperChat />
    </section>
  );
}
