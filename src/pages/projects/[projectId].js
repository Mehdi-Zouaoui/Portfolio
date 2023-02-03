import styles from "@/styles/project.module.css";
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
    },
  } = router;
  const props = {
    title,
    content,
    description,
    client_side_infos,
    server_side_infos,
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <div className={styles.project_wrapper}>
        <div className={styles.project_left_container}>
          <p>{props.content}</p>

          <div></div>
          <div>{props.description}</div>
          <div> {props.client_side_infos}</div>
          <div>{props.server_side_infos}</div>
          <h3>Technologie</h3>
          <ul>
            <li>NextJS</li>
            <li>ThreeJS</li>
            <li>Supabase</li>
            <li>GraphQL</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className={styles.project_right_container}>
          <div
            className={styles.project_img}
            style={{
              backgroundImage: "url(/mb.gif)",
            }}
          ></div>
        </div>
      </div>

      <div>Code source avec image github</div>
    </div>
  );
};

export default ProjectDetails;
