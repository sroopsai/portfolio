import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DribbleIcon.module.css";

export type DribbleIconType = {
  className?: string;
  dribble?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const DribbleIcon: FunctionComponent<DribbleIconType> = ({
  className = "",
  dribble,
  propWidth,
  propHeight,
}) => {
  const dribbleIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <img
      className={[styles.dribbleIcon, className].join(" ")}
      alt=""
      src={dribble}
      style={dribbleIcon1Style}
    />
  );
};

export default DribbleIcon;
