import styles from "@/styles/slider.module.css";
import {
  faCode,
  faDumbbell,
  faGamepad,
  faLaptop,
  faMugHot,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { createRef, useLayoutEffect, useRef, useState } from "react";
const Slider = () => {
  const comp = useRef();

  const [items, setItems] = useState([
    {
      title: "Twools",
      content: "Projet entreprenarial",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Generateur de message",
      content: "Developpement Full Stack React et Express",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Bibliothèque Cinema",
      content: "Developpement Front avec React",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Documentation personnel",
      content: "Developpement Angular",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Site promotionel",
      content: "Developpement Javascript et gestion des données avec Firebase ",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Site E-commerce",
      content: "Developpement Front avec React ",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
  ]);
  useLayoutEffect(() => {
    console.log("rerun");
  }, [items]);
  const itemsRef = useRef([...Array(items.length)].map(() => createRef()));

  const elasticAnimation = (item, i) => {
    const newItems = [...items];
    newItems.forEach((it, ind) => {
      if (i === ind) it.clicked = true;
      else it.clicked = false;
    });
    setItems(newItems);
    console.log(items);
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((el, index) => {
        gsap.to(el.current, {
          width: items[index].clicked ? "10vw" : "8vw",
          duration: 2,
          ease: "elastic(1, .3)",
        });

        gsap.to(el.current, {
          width: items[index].clicked ? "25vw" : "13vw",
          duration: 2.5,
          ease: "elastic(1, .3)",
        });
      });
    }, comp);

    return () => ctx.revert(); // cleanup
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          className={styles.sliderItem}
          ref={itemsRef.current[index]}
          style={{
            backgroundImage: `  linear-gradient(
            rgba(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0.7)
          )`,
          }}
          onClick={() => elasticAnimation(item, index)}
          key={index}
        >
          <h2 className={styles.item_title}>{item.title}</h2>
          {item.clicked ? (
            <div className={styles.item_content_container}>
              <p className={styles.item_content}>{item.content}</p>
              <div className={styles.item_learn_more}>Learn More</div>
            </div>
          ) : (
            ""
          )}

          <FontAwesomeIcon icon={faLaptop} />
          {/* <img src={item.img} className={styles.sliderItem_img} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Slider;
