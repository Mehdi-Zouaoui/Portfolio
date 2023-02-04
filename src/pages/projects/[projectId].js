import styles from "@/styles/project.module.css";
import { useRouter } from "next/router";
import {
  faCaretRight,
  faDisplay,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className={styles.project_left_container}>
          <p className={styles.project_about}>{props.about}</p>
          <div className={styles.project_github}>
            <div>
              <h1 className={styles.project_title}>{props.title}</h1>
              <p>{props.content}</p>
            </div>
            <div>
              <a href={props.link} target="_blank">
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.project_github_icon}
                />{" "}
              </a>
            </div>
          </div>
          <div>{props.description}</div>
          <div>
            <h2>
              {" "}
              <FontAwesomeIcon
                icon={faDisplay}
                className={styles.project_tech_icon}
              />{" "}
              Client{" "}
            </h2>
            <p>{props.client_side_infos}</p>{" "}
          </div>
          <div>
            <div>
              <h2>
                {" "}
                <FontAwesomeIcon
                  icon={faServer}
                  className={styles.project_tech_icon}
                />{" "}
                Serveur
              </h2>
              <p> {props.server_side_infos}</p>
            </div>
          </div>
          <div>
            <h3>Technologie</h3>
            <ul className={styles.project_techs}>
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
          {/* <div
            className={styles.project_img}
            style={{
              backgroundImage: "url(/mb.gif)",
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
