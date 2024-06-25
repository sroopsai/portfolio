import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Media.module.css";

export type MediaType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propGap1?: CSSProperties["gap"];
  propWidth1?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
  propWidth2?: CSSProperties["width"];
  propHeight2?: CSSProperties["height"];
  propWidth3?: CSSProperties["width"];
  propHeight3?: CSSProperties["height"];
};

const Media: FunctionComponent<MediaType> = ({
  className = "",
  propTop,
  propLeft,
  propGap,
  propWidth,
  propHeight,
  propGap1,
  propWidth1,
  propHeight1,
  propWidth2,
  propHeight2,
  propWidth3,
  propHeight3,
}) => {
  const mediaStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      gap: propGap,
    };
  }, [propTop, propLeft, propGap]);

  const line10StrokeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const githubIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  const dribbleIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight2,
    };
  }, [propWidth2, propHeight2]);

  const figmaIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight3,
    };
  }, [propWidth3, propHeight3]);

  return (
    <div className={[styles.media, className].join(" ")} style={mediaStyle}>
      <img
        className={styles.line10Stroke}
        alt=""
        src="/line-10-stroke.svg"
        style={line10StrokeStyle}
      />
      <div className={styles.githubParent} style={frameDiv4Style}>
        <img
          className={styles.githubIcon}
          alt=""
          src="/github.svg"
          style={githubIconStyle}
        />
        <img
          className={styles.githubIcon}
          alt=""
          src="/dribble.svg"
          style={dribbleIconStyle}
        />
        <img
          className={styles.githubIcon}
          alt=""
          src="/figma.svg"
          style={figmaIconStyle}
        />
      </div>
    </div>
  );
};

export default Media;
