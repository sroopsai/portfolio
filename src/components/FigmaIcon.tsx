import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FigmaIcon.module.css";

export type FigmaIconType = {
  className?: string;
  figma?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const FigmaIcon: FunctionComponent<FigmaIconType> = ({
  className = "",
  figma,
  propWidth,
  propHeight,
}) => {
  const figmaIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <img
      className={[styles.figmaIcon, className].join(" ")}
      alt=""
      src={figma}
      style={figmaIcon1Style}
    />
  );
};

export default FigmaIcon;
