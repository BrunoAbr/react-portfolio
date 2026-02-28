import React from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#experience">Experiencia</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};