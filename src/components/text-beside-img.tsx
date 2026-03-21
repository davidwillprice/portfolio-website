import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "@components/text-beside-img.module.scss";

const TextBesideImg = (props: {
  children: ReactNode;
  headerText: string;
  imgAlt: string;
  portraitImg?: boolean;
  img: StaticImageData;
}) => (
  <div className={`${styles.con} ${props.portraitImg ? styles.portrait : ""}`}>
    <div className={styles.image_con}>
      <Image src={props.img} alt={props.imgAlt} />
    </div>

    <div className={styles.text_con}>
      <h3>{props.headerText}</h3>
      {props.children}
    </div>
  </div>
);

export default TextBesideImg;
