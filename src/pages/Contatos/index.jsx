import styles from "./Contatos.module.css";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { GoMail } from "react-icons/go";

function Contatos() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>

      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre</p>

      <div className={styles.icones}>
        <a
          href="mailto:miguel.arcanjo@sidebit.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMail className={styles.icone} />
        </a>

        <a href="https://www.instagram.com/sidebit.dev/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className={styles.icone} />
        </a>

        <a href="https://www.youtube.com/channel/UCjb9g6XOzOlgiXA1keFK2mQ" target="_blank" rel="noopener noreferrer">
          <BsYoutube className={styles.icone} />
        </a>

        <a href="https://github.com/mig-ramos" target="_blank" rel="noopener noreferrer">
          <BsGithub className={styles.icone} />
        </a>

        <a href="https://www.linkedin.com/in/miguel-sidebit-dev/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className={styles.icone} />
        </a>
      </div>
    </section>
  );
}

export default Contatos;
