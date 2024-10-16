import css from "./css.module.css";
import WrapperChat from "./WrapperChat/WrapperChat";
import { useGetAccount } from "./useGetAccount";
import { useGlobalChatState } from "./useGlobalChatState";
import { useEffect } from "react";

export default function Chat() {
  const { account, isError, isLoading } = useGetAccount();
  const updateAccount = useGlobalChatState((chat) => chat.updateAccount);

  useEffect(() => {
    if (!account) return;
    updateAccount(account);
  }, [account, updateAccount]);

  if (isError) return <span>Error</span>;
  if (isLoading) return <span>Cargando...</span>;

  return (
    <section className={css.view}>
      <WrapperChat />
    </section>
  );
}
