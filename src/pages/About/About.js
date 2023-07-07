import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o EstudosTECH
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end, no intuito de salvar e compartilhar aprendizados em
        diversas áreas de desenvolvimento, tanto front-end quanto back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
