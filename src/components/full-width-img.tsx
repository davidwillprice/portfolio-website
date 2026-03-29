import Image, { StaticImageData } from "next/image";

import styles from "./full-width-img.module.scss";

const FullWidthImage = (props: { img: StaticImageData; imgAlt: string }) => (
  <section className={styles.container}>
    <Image src={props.img} alt={props.imgAlt} />
  </section>
);

export default FullWidthImage;
