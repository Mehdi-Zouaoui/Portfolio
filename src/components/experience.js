import styles from "@/styles/experience.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { createRef, useLayoutEffect, useRef, useState } from "react";
const Experience = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Developpeur Full Stack et Gérant Twools ",
      text: `Twools est mon projet entreprenarial qui a été très formateur.\n\
       Pour ce projet j'ai du tout faire seul. \n\
       Développer le client et le serveur de l'application.\n\ Créer un API et une base de donné.\n\
        Manipuler l'API Twitch et la gestion en temps réel des données. \n\
        Créer un système d'authentification sécurisé et gérer la securité des données utilisateur `,
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
      text: "Developpeur Web pour Cliclic j'ai eu beaucoup de projet à gérer seul ou en équipe.\n Mes principaux projets était le developpement de jeu interactif pour des pages Facebooks et des régis TV.\n En parralèle j'ai été ammener a developper un application CRUD pour gérer la documentation de l'entreprise.",
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
  const [animation, setAnimation] = useState();
  const comp = useRef();
  const timeline = useRef();
  const jobsRef = useRef([...Array(jobs.length)].map(() => createRef()));

  useLayoutEffect(() => {
    console.log(jobsRef);
    const heightAnimation = (item, i) => {
      const newJobs = [...jobs];
      console.log(newJobs);
      newJobs.forEach((it, ind) => {
        console.log(i, ind);
        if (i === ind) it.selected = true;
        else it.selected = false;
      });
      setJobs(newJobs);

      let ctx = gsap.context(() => {
        jobsRef.current.forEach((el, index) => {
          console.log(el.current.children[1]);
          timeline.current = gsap
            .timeline()
            .to(el.current, {
              height: jobs[index].selected ? "30vh" : "3vh",
              duration: 0.5,
            })
            .to(el.current.children[1], {
              display: "flex",
              duration: 0.5,
            });
        });
      }, comp);

      return () => ctx.revert(); // cleanup
    };
    document
      .getElementById("job_list_item")
      .addEventListener("click", heightAnimation);
    return () => {
      document
        .getElementById("job_list_item")
        .removeEventListener("click", heightAnimation);
    };
  }, []);

  return (
    <div className={styles.experience_container}>
      <h1>Experiences</h1>
      <ul className={styles.job_list}>
        {jobs.map((job, index) => (
          <li
            className={styles.job_list_item}
            id="job_list_item"
            key={index}
            ref={jobsRef.current[index]}
          >
            <div className={styles.job_title}>
              <h4>{job.title}</h4>
              <p>{job.date}</p>
            </div>
            {job.selected ? (
              <div className={styles.job_content}>
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
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
