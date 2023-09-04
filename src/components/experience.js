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
      multiple: false,
      title: "DEVELOPPEUR FULLSTACK – TWOOLS ",
      text: `Plateforme web permettant de créer et gérer des outils visant à améliorer un flux de diffusion en ligne (streaming) et à susciter l’engagement avec l’audience.`,
      missions: [
        "Évaluation et sélection des moyens techniques requis pour le développement",
        "Conception et réalisation du design ainsi que de la maquette de l’application",
        "Développement de l’interface utilisateur",
        "Développement de la partie serveur",
        "Création de la base de données et mise en relation avec l’application",
        "Gestion de versionning",
        "Développement du CRUD et de la partie administration",
        "Développement du système d’authentification",
        "Création de l’api GraphQL",
        "Élaboration des algorithmes pour le traitement en temps réel des données",
        "Développement des outils 3D",
        "Mise en relation avec les logiciels de capture d’écran",
        "Mise en relation avec les APIs nécessaire au fonctionnement de l’application",
        "Débogage",
        "Testing",
      ],
      selected: true,
      badges: [
        "JAVASCRIPT",
        "REACT",
        "NEXTJS",
        "SUPABASE",
        "THREEJS",
        "TAILWIND",
        "MONGODB",
        "TYPESCRIPT",
        "HTML",
        "SCSS",
        "JSX",
        "NODEJS",
        "NPM",
        "GIT",
        "GITHUB",
      ],
      localization: "Sannois, France",
      date: "Mars 2022 – Aout 2023",
    },

    {
      multiple: false,
      title: "DEVELOPPEUR FULLSTACK – NEWMADE-AUDIOVISUEL ",
      text: `Création et mise en place du site e-commerce de l’entreprise.`,
      missions: [
        "Développement de l’interface utilisateur",
        "Suivis et échange avec l’équipe design",
        "Conception du système d’authentification",
        "Création du système de paiement",
        "Développement du CRUD et de la partie administration",
        "Développement du serveur du site",
        "Création de la base de données",
      ],
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
      date: "Mars 2022 – Septembre 2022",
    },

    {
      multiple: false,
      title: "DEVELOPPEUR FRONT END – RECIPROC-IT",
      text: "Développement d’une application complète permettant aux utilisateurs de simuler la gestion des risques cyber et d’obtenir un rapport détaillé et complet.",
      missions: [
        "Développement et intégration d’un système d’authentification",
        "Correction, Refactorisation et Optimisation du code déjà existant",
        "Développement de l’algorithme de la simulation",
        "Développement d’un module schématisant toute les données sorties après la simulation",
        "Développement de l’interface utilisateur",
        "Portage de l’application JQUERY vers React",
        "Gestion de la partie Front du projet",
        "Livraison et suivi de mise en production",
        "Participation à l'amélioration continue des processus et des outils",
        "Création et mise à jour de la documentation technique",
      ],
      selected: false,
      badges: [
        "JAVASCRIPT",
        "JQUERY",
        "REACT",
        "DOCKER",
        "GIT",
        "HTML",
        "CSS",
        "PYTHON",
        "NODEJS",
        "NPM",
        "GIT",
        "API REST",
        "ORACLE",
        "GITHUB",
      ],
      localization: "La Défense , France",
      date: "Novembre 2020 – Avril 2021",
    },
    {
      multiple: true,
      title: "DEVELOPPEUR FRONT END – CLICLIC",
      text: {
        project_1:
          "Application de gestion de la documentation interne de l’entreprise et des données.",
        project_2:
          "Création de solutions graphiques et interactives pour des productions télévisuelles et web.",
      },
      missions: {
        missions_1: [
          "Développement du serveur de l’application",
          "Développement de l’interface utilisateur",
          "Création et gestion du système d’authentification sécurisé",
          "Création de base de données et connexion à l’application",
          "Développement du CRUD",
          "Gestion de l’affichage et des animations",
          "Conception de l’API REST",
          "Préparation mise en production",
          "Création et mise à jour de la documentation technique",
        ],
        misions_2: [
          "Récupération du flux en direct du client",
          "Développement de l’algorithme de jeu",
          "Création de l’interface graphique",
          "Création des animations",
          "Suivis de mise en production",
        ],
      },
      selected: false,
      badges: [
        "JAVASCRIPT",
        "ANGULAR",
        "ANGULARJS",
        "NODEJS",
        "REACT",
        "HTML",
        "CSS",
        "SCSS",
        "GIT",
        "GITHUB",
        "GITLAB",
        "GSAP",
        "FIREBASE",
        "MONGODB",
        "BOOTSRAP",
        "EXPRESS",
        "TYPESCRIPT",
      ],
      localization: "Paris 12e , France",
      date: "Aout 2019 – Octobre 2020",
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
              {job.multiple == false ? (
                <div>
                  <span>Project</span>
                  <p className={styles.job_text}>{job.text}</p>
                  <ul className={styles.job_missions_list}>
                    {job.missions.map((mission, missionIndex) => (
                      <li key={missionIndex} className={styles.job_mission}>
                        {mission}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <span>Project</span>
                  <p className={styles.job_text}>{job.text}</p>
                  <ul className={styles.job_missions_list}>
                    {job.missions.map((mission, missionIndex) => (
                      <li key={missionIndex} className={styles.job_mission}>
                        {mission}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
