import css from "./css.module.css";

export default function Home() {
  return (
    <section className={css.home}>
      <article className={css.intro}>
        <h1>Chat</h1>
        <p>
          Bienvenido a Chat, la nueva forma de estar en contacto con las
          personas que más te importan. Envía mensajes de manera rápida y
          segura, ya sea con tus amigos, familia o compañeros de trabajo, todo
          desde una sola aplicación.
        </p>
      </article>
    </section>
  );
}
