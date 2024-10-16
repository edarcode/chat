import Btn from "../../../../components/buttons/Btn/Btn";
import InputText from "../../../../components/inputs/InputText/InputText";
import { useGlobalChatState } from "../../useGlobalChatState";
import css from "./css.module.css";

export default function WrapperMsgs() {
  const chat = useGlobalChatState((state) => state.chat);

  if (!chat) return null;
  if (!chat.length)
    return (
      <section className={css.emptyChat}>
        No tienes mensajes con esta persona.
      </section>
    );

  return (
    <section className={css.wrapperMsgs}>
      <div className={css.msgs}>
        {chat.map((record) => (
          <span key={record.id}>{record.text}</span>
        ))}
      </div>

      <form className={css.form}>
        <InputText />
        <Btn type="button">Enviar</Btn>
      </form>
    </section>
  );
}
