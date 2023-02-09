import styles from "@/styles/project.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCaretRight,
  faDisplay,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.productId;
  const {
    query: {
      title,
      content,
      description,
      client_side_infos,
      server_side_infos,
      about,
      link,
    },
  } = router;
  const props = {
    title,
    content,
    description,
    client_side_infos,
    server_side_infos,
    about,
    link,
  };
  return (
    <div className={styles.project_container}>
      <div className={styles.project_wrapper}>
        <p className={styles.project_about}>{props.about}</p>
        <div className={styles.project_left_container}>
          <div className={styles.project_github}>
            <div>
              <h1 className={styles.project_title}>{props.title}</h1>
              <p>{props.content}</p>
            </div>
            <div>
              <a href={props.link} target="_blank" rel="noreferrer">
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.project_github_icon}
                />{" "}
              </a>
            </div>
          </div>
          <div style={{ width: "90%" }}>{props.description}</div>
          <div>
            <h2 className={styles.project_subtitle}>
              {" "}
              <FontAwesomeIcon
                icon={faDisplay}
                className={styles.project_tech_icon}
              />{" "}
              Client{" "}
            </h2>
            <p style={{ width: "90%" }}>{props.client_side_infos}</p>{" "}
          </div>
          <div>
            <div>
              <h2 className={styles.project_subtitle}>
                {" "}
                <FontAwesomeIcon
                  icon={faServer}
                  className={styles.project_tech_icon}
                />{" "}
                Serveur
              </h2>
              <p style={{ width: "90%" }}> {props.server_side_infos}</p>
            </div>
          </div>
          <div>
            <h3 className={styles.project_subtitle}>Technologie</h3>
            <ul className={styles.project_techs} style={{ width: "90%" }}>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className={styles.project_tech_icon}
                />
                NextJS
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className={styles.project_tech_icon}
                />
                ThreeJS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className={styles.project_tech_icon}
                />
                Supabase
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className={styles.project_tech_icon}
                />
                GraphQL
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className={styles.project_tech_icon}
                />
                Tailwind
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.project_right_container}>
          <div
            className={styles.project_right_screen}
            style={{
              backgroundImage: "url(/mb.gif)",
            }}
          ></div>
          {/* <div
            className={styles.project_img}
           
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
