import styles from "@/styles/slider.module.css";
import {
  faArrowRight,
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
        "Application web permettant aux videastes/streamers de créer overlays interactif et dynamics via des widgets/twools",
      description: `Twools est une application permettant aux streamers du créer
      affichage animé et/ou interactif avec leurs communauté vià des "twools".
      Il existe une liste non exaustive de twools comme des mini jeux, des sondage, des elements 3d ou encore des roue de la chance`,
      client_side_infos:
        "Coté client l'application est developper avec Next js et le style avec Tailwind. Pour les composant 3d j'ai utilisé React Three Fiber ",
      server_side_infos:
        "Server gérer avec Next et la base de données dans un premier temps avec MongoDB puis un migration vers Supabase pour gérer la manipulation de données en temps réel, Api GraphQL",
      clicked: false,
      date: 2023,
      technologies: ["Next JS", "Supabase", "GraphQL"],
      image: "LOGO_TWOOLS.png",
      about: "Developpement fullstack",
      link: "https://github.com/Mehdi-Zouaoui/Twools",
    },

    {
      title: "Bibliothèques Cinéma",
      content:
        "Une applicaiton pour se souvenir de tous vos films favoris dans les moindres details.",
      description: "Projet de bibliothèque personnel de vos films favoris.",
      client_side_infos: "Projet developper avec React",
      server_side_infos: "Base de données local et server JSON",
      clicked: false,
      about: "Developpement frontend ",
      link: "https://github.com/Mehdi-Zouaoui/MoviesBoard",
      date: 2020,
      technologies: ["/icons/nextJS.svg", "/icons/graphql.svg"],
    },
    {
      title: "DeezWeb",
      content: "Un clone de deezer",
      about: "Developpement fullstack",
      description: `Deez`,
      client_side_infos: " ",
      server_side_infos: null,
      clicked: false,
      link: "",
      date: 2020,
      technologies: ["/icons/nextJS.svg"],
    },
    {
      title: "Site promotionel",
      content:
        "Un site publicitaire pour la sortie du nouvel album d'un artiste en l'occurence Roméo Elvis ( créer avant les polémique autout de ce monsieur )",
      description: ``,
      client_side_infos: " ",
      server_side_infos: "",
      clicked: false,
      about: "Developpement frontend",
      link: "",
      date: 2019,
      technologies: ["/icons/nextJS.svg"],
    },
    {
      title: "Site E-commerce",
      content: "Site de vente en ligne  pour la société Newmade Audiovisuel",
      description: ``,
      client_side_infos: " ",
      server_side_infos: "",
      clicked: false,
      about: "Developpement frontend",
      link: "",
      date: 2022,
      technologies: ["/icons/nextJS.svg"],
    },
  ]);
  useLayoutEffect(() => {
    console.log("rerun");
  }, [items]);
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
  const elasticAnimation = (item, i) => {
    let ctx;
    const newItems = [...items];
    newItems.forEach((it, ind) => {
      if (i === ind) it.clicked = true;
      else it.clicked = false;
    });
    setItems(newItems);
    console.log(items);
    if (width >= 600) {
      ctx = gsap.context(() => {
        itemsRef.current.forEach((el, index) => {
          gsap.to(el.current, {
            height: "40vh",
            width: items[index].clicked ? "10vw" : "8vw",
            duration: 2,
            ease: "elastic(1, .3)",
          });

          gsap.to(el.current, {
            height: "40vh",
            width: items[index].clicked ? "25vw" : "15vw",
            duration: 2.5,
            ease: "elastic(1, .3)",
          });
        });
      }, comp);
    }
    if (width < 600) {
      ctx = gsap.context(() => {
        itemsRef.current.forEach((el, index) => {
          gsap.to(el.current, {
            height: items[index].clicked ? "10vh" : "8vh",
            duration: 2,
            ease: "elastic(1, .3)",
          });
          gsap.to(el.current, {
            height: items[index].clicked ? "30vh" : "15vh",
            duration: 2.5,
            ease: "elastic(1, .3)",
          });
        });
      }, comp);
    }

    return () => ctx.revert(); // cleanup
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          className={
            width >= 600
              ? ` ${styles.sliderItem_long} `
              : ` ${styles.sliderItem_short}`
          }
          ref={itemsRef.current[index]}
          onClick={() => elasticAnimation(item, index)}
          key={index}
        >
          <h3 className={styles.item_title}>{item.title}</h3>
          {item.clicked ? (
            <div className={styles.item_content_container}>
              <div className={styles.item_content_details}>
                <div className={styles.item_calendar}>
                  <span>Date</span>
                  <p>{item.date}</p>
                </div>
                <p className={styles.item_content}>{item.content}</p>
              </div>
              <div className={styles.item_technologies_container}>
                {" "}
                <span>Technologies</span>
                <div className={styles.item_technologies_wrapper}>
                  {item.technologies.map((tech, index) => (
                    <div key={index}>
                      {" "}
                      <FontAwesomeIcon icon={faArrowRight} />
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
          ) : (
            ""
          )}

          <FontAwesomeIcon icon={faFolder} />
          {/* <img src={item.img} className={styles.sliderItem_img} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Slider;
