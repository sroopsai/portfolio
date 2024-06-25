import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";

export type ProjectType = {
  className?: string;
  rectangle22?: string;
  hTML?: string;
  sCSS?: string;
  python?: string;
  flask?: string;
  chertNodes?: string;
  minecraftServersHosting?: string;
  showFlask?: boolean;
  frameDiv?: boolean;
  showFrameDiv?: boolean;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Project: FunctionComponent<ProjectType> = memo(
  ({
    className = "",
    rectangle22,
    hTML,
    sCSS,
    python,
    flask,
    chertNodes,
    minecraftServersHosting,
    showFlask,
    frameDiv,
    showFrameDiv,
    propOverflow,
    propWidth,
    propWidth1,
    propAlignSelf,
  }) => {
    const projectStyle: CSSProperties = useMemo(() => {
      return {
        overflow: propOverflow,
      };
    }, [propOverflow]);

    const flaskStyle: CSSProperties = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const frameDiv4Style: CSSProperties = useMemo(() => {
      return {
        width: propWidth1,
        alignSelf: propAlignSelf,
      };
    }, [propWidth1, propAlignSelf]);

    return (
      <div
        className={`flex-1 box-border flex flex-col items-start justify-start min-w-[248px] max-w-full text-left text-base text-gray font-fira-code border-[1px] border-solid border-gray ${className}`}
        style={projectStyle}
      >
        <img
          className="self-stretch h-[201px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={rectangle22}
        />
        <div className="flex flex-row items-start justify-start py-2 pr-[114px] pl-2 gap-[8px] mq450:pr-5 mq450:box-border">
          <div className="relative inline-block min-w-[39px]">{hTML}</div>
          <div className="relative inline-block min-w-[39px]">{sCSS}</div>
          <div className="relative inline-block min-w-[58px]">{python}</div>
          {showFlask && (
            <div
              className="relative inline-block min-w-[48px]"
              style={flaskStyle}
            >
              {flask}
            </div>
          )}
          <div className="self-stretch w-12 relative hidden">Flask</div>
          <div className="self-stretch w-12 relative hidden">Flask</div>
        </div>
        {!frameDiv && (
          <div
            className="self-stretch hidden flex-row items-start justify-start p-2 gap-[8px]"
            style={frameDiv4Style}
          >
            <div className="relative">HTML</div>
            <div className="relative">SCSS</div>
            <div className="relative">Python</div>
            <div className="relative">Flask</div>
            <div className="w-12 relative hidden">Flask</div>
            <div className="w-12 relative hidden">Flask</div>
          </div>
        )}
        <div className="self-stretch flex flex-col items-start justify-start pt-3.5 px-4 pb-4 gap-[16px] text-5xl text-white border-t-[1px] border-solid border-gray">
          <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq450:text-lgi">
            {chertNodes}
          </h3>
          <div className="self-stretch relative text-base text-gray">
            {minecraftServersHosting}
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[16px]">
            <StateHoverTypeSecondary
              buttonText={`Live <~>`}
              propBackgroundColor="unset"
              propBorder="1px solid #c778dd"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propPadding="6px 15px"
              propColor="#fff"
              propFontSize="16px"
            />
            <StateHoverTypeSecondary
              buttonText={`Cached >=`}
              propBackgroundColor="unset"
              propBorder="1px solid #abb2bf"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propPadding="6px 15px"
              propColor="#abb2bf"
              propFontSize="16px"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Project;
