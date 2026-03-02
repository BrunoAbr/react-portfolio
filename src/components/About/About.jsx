import React from "react";
import styles from "./About.module.css"
import aboutImage from "../../../assets/about/aboutImage.png"
import cursorIcon from "../../../assets/about/cursorIcon.png"
import serverIcon from "../../../assets/about/serverIcon.png"
import linuxIcon from "../../../assets/about/linuxIcon.png"


export const About = () => {
    return (
        <section className={styles.container} id="about">
                <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img src={aboutImage} 
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={serverIcon} alt="Icone de servidor" />
                    <div className={styles.aboutItemText}>
                        <h3>Desenvolvedor Backend</h3>
                        <p>
                           Experiência em desenvolvimento de APIs, scripts, chatbots e sistemas otimizados utilizando <strong>Node.js</strong> como base.
                        </p>

                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="Icone do cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Desenvolvedor FrontEnd</h3>
                        <p>
                            Criações de sites responsivos e otimizados utilizando <strong>HTML, CSS e JavaScript</strong>.
                        </p>

                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={linuxIcon} alt="Icone do linux" />
                    <div className={styles.aboutItemText}>
                        <h3>DevOps</h3>
                        <p>
                            Algumas certificações na área de redes, além de experiência como SysAdmin, com conhecimentos em Docker, atuando desde o desenvolvimento até o deploy de aplicações, incluindo configuração de ambientes e automação de processos.
                        </p>

                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}