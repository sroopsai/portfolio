import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./H1.module.css";

export type H1Type = {
  className?: string;
  categoryLabel?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propFontSize?: CSSProperties["fontSize"];
  propFontSize1?: CSSProperties["fontSize"];
};

const H1: FunctionComponent<H1Type> = ({
  className = "",
  categoryLabel,
  propTop,
  propLeft,
  propHeight,
  propWidth,
  propRight,
  propBottom,
  propFontSize,
  propFontSize1,
}) => {
  const h21Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      height: propHeight,
      width: propWidth,
      right: propRight,
      bottom: propBottom,
    };
  }, [propTop, propLeft, propHeight, propWidth, propRight, propBottom]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
    };
  }, [propFontSize]);

  const smallProjectsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize1,
    };
  }, [propFontSize1]);

  return (
    <div className={[styles.h2, className].join(" ")} style={h21Style}>
      <div className={styles.div} style={div1Style}>
        #
      </div>
      <div className={styles.smallProjects} style={smallProjectsStyle}>
        {categoryLabel}
      </div>
    </div>
  );
};

export default H1;
