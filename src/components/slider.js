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
        "Application web permettant aux vidéastes/streamers de créer des overlays interactifs et dynamics via des widgets/twools",
      description: `Twools est une application permettant aux streamers du créer
      affichage animé et/ou interactif avec leurs communautés vià des "twools".
      Il existe une liste non exhaustive de twools comme des mini-jeux, des sondages, des éléments 3ds ou encore des roues de la chance.`,
      client_side_infos:
        "Côté client l'application est développée avec Next js et le style avec Tailwind. Pour les composants 3ds j'ai utilisé à react Three Fibre",
      server_side_infos:
        "Le serveur est géré avec Next JS et, pour la base de données, je suis parti dans un premier temps sur MongoDB puis ai effectué une migration vers Supabase pour gérer la manipulation de données en temps réel. Enfin je suis partie sur une API REST au départ pour migrer vers GraphQL pour, encore une fois, gérer les données en temps réel. ",
      clicked: false,
      date: 2023,
      technologies: ["Next JS", "Supabase", "GraphQL"],
      image: "LOGO_TWOOLS.png",
      video: "/videos/twools.mp4",
      about: "Developpement fullstack",
      link: "https://github.com/Mehdi-Zouaoui/Twools",
    },

    {
      title: "Bibliothèques Cinéma",
      content:
        "Une page web permettant d'enregistrer tous les films favoris d'un utilisateur ou de créer sa propre watchlist",
      description:
        "MoviesBoard est une bibliothèque personnelle pour enregistrer vos fils favoris avec la possibilité d'avoir les détails du casting et les films similaires à celui-ci choisis pour toujours avoir un film à se mettre sous la dent !",
      client_side_infos:
        "Projet développé avec React. On utilise l'api The Movie DB pour récupérer les informations des films. Le style du client est géré avec bootstrap et certaines librairies react notamment pour le slider",
      server_side_infos: "Serveur local JSON",
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
        "Manipulation de l'API de Deezer pour créer un site web qui peut rechercher et sauvegarder les musiques favoris d'un utilisateur",
      about: "Developpement fullstack",
      description: `DeezWeb est une bibliothèque musicale gérée grace à l'API de Deezer. Il est possible d'ajouter ses musiques préférées, de les supprimer et de créer des playlists.`,
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
        "Un site web publicitaire pour la sortie du nouvel album d'un artiste en l'occurrence Roméo Elvis",
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
        "Site e-commerce et publicitaire crée pour la société Newmade Audiovisuel",
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
