import styles from "./colour-preview.module.scss";

const ColourPreview = (props: {
  hexColour: string;
  rgbColour: string;
  textColour: string;
}) => (
  <div className={styles.preview} style={{ backgroundColor: props.hexColour }}>
    <p style={{ color: props.textColour }}>
      {props.hexColour} | rgb({props.rgbColour})
    </p>
  </div>
);

export default ColourPreview;
