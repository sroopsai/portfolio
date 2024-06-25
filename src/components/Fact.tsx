import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Fact.module.css";

export type FactType = {
  className?: string;
  description?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const Fact: FunctionComponent<FactType> = ({
  className = "",
  description,
  propColor,
}) => {
  const iLikeWinterStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.fact, className].join(" ")}>
      <div className={styles.iLikeWinter} style={iLikeWinterStyle}>
        {description}
      </div>
    </div>
  );
};

export default Fact;
