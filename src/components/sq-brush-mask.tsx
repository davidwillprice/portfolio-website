import { ReactNode } from "react";
import Link from "next/link";

import styles from "./sq-brush.module.scss";

import Image, { StaticImageData } from "next/image";

export default function SqBrushMask({
  border = true,
  brush,
  children,
  dirTxtRight,
  external,
  imgAlt,
  img,
  linkDesc,
  linkUrl,
  imageWidth = 600,
}: {
  border?: boolean;
  brush: string;
  children?: ReactNode;
  dirTxtRight?: boolean;
  external?: boolean;
  imgAlt: string;
  img: StaticImageData;
  linkDesc?: string;
  linkUrl?: string;
  imageWidth?: number;
}) {
  const html = () => {
    const brushContent = (
      <div className={styles.brush_preview}>
        <Image
          width={imageWidth}
          height={imageWidth}
          alt={imgAlt}
          src={img.src}
          className={styles.image}
          style={{
            maskImage: "url(" + brush + ")",
            maskSize: "100%",
            WebkitMaskImage: "url(" + brush + ")",
          }}
        />
      </div>
    );
    // If a link url and description is provided, add a link around the brushcontent
    if (linkUrl && linkDesc) {
      //If the link is external, wrap in an <a> tag instead of a <Link> component
      if (external) {
        return (
          <a className={styles.link} aria-label={linkDesc} href={linkUrl}>
            {brushContent}
          </a>
        );
      } else {
        return (
          <Link className={styles.link} aria-label={linkDesc} href={linkUrl}>
            {brushContent}
          </Link>
        );
      }
    } else {
      return brushContent;
    }
  };

  return (
    <div
      className={`${
        dirTxtRight ? styles.work_example_con__r : ""
      } ${border ? styles.border : ""} ${
        styles.work_example_con
      } ${styles.brush_mask_con}`}>
      <div className={styles.text}>{children}</div>
      <div
        className={styles.brush_img_con}
        style={{ "--image-width": imageWidth + "px" } as React.CSSProperties}>
        {html()}
      </div>
    </div>
  );
}
