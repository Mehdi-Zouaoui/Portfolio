import styles from "@/styles/slider.module.css";
import {
  faArrowRight,
  faCaretRight,
  faCode,
  faDumbbell,
  faFolder,
  faGamepad,
  faMugHot,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
const Slider = () => {
  const comp = useRef();
  let [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const [items, setItems] = useState([
    {
      title: "Twools",
      content:
        "Plateforme web permettant de créer et gérer des outils visant à améliorer un flux de diffusion en ligne (streaming) et à susciter l’engagement avec l’audience.",
      description: `
      Twools est une application qui offre aux streamers la possibilité de créer des affichages animés et interactifs en collaboration avec leur communauté via divers "twools". Cette application propose une variété de fonctionnalités telles que des mini-jeux, des sondages, des éléments 3D, ainsi que des roues de la chance, parmi d'autres options.`,
      client_side_infos:
        "En ce qui concerne la partie client, l'application est construite en utilisant Next.js pour le développement, Tailwind pour la conception de l'interface, et React Three Fiber pour les composants 3D.",
      server_side_infos:
        "Le serveur est administré grâce à Next.js, et en ce qui concerne la base de données, j'ai initialement choisi MongoDB, mais j'ai ensuite migré vers Supabase pour la gestion des données en temps réel. Enfin, j'ai commencé avec une API REST avant de migrer vers GraphQL pour une gestion encore plus efficace des données en temps réel.",
      clicked: false,
      date: 2023,
      technologies: ["Next JS", "Supabase", "GraphQL", "Tailwind"],
      image: "LOGO_TWOOLS.png",
      video: "/videos/twools.mp4",
      about: "Developpement fullstack",
      link: "https://github.com/Mehdi-Zouaoui/Twools",
    },

    {
      title: "Bibliothèques Cinéma",
      content:
        "Une plateforme en ligne qui permet aux utilisateurs d'enregistrer leurs films favoris ou de constituer leur propre liste de films à regarder.",
      description:
        "MoviesBoard est une bibliothèque personnelle conçue pour que vous puissiez sauvegarder vos films favoris. Elle offre également la possibilité d'accéder aux détails sur le casting ainsi qu'à une sélection de films similaires, garantissant ainsi que vous aurez toujours un film à découvrir ou à regarder !",
      client_side_infos:
        "Le projet est réalisé en utilisant React, avec l'API The Movie DB pour obtenir les informations sur les films. Le design côté client est pris en charge grâce à Bootstrap, et j'ai du intégré certaines bibliothèques React, notamment pour la création d'un slider.",
      server_side_infos: "Le serveur est un serveur local JSON",
      clicked: false,
      about: "Developpement frontend ",
      link: "https://github.com/Mehdi-Zouaoui/MoviesBoard",
      video: "/videos/moviesBoard.mp4",
      date: 2020,
      technologies: ["React", "Scss", "RESTapi", "JSON"],
    },
    {
      title: "DeezWeb",
      content:
        "Utilisation de l'API de Deezer pour concevoir un site web capable de permettre aux utilisateurs de rechercher et de mémoriser leurs chansons préférées.",
      about: "Developpement fullstack",
      description: `DeezWeb constitue une médiathèque musicale alimentée par l'API de Deezer, offrant la possibilité d'inclure ses chansons favorites, de les retirer, et de créer des listes de lecture.`,
      client_side_infos:
        "Projet développé avec Javascript sans framework. On utilise l'api de Deezer pour récupérer les données des musiques. Le style du client est géré avec bootstrap et CSS",
      server_side_infos:
        "L'application est serverless. Les informations sauvegardées sont stocké dans le local storage et le session Storage",
      clicked: false,
      link: "",
      date: 2020,
      video: "/videos/deezWeb.mp4",
      technologies: ["JS", "Bootstrap"],
    },
    {
      title: "Site promotionel",
      content:
        "Un site web promotionnel dédié à la sortie du dernier album d'un artiste.",
      description: `Projet de site publicitaire pour l'album Chocolat de Roméo Elvis inspiré de sa charte graphique rassemblant toutes les informations importantes autour de sa musique`,
      client_side_infos:
        "L'intégralité du projet est développée avec JS HTML et CSS sans framework le challenge étant plustot accès sur le design.",
      server_side_infos: "Uniquement une base de données firebase",
      clicked: false,
      about: "Developpement frontend",
      link: "",
      video: "",
      image: "/RE.jpg",
      date: 2019,
      technologies: ["JS", "Firebase", "HTML", "CSS"],
    },
    {
      title: "Site E-commerce",
      content:
        "Plateforme publicitaire et de vente en ligne développée pour une entreprise",
      description: `Le site vitrine de Newmade Audiovisuel, la partie e-commerce est développé mais pas encore en ligne.`,
      client_side_infos:
        "Site entièrement développer avec Next JS et des librairies tierce pour gérer certains composants. Le style est géré avec Scss",
      server_side_infos:
        "Développer avec Next JS. Pour gérer la base de données j'ai utilisé MongoDB",
      clicked: false,
      about: "Developpement frontend",
      link: "",
      date: 2022,
      video: "/videos/newmade.mp4",
      technologies: ["Next JS", "MongoDB", "Scss"],
    },
  ]);
  useLayoutEffect(() => {}, [items]);
  const itemsRef = useRef([...Array(items.length)].map(() => createRef()));
  const sendProps = (item) => {
    Router.push({
      pathname: `/projects/${item.title.toLowerCase()}`,
      query: {
        title: item.title,
        content: item.content,
        description: item.description,
        client_side_infos: item.client_side_infos,
        server_side_infos: item.server_side_infos,
        about: item.about,
        link: item.link,
        video: item.video,
        technologies: item.technologies,
        image: item.image,
      },
    });
  };
  useEffect(() => {
    setWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
    const resizeListener = () => {
      // change width from the state object
      setWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  // const elasticAnimation = (item, i) => {
  //   let ctx;
  //   const newItems = [...items];
  //   newItems.forEach((it, ind) => {
  //     if (i === ind) it.clicked = true;
  //     else it.clicked = false;
  //   });
  //   setItems(newItems);

  //   if (width >= 800) {
  //     ctx = gsap.context(() => {
  //       itemsRef.current.forEach((el, index) => {
  //         gsap.to(el.current, {
  //           height: "40vh",
  //           width: items[index].clicked ? "10vw" : "8vw",
  //           duration: 2,
  //           ease: "elastic(1, .3)",
  //         });

  //         gsap.to(el.current, {
  //           height: "40vh",
  //           width: items[index].clicked ? "30vw" : "16vw",
  //           duration: 2.5,
  //           ease: "elastic(1, .3)",
  //         });
  //       });
  //     }, comp);
  //   }
  //   if (width < 800) {
  //     ctx = gsap.context(() => {
  //       itemsRef.current.forEach((el, index) => {
  //         gsap.to(el.current, {
  //           height: items[index].clicked ? "10vh" : "8vh",
  //           duration: 2,
  //           ease: "elastic(1, .3)",
  //         });
  //         gsap.to(el.current, {
  //           height: items[index].clicked ? "50vh" : "10vh",
  //           duration: 2.5,
  //           ease: "elastic(1, .3)",
  //         });
  //       });
  //     }, comp);
  //   }

  //   return () => ctx.revert(); // cleanup
  // };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          className={
            width >= 800
              ? ` ${styles.sliderItem_long} `
              : ` ${styles.sliderItem_short}`
          }
          ref={itemsRef.current[index]}
          // onClick={() => elasticAnimation(item, index)}
          key={index}
        >
          <div className={styles.item_content_container}>
            <h3 className={styles.item_title}>{item.title}</h3>
            <div className={styles.item_content_details}>
              <div className={styles.item_calendar}>
                <span>Date</span>
                <p>{item.date}</p>
              </div>
              <p className={styles.item_content}>{item.content}</p>
            </div>
            <div className={styles.item_technologies_container}>
              <span>Technologies</span>
              <div className={styles.item_technologies_wrapper}>
                {item.technologies.map((tech, index) => (
                  <div key={index}>
                    <FontAwesomeIcon
                      style={{ marginRight: "10px" }}
                      icon={faCaretRight}
                    />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={styles.item_learn_more}
              onClick={() => {
                sendProps(item);
              }}
            >
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          {/* <img src={item.img} className={styles.sliderItem_img} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Slider;
