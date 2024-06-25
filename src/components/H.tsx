import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type HType = {
  className?: string;
  projects?: string;
  line7Stroke?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  h2FlexWrap?: CSSProperties["flexWrap"];
  h2AlignSelf?: CSSProperties["alignSelf"];
  projectsDisplay?: CSSProperties["display"];
  projectsMinWidth?: CSSProperties["minWidth"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  frameDivWidth?: CSSProperties["width"];
  line7StrokeMaxHeight?: CSSProperties["maxHeight"];
  line7StrokeHeight?: CSSProperties["height"];
};

const H: FunctionComponent<HType> = memo(
  ({
    className = "",
    projects,
    line7Stroke,
    propWidth,
    h2FlexWrap,
    h2AlignSelf,
    projectsDisplay,
    projectsMinWidth,
    frameDivFlex,
    frameDivMinWidth,
    frameDivWidth,
    line7StrokeMaxHeight,
    line7StrokeHeight,
  }) => {
    const h21Style: CSSProperties = useMemo(() => {
      return {
        width: propWidth,
        flexWrap: h2FlexWrap,
        alignSelf: h2AlignSelf,
      };
    }, [propWidth, h2FlexWrap, h2AlignSelf]);

    const projectsStyle: CSSProperties = useMemo(() => {
      return {
        display: projectsDisplay,
        minWidth: projectsMinWidth,
      };
    }, [projectsDisplay, projectsMinWidth]);

    const frameDiv3Style: CSSProperties = useMemo(() => {
      return {
        flex: frameDivFlex,
        minWidth: frameDivMinWidth,
        width: frameDivWidth,
      };
    }, [frameDivFlex, frameDivMinWidth, frameDivWidth]);

    const line7StrokeStyle: CSSProperties = useMemo(() => {
      return {
        maxHeight: line7StrokeMaxHeight,
        height: line7StrokeHeight,
      };
    }, [line7StrokeMaxHeight, line7StrokeHeight]);

    return (
      <div
        className={`w-[701px] flex flex-row items-start justify-start gap-[16px] max-w-full text-left text-13xl text-primary font-fira-code mq800:flex-wrap ${className}`}
        style={h21Style}
      >
        <div className="flex flex-row items-start justify-start">
          <h1 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[20px] mq450:text-lgi mq800:text-7xl">
            #
          </h1>
          <h1
            className="m-0 relative text-inherit font-medium font-inherit text-white mq450:text-lgi mq800:text-7xl"
            style={projectsStyle}
          >
            {projects}
          </h1>
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[20.5px] px-0 pb-0 box-border min-w-[332px] max-w-full"
          style={frameDiv3Style}
        >
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={line7Stroke}
            style={line7StrokeStyle}
          />
        </div>
      </div>
    );
  }
);

export default H;