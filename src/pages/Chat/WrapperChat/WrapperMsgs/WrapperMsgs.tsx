import { useEffect } from "react";
import Btn from "../../../../components/buttons/Btn/Btn";
import InputText from "../../../../components/inputs/InputText/InputText";
import { CHAT_API_URL } from "../../../../consts/urls";
import { useCurrentChat } from "../../useCurrentChat";
import css from "./css.module.css";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { msgsSchema, MsgsForm } from "./msgSchema";

const socket = io(CHAT_API_URL.base);

export default function WrapperMsgs() {
  const chat = useCurrentChat((state) => state.chat);
  const sender = useCurrentChat((state) => state.sender);
  const receiverId = useCurrentChat((state) => state.receiverId);

  const { register, handleSubmit } = useForm<MsgsForm>({
    resolver: zodResolver(msgsSchema),
  });

  useEffect(() => {
    if (!chat || !receiverId || !sender) return;

    socket.emit("joinRoom", { senderId: sender.id, receiverId });
    socket.on("message", (data) => console.log(data));

    return () => {
      socket.off("message");
    };
  }, [receiverId, chat, sender]);

  const isValidChat = chat && chat.length > 0;
  const msgs = isValidChat
    ? chat.map((record) => <span key={record.id}>{record.text}</span>)
    : null;

  const onSubmit = ({ msg }: MsgsForm) => {
    if (!chat || !receiverId || !sender || !msg) return;
    socket.emit("message", {
      senderId: sender.id,
      receiverId,
      text: msg,
    });
  };

  return (
    <section className={css.wrapperMsgs}>
      <div className={css.msgs}>{msgs}</div>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <InputText {...register("msg")} />
        <Btn>Enviar</Btn>
      </form>
    </section>
  );
}
