import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateOpen from "./StateOpen";
import GithubIcon from "./GithubIcon";
import DribbleIcon from "./DribbleIcon";
import FigmaIcon from "./FigmaIcon";

export type BurgerOpenType = {
  className?: string;
};

const BurgerOpen: FunctionComponent<BurgerOpenType> = memo(
  ({ className = "" }) => {
    const navigate = useNavigate();

    const onFrameContainerClick = useCallback(() => {
      navigate("/home");
    }, [navigate]);

    const onBackgroundContainerClick = useCallback(() => {
      navigate("/burger");
    }, [navigate]);

    const onNavLinkContainerClick = useCallback(() => {
      navigate("/");
    }, [navigate]);

    const onNavLinkContainerClick1 = useCallback(() => {
      navigate("/about");
    }, [navigate]);

    return (
      <div
        className={`w-[360px] bg-background max-w-full overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-9 box-border gap-[107px] leading-[normal] tracking-[normal] ${className}`}
      >
        <section className="self-stretch flex flex-col items-start justify-start gap-[47px] text-left text-13xl text-primary font-fira-code">
          <header className="self-stretch bg-background flex flex-row items-end justify-between pt-4 px-4 pb-2 top-[0] z-[99] sticky gap-[20px] text-left text-base text-white font-fira-code">
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
              onClick={onBackgroundContainerClick}
            >
              <div className="absolute top-[12px] left-[11px] bg-gainsboro w-px h-px" />
              <div className="absolute top-[20px] left-[3px] bg-gainsboro w-6 h-0.5 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
              <div className="absolute top-[3px] left-[4px] bg-gainsboro w-6 h-0.5 [transform:_rotate(45deg)] [transform-origin:0_0]" />
            </div>
          </header>
          <div className="flex flex-row items-start justify-start py-0 px-4">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <div
                className="flex flex-row items-start justify-start py-0 pr-5 pl-0 cursor-pointer"
                onClick={onFrameContainerClick}
              >
                <div className="relative font-medium inline-block min-w-[20px]">
                  #
                </div>
                <a className="[text-decoration:none] relative font-medium text-white inline-block min-w-[77px]">
                  home
                </a>
              </div>
              <div
                className="flex flex-row items-start justify-start py-0 pr-5 pl-0 cursor-pointer"
                onClick={onNavLinkContainerClick}
              >
                <div className="relative inline-block min-w-[20px]">#</div>
                <div className="relative text-gray inline-block min-w-[96px]">
                  works
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onNavLinkContainerClick1}
              >
                <div className="relative inline-block min-w-[20px]">#</div>
                <div className="relative text-gray">about-me</div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative inline-block min-w-[20px]">#</div>
                <div className="relative text-gray">contacts</div>
              </div>
              <StateOpen
                group58="/group-582.svg"
                propGap="4px"
                propFontSize="32px"
                propWidth="10px"
                propHeight="5px"
                propHeight1="1px"
                propOverflow="hidden"
                propOpacity="0"
                propTop="25px"
                propLeft="0px"
                propPadding="0px 7px"
                propGap1="8px"
                propFontSize1="16px"
                propFontSize2="16px"
              />
            </div>
          </div>
        </section>
        <div className="flex flex-row items-start justify-start py-0 pr-[78px] pl-[74px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <GithubIcon
              github="/github1.svg"
              propWidth="64px"
              propHeight="64px"
            />
            <DribbleIcon
              dribble="/dribble1.svg"
              propWidth="64px"
              propHeight="64px"
            />
            <FigmaIcon figma="/figma1.svg" propWidth="64px" propHeight="64px" />
          </div>
        </div>
      </div>
    );
  }
);

export default BurgerOpen;