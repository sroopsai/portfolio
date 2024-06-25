import { FunctionComponent, memo } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = memo(({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border gap-[1.937rem] max-w-full text-left text-[1rem] text-white font-fira-code mq800:gap-[0.938rem] ${className}`}
    >
      <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-gray" />
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <div className="w-[64.063rem] flex flex-col items-start justify-start gap-[3rem] max-w-full mq800:gap-[1.5rem]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
            <div className="w-[21.625rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[4.75rem] pl-[0rem] gap-[1.5rem] mq450:flex-wrap mq450:pr-[1.25rem] mq450:box-border">
                <div className="flex flex-row items-center justify-start gap-[0.562rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/logo1@2x.png"
                  />
                  <div className="relative font-medium inline-block min-w-[3rem]">
                    Elias
                  </div>
                </div>
                <a
                  className="relative text-gray [text-decoration:none] whitespace-nowrap"
                  href="mailto:elias@elias-dev.ml"
                  target="_blank"
                >
                  elias@elias-dev.ml
                </a>
              </div>
              <div className="relative">
                Web designer and front-end developer
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.75rem] text-[1.5rem]">
              <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[4.5rem] mq450:text-[1.188rem]">
                Media
              </h3>
              <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                <img
                  className="h-[2rem] w-[2rem] relative min-h-[2rem]"
                  loading="lazy"
                  alt=""
                  src="/github.svg"
                />
                <img
                  className="h-[2rem] w-[2rem] relative min-h-[2rem]"
                  loading="lazy"
                  alt=""
                  src="/figma.svg"
                />
                <img
                  className="h-[2rem] w-[2rem] relative min-h-[2rem]"
                  loading="lazy"
                  alt=""
                  src="/discord.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-gray">
            <div className="relative">© Copyright 2022. Made by Elias</div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;