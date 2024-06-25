import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./H.module.css";

export type HType = {
  className?: string;
  projects?: string;
  line7Stroke?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const H: FunctionComponent<HType> = ({
  className = "",
  projects,
  line7Stroke,
  propWidth,
}) => {
  const h2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.h2, className].join(" ")} style={h2Style}>
      <div className={styles.parent}>
        <div className={styles.div}>#</div>
        <div className={styles.projects}>{projects}</div>
      </div>
      <img className={styles.line7Stroke} alt="" src={line7Stroke} />
    </div>
  );
};

export default H;
