import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateActive from "./StateActive";
import StateOpen from "./StateOpen";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <header
      className={`self-stretch bg-background flex flex-row items-end justify-between pt-[2rem] px-[0rem] pb-[0.5rem] box-border top-[0] z-[99] sticky gap-[1.25rem] max-w-full text-left text-[1rem] text-white font-fira-code ${className}`}
    >
      <div
        className="flex flex-row items-center justify-start gap-[0.5rem] cursor-pointer"
        onClick={onHeaderLinkContainerClick}
      >
        <img
          className="h-[1rem] w-[1rem] relative object-contain"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[3rem]">
          Elias
        </a>
      </div>
      <div className="w-[27.688rem] flex flex-row items-start justify-start gap-[2rem] max-w-full mq800:w-[24.625rem] mq450:w-[22.25rem] mq450:gap-[1rem]">
        <StateActive
          pageTitle="home"
          propFontWeight="500"
          propFontSize="1rem"
          propFontWeight1="500"
          propColor="#fff"
          propFontSize1="1rem"
          onFrameContainerClick={onHeaderLinkContainerClick}
        />
        <StateActive
          pageTitle="works"
          propFontWeight="unset"
          propFontSize="1rem"
          propFontWeight1="unset"
          propColor="#abb2bf"
          propFontSize1="1rem"
        />
        <StateActive
          pageTitle="about-me"
          propFontWeight="unset"
          propFontSize="1rem"
          propFontWeight1="unset"
          propColor="#abb2bf"
          propFontSize1="1rem"
        />
        <StateActive
          pageTitle="contacts"
          propFontWeight="unset"
          propFontSize="1rem"
          propFontWeight1="unset"
          propColor="#abb2bf"
          propFontSize1="1rem"
        />
        <StateOpen
          group58="/group-58.svg"
          propGap="0.25rem"
          propFontSize="1rem"
          propWidth="0.625rem"
          propHeight="0.313rem"
          propHeight1="0.063rem"
          propOverflow="hidden"
          propOpacity="0"
          propTop="1.563rem"
          propLeft="0rem"
          propPadding="0rem 0.437rem"
          propGap1="0.5rem"
          propFontSize1="1rem"
          propFontSize2="1rem"
        />
      </div>
    </header>
  );
});

export default Header;
