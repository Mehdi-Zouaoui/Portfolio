import { useRouter } from "next/router";
import React from "react";
const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.productId;
  const {
    query: { title, content },
  } = router;
  const props = {
    title,
    content,
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <h3>Technologie</h3>

      <ul>
        <li></li>
      </ul>
      <div>Slider img</div>
      <div>Code source avec image github</div>
    </div>
  );
};

export default ProjectDetails;
