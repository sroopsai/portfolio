import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateHoverTypeSecondary.module.css";

export type StateHoverTypeSecondaryType = {
  className?: string;
  buttonText?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propFontSize?: CSSProperties["fontSize"];
};

const StateHoverTypeSecondary: FunctionComponent<
  StateHoverTypeSecondaryType
> = ({
  className = "",
  buttonText,
  propBackgroundColor,
  propBorder,
  propPosition,
  propTop,
  propLeft,
  propPadding,
  propColor,
  propFontSize,
}) => {
  const stateHoverTypeSecondaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      position: propPosition,
      top: propTop,
      left: propLeft,
      padding: propPadding,
    };
  }, [
    propBackgroundColor,
    propBorder,
    propPosition,
    propTop,
    propLeft,
    propPadding,
  ]);

  const demoStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      fontSize: propFontSize,
    };
  }, [propColor, propFontSize]);

  return (
    <div
      className={[styles.statehoverTypesecondary, className].join(" ")}
      style={stateHoverTypeSecondaryStyle}
    >
      <div className={styles.demo} style={demoStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default StateHoverTypeSecondary;
