import styles from "@/styles/experience.module.css";
import {
  faArrowDown,
  faArrowUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { createRef, useLayoutEffect, useRef, useState } from "react";

const Experience = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Developpeur Full Stack et Gérant Twools ",
      text: `Twools est mon projet entreprenariale qui a été très formateur.\n\
      Pour ce projet j'ai du tout faire seul. \n\
      Développer le client et le serveur de l'application.\n\ Créer un API et une base de données.\n\
      Manipuler l'API Twitch et la gestion en temps réel des données. \n\
      Créer un système d'authentification sécurisé et géré la sécurité des données utilisateur.`,
      selected: true,
      badges: [
        "Next js",
        "Tailwind",
        "Supabase",
        "MongoDB",
        "React Three Fiber",
        "GraphQL",
        "Twitch API",
        "Javascript",
      ],
      localization: "Sannois, France",
      date: "2022 - Present",
    },

    {
      title: "Developpeur Full Stack Newmade Audiovisuel ",
      text: `Unique developpeur pour Newmade Audiovisuel j'étais en charge de la création dans un premier d'un site vitrine pour la socitétée puis de créer la partie e-commerce \n\
      Une mission excitante qui m’a permis d'améliorer mes compétences dans le développement full stack et de me perfectionner dans l'utilisation du framework Next JS`,
      selected: false,
      badges: [
        "Next js",
        "Tailwind",
        "Supabase",
        "MongoDB",
        "React Three Fiber",
        "GraphQL",
        "Twitch API",
        "Javascript",
      ],
      localization: "Sannois, France",
      date: "2022 - Present",
    },

    {
      title: "Developpeur Front end chez Reciproq.IT",
      text: "Ma mission consistait à corriger et finir l'application de l'entreprise développer avec Jquery.\n J'ai ensuite du réaliser la migration de l'application vers React. ",
      selected: false,
      badges: ["React", "Jquery", "SCSS", "REST API", "Javascript"],
      localization: "La Défense , France",
      date: "2021 - 2022",
    },
    {
      title: "Developpeur Front end Junior chez Cliclic",
      text: " Mes principaux projets étaient le développement de jeux interactifs pour des pages Facebooks et le développement d'outils pour des régis TV.\n En parallèle j'ai été amener à développer une application CRUD pour gérer la documentation de l'entreprise. \n J'ai fait mes premiers pats dans le monde professionnel du développement grace à Cliclic ou j'ai appris énormément et eu l'occasion de pratiquer sur beaucoup de technologies différentes.",
      selected: false,
      badges: [
        "React",
        "Angular JS",
        "Angular",
        "SCSS",
        "Bootstrap",
        "REST API",
        "Javascript",
        "Express",
        "Firebase",
      ],
      localization: "Paris 12e , France",
      date: "2019 - 2021",
    },
  ]);

  const selectedJob = (job, index) => {
    const newJobs = [...jobs];

    newJobs.forEach((it, i) => {
      if (index === i) it.selected = true;
      else it.selected = false;
    });
    setJobs(newJobs);
  };

  return (
    <div className={styles.experience_container}>
      <h1 className={styles.experience_title}> Experiences</h1>
      <ul className={styles.job_list}>
        {jobs.map((job, index) => (
          <li
            className={styles.job_list_item}
            key={index}
            onClick={() => {
              selectedJob(job, index);
            }}
          >
            <div className={styles.job_title}>
              <p className={styles.job_title_bullet}>0{index + 1}/</p>
              <h3 className={styles.job_title_content}>{job.title}</h3>
              <p className={styles.job_title_date}>{job.date}</p>
              <span style={{ color: "white" }}>
                {job.selected ? (
                  <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                  <FontAwesomeIcon icon={faArrowDown} />
                )}
              </span>
            </div>

            <div
              className={
                job.selected === false
                  ? `${styles.job_content}`
                  : `${styles.job_content} ${styles.job_content_show}`
              }
            >
              <div className={styles.job_location}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span style={{ marginLeft: "5px" }}>{job.localization}</span>
              </div>

              <p className={styles.job_text}>{job.text}</p>
              <ul className={styles.job_badges_list}>
                {job.badges.map((badge, badgeIndex) => (
                  <li key={badgeIndex} className={styles.job_badge}>
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
