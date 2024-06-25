import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import StyleDefaultIcon from "./StyleDefaultIcon";
import Dots from "./Dots";

export type BurgerType = {
  className?: string;
};

const Burger: FunctionComponent<BurgerType> = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/burger-open");
  }, [navigate]);

  return (
    <div
      className={`w-[360px] bg-background max-w-full overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border gap-[24px] leading-[normal] tracking-[normal] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border top-[0] z-[99] sticky max-w-full">
        <header className="flex-1 bg-background flex flex-row items-end justify-between pt-4 px-4 pb-2 box-border max-w-full gap-[20px] text-left text-base text-white font-fira-code">
          <div
            className="flex flex-row items-start justify-start gap-[8px] cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <img
                className="w-4 h-4 relative object-cover"
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
            </div>
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[48px]">
              Elias
            </a>
          </div>
          <div
            className="h-6 w-6 relative cursor-pointer"
            onClick={onFrameContainerClick1}
          >
            <div className="absolute top-[5px] left-[0px] bg-gainsboro w-6 h-0.5" />
            <div className="absolute top-[12px] left-[9px] bg-gainsboro w-[15px] h-0.5" />
          </div>
        </header>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-13xl text-white font-fira-code">
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
            <span>{`Elias is a `}</span>
            <span className="text-primary">web designer</span>
            <span>{` and `}</span>
            <span className="text-primary">front-end developer</span>
          </h1>
          <div className="self-stretch relative text-base text-gray">
            He crafts responsive websites where technologies meet creativity
          </div>
        </div>
      </section>
      <section className="self-stretch h-[318px] flex flex-row items-start justify-start py-0 px-5 box-border gap-[262px] text-left text-base text-gray font-fira-code">
        <StateHoverTypeSecondary
          buttonText="Contact me!!"
          propBackgroundColor="unset"
          propBorder="1px solid #c778dd"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propPadding="8px 15px"
          propColor="#fff"
          propFontSize="16px"
        />
        <div className="self-stretch w-80 flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-0.5">
            <div className="self-stretch flex-1 flex flex-row items-end justify-between pt-[56.6px] pb-[37.8px] pr-[11px] pl-0 relative gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <StyleDefaultIcon
                  dimension="/logo4@2x.png"
                  propWidth="104.4px"
                  propPosition="relative"
                  propHeight="104.4px"
                  propTop="unset"
                  propLeft="unset"
                />
              </div>
              <img
                className="h-full w-[307.9px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/imageremovebgpreview-2@2x.png"
              />
              <Dots
                showEllipseDiv
                ellipseDivVisible
                ellipseDivVisible1
                showFrameDiv
                ellipseDivVisible2
                frameDivVisible
                dotsWidth="56.6px"
                dotsHeight="unset"
                dotsPosition="unset"
                dotsTop="unset"
                dotsLeft="unset"
                ellipseDivWidth="4px"
                ellipseDivHeight="4px"
                ellipseDivWidth1="4px"
                ellipseDivHeight1="4px"
                ellipseDivWidth2="4px"
                ellipseDivHeight2="4px"
                ellipseDivWidth3="4px"
                ellipseDivHeight3="4px"
                ellipseDivWidth4="4px"
                ellipseDivHeight4="4px"
                ellipseDivWidth5="4px"
                ellipseDivHeight5="4px"
                ellipseDivWidth6="4px"
                ellipseDivHeight6="4px"
                ellipseDivWidth7="4px"
                ellipseDivHeight7="4px"
                ellipseDivWidth8="4px"
                ellipseDivHeight8="4px"
                ellipseDivWidth9="4px"
                ellipseDivHeight9="4px"
                ellipseDivWidth10="4px"
                ellipseDivHeight10="4px"
                ellipseDivWidth11="4px"
                ellipseDivHeight11="4px"
                ellipseDivWidth12="4px"
                ellipseDivHeight12="4px"
                ellipseDivWidth13="4px"
                ellipseDivHeight13="4px"
                ellipseDivWidth14="4px"
                ellipseDivHeight14="4px"
                frameDivAlignSelf="stretch"
                frameDivWidth="unset"
                ellipseDivWidth15="4px"
                ellipseDivHeight15="4px"
                ellipseDivWidth16="4px"
                ellipseDivHeight16="4px"
                ellipseDivWidth17="4px"
                ellipseDivHeight17="4px"
                ellipseDivWidth18="4px"
                ellipseDivHeight18="4px"
                ellipseDivWidth19="4px"
                ellipseDivHeight19="4px"
                frameDivAlignSelf1="stretch"
                frameDivWidth1="unset"
                ellipseDivWidth20="4px"
                ellipseDivHeight20="4px"
                ellipseDivWidth21="4px"
                ellipseDivHeight21="4px"
                ellipseDivWidth22="4px"
                ellipseDivHeight22="4px"
                ellipseDivWidth23="4px"
                ellipseDivHeight23="4px"
                ellipseDivWidth24="4px"
                ellipseDivHeight24="4px"
              />
            </div>
          </div>
          <div className="self-stretch bg-background flex flex-row items-start justify-start py-1.5 px-[7px] gap-[10px] z-[3] mt-[-0.1px] border-[1px] border-solid border-gray">
            <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <input
                className="m-0 w-4 h-4 relative box-border border-[1px] border-solid border-primary"
                type="checkbox"
              />
            </div>
            <div className="flex-1 relative">
              <span className="font-medium">{`Currently working on `}</span>
              <span className="font-semibold text-white">Portfolio</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Burger;