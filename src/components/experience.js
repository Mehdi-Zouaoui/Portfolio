import styles from "@/styles/experience.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Experience = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Developpeur Full Stack et Gérant Twools",
      text: "Test",
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
      text: "Test",
      selected: false,
      badges: ["React", "Jquery", "SCSS", "REST API", "Javascript"],
      localization: "La Défense , France",
      date: "2021 - 2022",
    },
    {
      title: "Developpeur Front end Junior chez Cliclic",
      text: "Test",
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
  return (
    <div className={styles.experience_container}>
      <h1>Experiences</h1>
      <ul className={styles.job_list}>
        {jobs.map((job, index) => (
          <li
            className={styles.job_list_item}
            key={index}
            onClick={() => {
              const newJobs = [...jobs];
              newJobs.forEach((it, ind) => {
                if (index === ind) it.selected = true;
                else it.selected = false;
              });
              setJobs(newJobs);
            }}
          >
            <div className={styles.job_title}>
              <h4>{job.title}</h4>
              <p>{job.date}</p>
            </div>
            {job.selected ? (
              <div className={styles.job_content}>
                <div className={styles.job_location}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{job.localization}</span>
                </div>

                <p>{job.text}</p>
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
