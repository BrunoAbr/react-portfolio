import React from "react"
import heroImage from "/assets/hero/heroImage.png"
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Olá, meu nome é Bruno</h1>
            <p className={styles.description}>
                Profissional de tecnologia com foco em automação, infraestrutura e cultura DevOps, com experiência prática em integração de sistemas e implementação de soluções voltadas para eficiência operacional, escalabilidade e confiabilidade dos ambientes.<br></br>
                Possuo conhecimentos em ambientes Linux, controle de versão com Git, conteinerização com Docker e implementação de pipelines de CI/CD, aplicando boas práticas para automatizar processos de entrega e garantir maior qualidade e agilidade nas operações.
                <strong> Python, Node.JS, React, Docker, Terraform, Git, Ansible e AWS.</strong>
            </p>
            <a href="mailto:bruno.abreuxyz@gmail.com" className={styles.contactBtn}>Contate-me</a>
        </div>
        <img src={heroImage} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    )    
}
