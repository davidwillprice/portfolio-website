import { ReactNode } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import BrushOne from "@svgs/brush-bg-1";
import BrushTwo from "@svgs/brush-bg-2";
import BrushThree from "@svgs/brush-bg-3";
import BrushFour from "@svgs/brush-bg-4";
import BrushFive from "@svgs/brush-bg-5";

import styles from "./sq-brush.module.scss";

export default function SqBrushSplash({
  dirTxtRight,
  brushNo,
  children,
  external,
  imgAlt,
  img,
  linkDesc,
  linkUrl,
  extraMobBotPadding,
}: {
  dirTxtRight?: boolean;
  external?: boolean;
  brushNo: 1 | 2 | 3 | 4 | 5;
  children?: ReactNode;
  imgAlt: string;
  img: StaticImageData;
  linkDesc?: string;
  linkUrl?: string;
  extraMobBotPadding?: boolean;
}) {
  const calcModCon = () => {
    let classes = styles.work_example_con + " " + styles.brush_splash_con;
    if (dirTxtRight) {
      classes += " " + styles.work_example_con__r;
    }
    return classes;
  };
  const html = () => {
    const Brush =
      brushNo === 1
        ? BrushOne
        : brushNo === 2
          ? BrushTwo
          : brushNo === 3
            ? BrushThree
            : brushNo === 4
              ? BrushFour
              : BrushFive;
    const brushContent = (
      <div className={styles.brush_preview}>
        <Image alt={imgAlt} src={img} className={styles.image} />
        <Brush className={styles.brush_bg} />
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
    <div className={calcModCon()}>
      <div className={styles.text}>{children}</div>
      <div
        className={`${styles.brush_img_con} ${
          extraMobBotPadding ? styles.extra_mob_bot_padding : ""
        }`}>
        {html()}
      </div>
    </div>
  );
}
