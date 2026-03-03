import React from "react";
import styles from "./Contact.module.css"
import emailIcon from '/assets/contact/emailIcon.png';
import githubIcon from '/assets/contact/githubIcon.png';
import linkedinIcon from '/assets/contact/linkedinIcon.png';

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contato</h2>
            <p>
                Sinta-se à vontade para entrar em contato.
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}><img src={emailIcon} alt="Icone de Email" />
            <a href="mailto:bruno.abreuxyz@gmail.com">bruno.abreuxyz@gmail.com</a>
            </li>
            <li className={styles.link}><img src={linkedinIcon} alt="Icone do Linkedin" />
            <a href="https://www.linkedin.com/in/bruno--abreu/">linkedin.com/in/bruno--abreu/</a>
            </li>
            <li className={styles.link}><img src={githubIcon} alt="Icone do GitHub" />
            <a href="https://github.com/BrunoAbr/">github.com/BrunoAbr/</a>
            </li>
        </ul>
    </footer>)
}