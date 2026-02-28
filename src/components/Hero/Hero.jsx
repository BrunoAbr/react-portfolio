import React from "react"
import heroImage from "../../../assets/hero/heroImage.png"
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Olá, meu nome é Bruno</h1>
            <p className={styles.description}>
                Desenvolvedor focado em integrações, automação e sistemas de
                comunicação, com experiência prática em telefonia IP e
                desenvolvimento de APIs voltadas para soluções escaláveis e
                eficientes.
                Possuo experiência no desenvolvimento de soluções, integração
                de APIs REST (JSON), ERP, criação de fluxos para chatbots e
                automação de processos, conectando sistemas e otimizando operações do negócio,
                utilizando Node.JS, React, Python, HTML, CSS, Express e Git.
            </p>
            <a href="mailto:bruno.abreuxyz@gmail.com" className={styles.contactBtn}>Contate-me</a>
        </div>
        <img src={heroImage} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    )    
}
