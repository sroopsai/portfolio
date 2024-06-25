import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StyleDefaultIcon.module.css";

export type StyleDefaultIconType = {
  className?: string;
  dimension?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPosition?: CSSProperties["position"];
  propHeight?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const StyleDefaultIcon: FunctionComponent<StyleDefaultIconType> = ({
  className = "",
  dimension,
  propWidth,
  propPosition,
  propHeight,
  propTop,
  propLeft,
}) => {
  const styleDefaultIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      position: propPosition,
      height: propHeight,
      top: propTop,
      left: propLeft,
    };
  }, [propWidth, propPosition, propHeight, propTop, propLeft]);

  return (
    <img
      className={[styles.styledefaultIcon, className].join(" ")}
      alt=""
      src={dimension}
      style={styleDefaultIconStyle}
    />
  );
};

export default StyleDefaultIcon;
