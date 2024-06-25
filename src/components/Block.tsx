import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

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

const Block: FunctionComponent<BlockType> = memo(
  ({
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
      <div
        className={`flex-1 box-border flex flex-col items-start justify-start py-1.5 px-0 gap-[7.5px] min-w-[116px] text-left text-base text-white font-fira-code border-[1px] border-solid border-gray ${className}`}
        style={blockStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
          <div className="relative font-semibold inline-block min-w-[87px]">
            {languages}
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray" />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-2 gap-[8px] text-gray">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative inline-block min-w-[96px]">
              {typeScript}
            </div>
            <div className="relative inline-block min-w-[29px]">{lua}</div>
            {!lua2 && (
              <div
                className="self-stretch w-[29px] relative hidden"
                style={luaStyle}
              >
                {lua1}
              </div>
            )}
            {!lua4 && (
              <div
                className="self-stretch w-[29px] relative hidden"
                style={lua1Style}
              >
                {lua3}
              </div>
            )}
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative inline-block min-w-[58px]">{python}</div>
            {showJavaScript && (
              <div
                className="relative inline-block min-w-[96px]"
                style={javaScriptStyle}
              >
                {javaScript}
              </div>
            )}
            {!javaScript2 && (
              <div
                className="self-stretch w-24 relative hidden"
                style={javaScript1Style}
              >
                {javaScript1}
              </div>
            )}
          </div>
          {!frameDiv && (
            <div className="self-stretch hidden flex-row items-start justify-start gap-[11px]">
              <div className="relative">{python1}</div>
              {javaScriptVisible && (
                <div
                  className="h-[21px] flex-1 relative inline-block"
                  style={javaScript2Style}
                >
                  {javaScript3}
                </div>
              )}
            </div>
          )}
          {!frameDiv1 && (
            <div className="self-stretch hidden flex-row items-start justify-start gap-[11px]">
              <div className="relative">{python2}</div>
              <div className="h-[21px] flex-1 relative inline-block">
                {javaScript4}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Block;
