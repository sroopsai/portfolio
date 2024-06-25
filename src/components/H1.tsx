import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type H1Type = {
  className?: string;
  categoryLabel?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propFontSize?: CSSProperties["fontSize"];
  propFontSize1?: CSSProperties["fontSize"];
};

const H1: FunctionComponent<H1Type> = memo(
  ({
    className = "",
    categoryLabel,
    propTop,
    propLeft,
    propHeight,
    propWidth,
    propRight,
    propBottom,
    propFontSize,
    propFontSize1,
  }) => {
    const h2Style: CSSProperties = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
        height: propHeight,
        width: propWidth,
        right: propRight,
        bottom: propBottom,
      };
    }, [propTop, propLeft, propHeight, propWidth, propRight, propBottom]);

    const componentDataStyle: CSSProperties = useMemo(() => {
      return {
        fontSize: propFontSize,
      };
    }, [propFontSize]);

    const smallProjectsStyle: CSSProperties = useMemo(() => {
      return {
        fontSize: propFontSize1,
      };
    }, [propFontSize1]);

    return (
      <div
        className={`flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] text-left text-[2rem] text-primary font-fira-code ${className}`}
        style={h2Style}
      >
        <h1
          className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[1.25rem] mq800:text-[1.625rem] mq450:text-[1.188rem]"
          style={componentDataStyle}
        >
          #
        </h1>
        <h1
          className="m-0 relative text-inherit font-medium font-inherit text-white mq800:text-[1.625rem] mq450:text-[1.188rem]"
          style={smallProjectsStyle}
        >
          {categoryLabel}
        </h1>
      </div>
    );
  }
);

export default H1;
