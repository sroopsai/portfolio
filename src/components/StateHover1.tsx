import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateHover1.module.css";

export type StateHover1Type = {
  className?: string;
  twitter?: string;
  elias?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propColor?: CSSProperties["color"];
};

const StateHover1: FunctionComponent<StateHover1Type> = ({
  className = "",
  twitter,
  elias,
  propPosition,
  propTop,
  propLeft,
  propColor,
}) => {
  const stateHoverStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  const eliasStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={[styles.statehover, className].join(" ")}
      style={stateHoverStyle}
    >
      <img className={styles.twitterIcon} alt="" src={twitter} />
      <div className={styles.elias} style={eliasStyle}>
        {elias}
      </div>
    </div>
  );
};

export default StateHover1;
