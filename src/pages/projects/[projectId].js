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
      <div>
        Twools est une application permettant aux streamers du créer affichage
        interactif avec leurs communauté vià des "twools" comme des mini jeux ,
        des sondages, des elements animés...
      </div>
      <div>
        Twools est développer avec NextJS. Dans un premier la base de donnée
        etait gérer avec MongoDB et l'API REST mais devant gérer des flux de
        données en temps réel j'ai migré l'api en GraphQL et la base de donnée
        avec Supabase. Dans ce projet j'ai été ammené à travailler sur des
        modules 3D via three JS et à gérer l'API Twitch et les données en temps
        réel via les webhooks
      </div>
      <ul>
        <li>NextJS</li>
        <li>ThreeJS</li>
        <li>Supabase</li>
        <li>GraphQL</li>
        <li>Tailwind</li>
      </ul>
      <div>Slider img</div>
      <div>Code source avec image github</div>
    </div>
  );
};

export default ProjectDetails;
