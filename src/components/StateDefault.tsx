import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateDefault.module.css";

export type StateDefaultType = {
  className?: string;
  userName?: string;

  /** Style props */
  nameWidth?: CSSProperties["width"];
  nameFlex?: CSSProperties["flex"];
  nameHeight?: CSSProperties["height"];
};

const StateDefault: FunctionComponent<StateDefaultType> = ({
  className = "",
  userName,
  nameWidth,
  nameFlex,
  nameHeight,
}) => {
  const stateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      width: nameWidth,
      flex: nameFlex,
      height: nameHeight,
    };
  }, [nameWidth, nameFlex, nameHeight]);

  return (
    <div
      className={[styles.statedefault, className].join(" ")}
      style={stateDefaultStyle}
    >
      <div className={styles.name}>{userName}</div>
    </div>
  );
};

export default StateDefault;
