import Btn from "../../../../components/buttons/Btn/Btn";
import InputText from "../../../../components/inputs/InputText/InputText";
import { useCurrentChat } from "../../useCurrentChat";
import css from "./css.module.css";

export default function WrapperMsgs() {
  const chat = useCurrentChat((state) => state.chat);

  const isValidChat = chat && chat.length > 0;
  const msgs = isValidChat
    ? chat.map((record) => <span key={record.id}>{record.text}</span>)
    : null;

  return (
    <section className={css.wrapperMsgs}>
      <div className={css.msgs}>{msgs}</div>

      <form className={css.form}>
        <InputText />
        <Btn type="button">Enviar</Btn>
      </form>
    </section>
  );
}
