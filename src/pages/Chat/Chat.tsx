import css from "./css.module.css";
import WrapperChat from "./WrapperChat/WrapperChat";
import { useGetAccount } from "./useGetAccount";
import { useCurrentChat } from "./useCurrentChat";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../../router/children";

export default function Chat() {
  const { account, isError, isLoading } = useGetAccount();
  const updateSender = useCurrentChat((state) => state.updateSender);
  const resetChat = useCurrentChat((state) => state.resetChat);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!account) return;
    updateSender(account);
  }, [account, updateSender]);

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({ queryKey: ["chat"] });
      resetChat();
    };
  }, [resetChat, queryClient]);

  if (isError) return <Navigate to={LOGIN.to} replace />;
  if (isLoading) return <section className={css.view}>Cargando...</section>;

  return (
    <section className={css.view}>
      <WrapperChat />
    </section>
  );
}
