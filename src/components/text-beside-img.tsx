import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "@components/text-beside-img.module.scss";

const TextBesideImg = (props: {
  children: ReactNode;
  headerText: string;
  img: StaticImageData;
  imgAfterTextOnDesktop?: boolean;
  imgAlt: string;
  maxImgWidth?: number;
  portraitImg?: boolean;
}) => {
  const imageCon = (
    <div className={styles.image_con}>
      <Image
        src={props.img}
        alt={props.imgAlt}
        style={{ maxWidth: props.maxImgWidth }}
      />
    </div>
  );
  return (
    <div
      className={`${styles.con} ${props.portraitImg ? styles.portrait : ""}`}>
      {props.imgAfterTextOnDesktop ? "" : imageCon}
      <div className={styles.text_con}>
        <h3>{props.headerText}</h3>
        {props.children}
      </div>
      {props.imgAfterTextOnDesktop ? imageCon : ""}
    </div>
  );
};

export default TextBesideImg;
