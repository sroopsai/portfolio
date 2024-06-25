import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Block.module.css";

export type BlockType = {
  className?: string;
  languages?: string;
  typeScript?: string;
  lua?: string;
  lua1?: string;
  lua3?: string;
  python?: string;
  javaScript?: string;
  javaScript1?: string;
  python1?: string;
  javaScript3?: string;
  python2?: string;
  javaScript4?: string;
  lua2?: boolean;
  lua4?: boolean;
  showJavaScript?: boolean;
  javaScript2?: boolean;
  frameDiv?: boolean;
  javaScriptVisible?: boolean;
  frameDiv1?: boolean;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
  propWidth?: CSSProperties["width"];
  propPosition?: CSSProperties["position"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
  propWidth4?: CSSProperties["width"];
  propWidth5?: CSSProperties["width"];
};

const Block: FunctionComponent<BlockType> = ({
  className = "",
  languages,
  typeScript,
  lua,
  lua1,
  lua3,
  python,
  javaScript,
  javaScript1,
  python1,
  javaScript3,
  python2,
  javaScript4,
  lua2,
  lua4,
  showJavaScript,
  javaScript2,
  frameDiv,
  javaScriptVisible,
  frameDiv1,
  propLeft,
  propTop,
  propWidth,
  propPosition,
  propFlex,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
  propWidth5,
}) => {
  const blockStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
      width: propWidth,
      position: propPosition,
      flex: propFlex,
    };
  }, [propLeft, propTop, propWidth, propPosition, propFlex]);

  const luaStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const lua1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const javaScriptStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const javaScript1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const javaScript2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  return (
    <div className={[styles.block, className].join(" ")} style={blockStyle}>
      <div className={styles.languagesWrapper}>
        <div className={styles.languages}>{languages}</div>
      </div>
      <div className={styles.blockChild} />
      <div className={styles.frameParent}>
        <div className={styles.typescriptParent}>
          <div className={styles.typescript}>{typeScript}</div>
          <div className={styles.typescript}>{lua}</div>
          {!lua2 && (
            <div className={styles.lua1} style={luaStyle}>
              {lua1}
            </div>
          )}
          {!lua4 && (
            <div className={styles.lua1} style={lua1Style}>
              {lua3}
            </div>
          )}
        </div>
        <div className={styles.typescriptParent}>
          <div className={styles.typescript}>{python}</div>
          {showJavaScript && (
            <div className={styles.typescript} style={javaScriptStyle}>
              {javaScript}
            </div>
          )}
          {!javaScript2 && (
            <div className={styles.javascript1} style={javaScript1Style}>
              {javaScript1}
            </div>
          )}
        </div>
        {!frameDiv && (
          <div className={styles.pythonGroup}>
            <div className={styles.typescript}>{python1}</div>
            {javaScriptVisible && (
              <div className={styles.typescript} style={javaScript2Style}>
                {javaScript3}
              </div>
            )}
          </div>
        )}
        {!frameDiv1 && (
          <div className={styles.pythonGroup}>
            <div className={styles.typescript}>{python2}</div>
            <div className={styles.typescript}>{javaScript4}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Block;
