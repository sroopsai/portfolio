import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateOpen.module.css";

export type StateOpenType = {
  className?: string;
  group58?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propFontSize?: CSSProperties["fontSize"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propOverflow?: CSSProperties["overflow"];
  propOpacity?: CSSProperties["opacity"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propGap1?: CSSProperties["gap"];
  propFontSize1?: CSSProperties["fontSize"];
  propFontSize2?: CSSProperties["fontSize"];
};

const StateOpen: FunctionComponent<StateOpenType> = ({
  className = "",
  group58,
  propGap,
  propFontSize,
  propWidth,
  propHeight,
  propHeight1,
  propOverflow,
  propOpacity,
  propTop,
  propLeft,
  propPadding,
  propGap1,
  propFontSize1,
  propFontSize2,
}) => {
  const stateOpenStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const eNStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
    };
  }, [propFontSize]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      overflow: propOverflow,
      opacity: propOpacity,
      top: propTop,
      left: propLeft,
      padding: propPadding,
      gap: propGap1,
    };
  }, [
    propHeight1,
    propOverflow,
    propOpacity,
    propTop,
    propLeft,
    propPadding,
    propGap1,
  ]);

  const rUStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize1,
    };
  }, [propFontSize1]);

  const uAStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize2,
    };
  }, [propFontSize2]);

  return (
    <div
      className={[styles.stateopen, className].join(" ")}
      style={stateOpenStyle}
    >
      <div className={styles.en} style={eNStyle}>
        EN
      </div>
      <img
        className={styles.stateopenChild}
        alt=""
        src={group58}
        style={groupIconStyle}
      />
      <div className={styles.ruParent} style={frameDiv5Style}>
        <div className={styles.ru} style={rUStyle}>
          RU
        </div>
        <div className={styles.ru} style={uAStyle}>
          UA
        </div>
      </div>
    </div>
  );
};

export default StateOpen;
