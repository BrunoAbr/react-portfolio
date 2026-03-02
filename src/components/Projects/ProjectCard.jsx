import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
    return (
        <div className={styles.container}>
            <img src={imageSrc} alt={`Imagem do ${title}`}  className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>{
                skills.map((skill, id) => {
                    return <li key={id}  className={styles.skill}>{skill}</li>
                })}</ul>
            <div  className={styles.links}>
              {/* <a className={styles.link} href={demo}>Demo</a>  in future    */} 
                  <a className={styles.link} href={source}>Código</a>
            </div>
        </div>
    )
}