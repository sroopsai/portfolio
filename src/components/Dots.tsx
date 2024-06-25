import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Dots.module.css";

export type DotsType = {
  className?: string;
  showEllipseDiv?: boolean;
  ellipseDivVisible?: boolean;
  ellipseDivVisible1?: boolean;
  showFrameDiv?: boolean;
  ellipseDivVisible2?: boolean;
  frameDivVisible?: boolean;

  /** Style props */
  dotsWidth?: CSSProperties["width"];
  dotsHeight?: CSSProperties["height"];
  dotsPosition?: CSSProperties["position"];
  dotsTop?: CSSProperties["top"];
  dotsLeft?: CSSProperties["left"];
  ellipseDivWidth?: CSSProperties["width"];
  ellipseDivHeight?: CSSProperties["height"];
  ellipseDivWidth1?: CSSProperties["width"];
  ellipseDivHeight1?: CSSProperties["height"];
  ellipseDivWidth2?: CSSProperties["width"];
  ellipseDivHeight2?: CSSProperties["height"];
  ellipseDivWidth3?: CSSProperties["width"];
  ellipseDivHeight3?: CSSProperties["height"];
  ellipseDivWidth4?: CSSProperties["width"];
  ellipseDivHeight4?: CSSProperties["height"];
  ellipseDivWidth5?: CSSProperties["width"];
  ellipseDivHeight5?: CSSProperties["height"];
  ellipseDivWidth6?: CSSProperties["width"];
  ellipseDivHeight6?: CSSProperties["height"];
  ellipseDivWidth7?: CSSProperties["width"];
  ellipseDivHeight7?: CSSProperties["height"];
  ellipseDivWidth8?: CSSProperties["width"];
  ellipseDivHeight8?: CSSProperties["height"];
  ellipseDivWidth9?: CSSProperties["width"];
  ellipseDivHeight9?: CSSProperties["height"];
  ellipseDivWidth10?: CSSProperties["width"];
  ellipseDivHeight10?: CSSProperties["height"];
  ellipseDivWidth11?: CSSProperties["width"];
  ellipseDivHeight11?: CSSProperties["height"];
  ellipseDivWidth12?: CSSProperties["width"];
  ellipseDivHeight12?: CSSProperties["height"];
  ellipseDivWidth13?: CSSProperties["width"];
  ellipseDivHeight13?: CSSProperties["height"];
  ellipseDivWidth14?: CSSProperties["width"];
  ellipseDivHeight14?: CSSProperties["height"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivWidth?: CSSProperties["width"];
  ellipseDivWidth15?: CSSProperties["width"];
  ellipseDivHeight15?: CSSProperties["height"];
  ellipseDivWidth16?: CSSProperties["width"];
  ellipseDivHeight16?: CSSProperties["height"];
  ellipseDivWidth17?: CSSProperties["width"];
  ellipseDivHeight17?: CSSProperties["height"];
  ellipseDivWidth18?: CSSProperties["width"];
  ellipseDivHeight18?: CSSProperties["height"];
  ellipseDivWidth19?: CSSProperties["width"];
  ellipseDivHeight19?: CSSProperties["height"];
  frameDivAlignSelf1?: CSSProperties["alignSelf"];
  frameDivWidth1?: CSSProperties["width"];
  ellipseDivWidth20?: CSSProperties["width"];
  ellipseDivHeight20?: CSSProperties["height"];
  ellipseDivWidth21?: CSSProperties["width"];
  ellipseDivHeight21?: CSSProperties["height"];
  ellipseDivWidth22?: CSSProperties["width"];
  ellipseDivHeight22?: CSSProperties["height"];
  ellipseDivWidth23?: CSSProperties["width"];
  ellipseDivHeight23?: CSSProperties["height"];
  ellipseDivWidth24?: CSSProperties["width"];
  ellipseDivHeight24?: CSSProperties["height"];
};

const Dots: FunctionComponent<DotsType> = ({
  className = "",
  showEllipseDiv,
  ellipseDivVisible,
  ellipseDivVisible1,
  showFrameDiv,
  ellipseDivVisible2,
  frameDivVisible,
  dotsWidth,
  dotsHeight,
  dotsPosition,
  dotsTop,
  dotsLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  ellipseDivWidth1,
  ellipseDivHeight1,
  ellipseDivWidth2,
  ellipseDivHeight2,
  ellipseDivWidth3,
  ellipseDivHeight3,
  ellipseDivWidth4,
  ellipseDivHeight4,
  ellipseDivWidth5,
  ellipseDivHeight5,
  ellipseDivWidth6,
  ellipseDivHeight6,
  ellipseDivWidth7,
  ellipseDivHeight7,
  ellipseDivWidth8,
  ellipseDivHeight8,
  ellipseDivWidth9,
  ellipseDivHeight9,
  ellipseDivWidth10,
  ellipseDivHeight10,
  ellipseDivWidth11,
  ellipseDivHeight11,
  ellipseDivWidth12,
  ellipseDivHeight12,
  ellipseDivWidth13,
  ellipseDivHeight13,
  ellipseDivWidth14,
  ellipseDivHeight14,
  frameDivAlignSelf,
  frameDivWidth,
  ellipseDivWidth15,
  ellipseDivHeight15,
  ellipseDivWidth16,
  ellipseDivHeight16,
  ellipseDivWidth17,
  ellipseDivHeight17,
  ellipseDivWidth18,
  ellipseDivHeight18,
  ellipseDivWidth19,
  ellipseDivHeight19,
  frameDivAlignSelf1,
  frameDivWidth1,
  ellipseDivWidth20,
  ellipseDivHeight20,
  ellipseDivWidth21,
  ellipseDivHeight21,
  ellipseDivWidth22,
  ellipseDivHeight22,
  ellipseDivWidth23,
  ellipseDivHeight23,
  ellipseDivWidth24,
  ellipseDivHeight24,
}) => {
  const dotsStyle: CSSProperties = useMemo(() => {
    return {
      width: dotsWidth,
      height: dotsHeight,
      position: dotsPosition,
      top: dotsTop,
      left: dotsLeft,
    };
  }, [dotsWidth, dotsHeight, dotsPosition, dotsTop, dotsLeft]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivWidth, ellipseDivHeight]);

  const ellipseDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth1,
      height: ellipseDivHeight1,
    };
  }, [ellipseDivWidth1, ellipseDivHeight1]);

  const ellipseDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth2,
      height: ellipseDivHeight2,
    };
  }, [ellipseDivWidth2, ellipseDivHeight2]);

  const ellipseDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth3,
      height: ellipseDivHeight3,
    };
  }, [ellipseDivWidth3, ellipseDivHeight3]);

  const ellipseDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth4,
      height: ellipseDivHeight4,
    };
  }, [ellipseDivWidth4, ellipseDivHeight4]);

  const ellipseDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth5,
      height: ellipseDivHeight5,
    };
  }, [ellipseDivWidth5, ellipseDivHeight5]);

  const ellipseDiv6Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth6,
      height: ellipseDivHeight6,
    };
  }, [ellipseDivWidth6, ellipseDivHeight6]);

  const ellipseDiv7Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth7,
      height: ellipseDivHeight7,
    };
  }, [ellipseDivWidth7, ellipseDivHeight7]);

  const ellipseDiv8Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth8,
      height: ellipseDivHeight8,
    };
  }, [ellipseDivWidth8, ellipseDivHeight8]);

  const ellipseDiv9Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth9,
      height: ellipseDivHeight9,
    };
  }, [ellipseDivWidth9, ellipseDivHeight9]);

  const ellipseDiv10Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth10,
      height: ellipseDivHeight10,
    };
  }, [ellipseDivWidth10, ellipseDivHeight10]);

  const ellipseDiv11Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth11,
      height: ellipseDivHeight11,
    };
  }, [ellipseDivWidth11, ellipseDivHeight11]);

  const ellipseDiv12Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth12,
      height: ellipseDivHeight12,
    };
  }, [ellipseDivWidth12, ellipseDivHeight12]);

  const ellipseDiv13Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth13,
      height: ellipseDivHeight13,
    };
  }, [ellipseDivWidth13, ellipseDivHeight13]);

  const ellipseDiv14Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth14,
      height: ellipseDivHeight14,
    };
  }, [ellipseDivWidth14, ellipseDivHeight14]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivWidth]);

  const ellipseDiv15Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth15,
      height: ellipseDivHeight15,
    };
  }, [ellipseDivWidth15, ellipseDivHeight15]);

  const ellipseDiv16Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth16,
      height: ellipseDivHeight16,
    };
  }, [ellipseDivWidth16, ellipseDivHeight16]);

  const ellipseDiv17Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth17,
      height: ellipseDivHeight17,
    };
  }, [ellipseDivWidth17, ellipseDivHeight17]);

  const ellipseDiv18Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth18,
      height: ellipseDivHeight18,
    };
  }, [ellipseDivWidth18, ellipseDivHeight18]);

  const ellipseDiv19Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth19,
      height: ellipseDivHeight19,
    };
  }, [ellipseDivWidth19, ellipseDivHeight19]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
      width: frameDivWidth1,
    };
  }, [frameDivAlignSelf1, frameDivWidth1]);

  const ellipseDiv20Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth20,
      height: ellipseDivHeight20,
    };
  }, [ellipseDivWidth20, ellipseDivHeight20]);

  const ellipseDiv21Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth21,
      height: ellipseDivHeight21,
    };
  }, [ellipseDivWidth21, ellipseDivHeight21]);

  const ellipseDiv22Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth22,
      height: ellipseDivHeight22,
    };
  }, [ellipseDivWidth22, ellipseDivHeight22]);

  const ellipseDiv23Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth23,
      height: ellipseDivHeight23,
    };
  }, [ellipseDivWidth23, ellipseDivHeight23]);

  const ellipseDiv24Style: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth24,
      height: ellipseDivHeight24,
    };
  }, [ellipseDivWidth24, ellipseDivHeight24]);

  return (
    <div className={[styles.dots, className].join(" ")} style={dotsStyle}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDivStyle} />
        <div className={styles.frameChild} style={ellipseDiv1Style} />
        <div className={styles.frameChild} style={ellipseDiv2Style} />
        <div className={styles.frameChild} style={ellipseDiv3Style} />
        {showEllipseDiv && (
          <div className={styles.frameChild} style={ellipseDiv4Style} />
        )}
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv5Style} />
        <div className={styles.frameChild} style={ellipseDiv6Style} />
        <div className={styles.frameChild} style={ellipseDiv7Style} />
        <div className={styles.frameChild} style={ellipseDiv8Style} />
        {ellipseDivVisible && (
          <div className={styles.frameChild} style={ellipseDiv9Style} />
        )}
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv10Style} />
        <div className={styles.frameChild} style={ellipseDiv11Style} />
        <div className={styles.frameChild} style={ellipseDiv12Style} />
        <div className={styles.frameChild} style={ellipseDiv13Style} />
        {ellipseDivVisible1 && (
          <div className={styles.frameChild} style={ellipseDiv14Style} />
        )}
      </div>
      {showFrameDiv && (
        <div className={styles.ellipseParent} style={frameDivStyle}>
          <div className={styles.frameChild} style={ellipseDiv15Style} />
          <div className={styles.frameChild} style={ellipseDiv16Style} />
          <div className={styles.frameChild} style={ellipseDiv17Style} />
          <div className={styles.frameChild} style={ellipseDiv18Style} />
          {ellipseDivVisible2 && (
            <div className={styles.frameChild} style={ellipseDiv19Style} />
          )}
        </div>
      )}
      {frameDivVisible && (
        <div className={styles.ellipseParent} style={frameDiv1Style}>
          <div className={styles.frameChild} style={ellipseDiv20Style} />
          <div className={styles.frameChild} style={ellipseDiv21Style} />
          <div className={styles.frameChild} style={ellipseDiv22Style} />
          <div className={styles.frameChild} style={ellipseDiv23Style} />
          <div className={styles.frameChild} style={ellipseDiv24Style} />
        </div>
      )}
    </div>
  );
};

export default Dots;
