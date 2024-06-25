import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActive.module.css";

export type StateActiveType = {
  className?: string;
  pageTitle?: string;

  /** Style props */
  propFontWeight?: CSSProperties["fontWeight"];
  propFontSize?: CSSProperties["fontSize"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
  propFontSize1?: CSSProperties["fontSize"];

  /** Action props */
  onFrameContainerClick?: () => void;
};

const StateActive: FunctionComponent<StateActiveType> = ({
  className = "",
  pageTitle,
  propFontWeight,
  propFontSize,
  propFontWeight1,
  propColor,
  propFontSize1,
  onFrameContainerClick,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontSize: propFontSize,
    };
  }, [propFontWeight, propFontSize]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight1,
      color: propColor,
      fontSize: propFontSize1,
    };
  }, [propFontWeight1, propColor, propFontSize1]);

  return (
    <div
      className={[styles.stateactive, className].join(" ")}
      onClick={onFrameContainerClick}
    >
      <div className={styles.div} style={divStyle}>
        #
      </div>
      <div className={styles.home} style={homeStyle}>
        {pageTitle}
      </div>
    </div>
  );
};

export default StateActive;
