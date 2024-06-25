import { FunctionComponent, memo } from "react";
import Dots from "./Dots";
import H1 from "./H1";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = memo(
  ({ className = "" }) => {
    return (
      <section
        className={`ml-[-4.813rem] w-[91.625rem] flex flex-row items-start justify-between max-w-[108%] shrink-0 gap-[1.25rem] text-left text-[2rem] text-primary font-fira-code mq1325:flex-wrap ${className}`}
      >
        <div className="h-[42.688rem] w-[9.688rem] flex flex-col items-start justify-start gap-[26.562rem]">
          <div className="self-stretch flex-1 relative border-[1px] border-solid border-gray" />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.625rem]">
            <Dots
              showEllipseDiv
              ellipseDivVisible
              ellipseDivVisible1
              showFrameDiv
              ellipseDivVisible2
              frameDivVisible
              dotsWidth="unset"
              dotsHeight="unset"
              dotsPosition="unset"
              dotsTop="unset"
              dotsLeft="unset"
              ellipseDivWidth="0.25rem"
              ellipseDivHeight="0.25rem"
              ellipseDivWidth1="0.25rem"
              ellipseDivHeight1="0.25rem"
              ellipseDivWidth2="0.25rem"
              ellipseDivHeight2="0.25rem"
              ellipseDivWidth3="0.25rem"
              ellipseDivHeight3="0.25rem"
              ellipseDivWidth4="0.25rem"
              ellipseDivHeight4="0.25rem"
              ellipseDivWidth5="0.25rem"
              ellipseDivHeight5="0.25rem"
              ellipseDivWidth6="0.25rem"
              ellipseDivHeight6="0.25rem"
              ellipseDivWidth7="0.25rem"
              ellipseDivHeight7="0.25rem"
              ellipseDivWidth8="0.25rem"
              ellipseDivHeight8="0.25rem"
              ellipseDivWidth9="0.25rem"
              ellipseDivHeight9="0.25rem"
              ellipseDivWidth10="0.25rem"
              ellipseDivHeight10="0.25rem"
              ellipseDivWidth11="0.25rem"
              ellipseDivHeight11="0.25rem"
              ellipseDivWidth12="0.25rem"
              ellipseDivHeight12="0.25rem"
              ellipseDivWidth13="0.25rem"
              ellipseDivHeight13="0.25rem"
              ellipseDivWidth14="0.25rem"
              ellipseDivHeight14="0.25rem"
              frameDivAlignSelf="stretch"
              frameDivWidth="unset"
              ellipseDivWidth15="0.25rem"
              ellipseDivHeight15="0.25rem"
              ellipseDivWidth16="0.25rem"
              ellipseDivHeight16="0.25rem"
              ellipseDivWidth17="0.25rem"
              ellipseDivHeight17="0.25rem"
              ellipseDivWidth18="0.25rem"
              ellipseDivHeight18="0.25rem"
              ellipseDivWidth19="0.25rem"
              ellipseDivHeight19="0.25rem"
              frameDivAlignSelf1="stretch"
              frameDivWidth1="unset"
              ellipseDivWidth20="0.25rem"
              ellipseDivHeight20="0.25rem"
              ellipseDivWidth21="0.25rem"
              ellipseDivHeight21="0.25rem"
              ellipseDivWidth22="0.25rem"
              ellipseDivHeight22="0.25rem"
              ellipseDivWidth23="0.25rem"
              ellipseDivHeight23="0.25rem"
              ellipseDivWidth24="0.25rem"
              ellipseDivHeight24="0.25rem"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[2.375rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[3rem] max-w-full mq800:gap-[1.5rem]">
            <H1 categoryLabel="small-projects" />
            <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1rem] text-gray">
              <div className="w-[64.063rem] overflow-x-auto flex flex-row items-start justify-start gap-[1rem] max-w-full">
                <div className="w-[20.813rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[10.687rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="relative inline-block min-w-[6rem]">
                      Discord.js
                    </div>
                    <div className="relative inline-block min-w-[1.25rem]">
                      TS
                    </div>
                    <div className="relative inline-block min-w-[1.25rem]">
                      JS
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit text-white mq450:text-[1.188rem]">
                      Bot boilerplate
                    </h3>
                    <div className="self-stretch relative">
                      Start creating scalable discord.js bot with typescript in
                      seconds
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Github <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[20.813rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[14.312rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="relative inline-block min-w-[1.813rem]">
                      VUE
                    </div>
                    <div className="relative inline-block min-w-[1.813rem]">
                      CSS
                    </div>
                    <div className="relative inline-block min-w-[1.25rem]">
                      JS
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit text-white mq450:text-[1.188rem]">
                      My blog
                    </h3>
                    <div className="self-stretch relative">
                      Front-end of my future blog website written in vue
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Github <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[20.813rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative inline-block min-w-[3rem]">
                      Figma
                    </div>
                    <div className="self-stretch w-[1.813rem] relative hidden">
                      CSS
                    </div>
                    <div className="self-stretch w-[1.25rem] relative hidden">
                      JS
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit text-white mq450:text-[1.188rem]">
                      Chess pro
                    </h3>
                    <div className="self-stretch relative">
                      Figma landing page about service for viewing chess
                      tournaments
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Figma <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[64.063rem] overflow-x-auto flex flex-row items-start justify-start gap-[1rem] max-w-full">
                <div className="w-[20.813rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative inline-block min-w-[3rem]">
                      Figma
                    </div>
                    <div className="self-stretch w-[1.25rem] relative hidden">
                      TS
                    </div>
                    <div className="self-stretch w-[1.25rem] relative hidden">
                      JS
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch h-[3.875rem] relative text-[1.5rem] tracking-[-0.17px] font-medium font-inherit text-white inline-block mq450:text-[1.188rem]">
                      Crash protect website
                    </h3>
                    <div className="self-stretch relative">
                      Figma template for website about anti-raid, anti-crash
                      discord bot
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Figma <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[20.813rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[15.437rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="relative inline-block min-w-[2.438rem]">
                      HTML
                    </div>
                    <div className="relative inline-block min-w-[1.813rem]">
                      CSS
                    </div>
                    <div className="self-stretch w-[1.25rem] relative hidden">
                      JS
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit text-white mq450:text-[1.188rem]">
                      CSS expirements
                    </h3>
                    <div className="self-stretch relative">
                      Collection of my different little projects in css
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Live <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[20.813rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[14.25rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="relative inline-block min-w-[1.813rem]">
                      Lua
                    </div>
                    <div className="relative inline-block min-w-[3.625rem]">
                      NeoVim
                    </div>
                    <div className="self-stretch w-[1.25rem] relative hidden">
                      JS
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit text-white mq450:text-[1.188rem]">
                      Web Dev nvim config
                    </h3>
                    <div className="self-stretch relative">
                      Config for neovim perfect for web developer
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Github <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[43.625rem] flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1rem] max-w-full mq800:flex-wrap">
                <div className="flex-1 box-border flex flex-col items-start justify-start min-w-[13.5rem] max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[10.125rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="relative inline-block min-w-[3.625rem]">
                      Python
                    </div>
                    <div className="relative inline-block min-w-[3rem]">
                      Quart
                    </div>
                    <div className="relative inline-block min-w-[2.438rem]">
                      HTML
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit text-white mq450:text-[1.188rem]">
                      Ooku
                    </h3>
                    <div className="relative">
                      Simple link shortener with auth
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Live <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-col items-start justify-start min-w-[13.5rem] max-w-full border-[1px] border-solid border-gray">
                  <img
                    className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative inline-block min-w-[3rem]">
                      Figma
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Quart
                    </div>
                    <div className="self-stretch w-[2.438rem] relative hidden">
                      HTML
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                    <div className="self-stretch w-[3rem] relative hidden">
                      Flask
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem] gap-[0.5rem]">
                    <div className="relative">HTML</div>
                    <div className="relative">SCSS</div>
                    <div className="relative">Python</div>
                    <div className="relative">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                    <div className="w-[3rem] relative hidden">Flask</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] border-t-[1px] border-solid border-gray">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit text-white mq450:text-[1.188rem]">
                      School website
                    </h3>
                    <div className="self-stretch relative">
                      Figma template website for my school
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[1rem]">
                      <StateHoverTypeSecondary
                        buttonText={`Figma <~>`}
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="0.375rem 0.937rem"
                        propColor="#fff"
                        propFontSize="1rem"
                      />
                      <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-gray">
                        <div className="self-stretch relative font-medium">{`Cached >=`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[6.438rem] flex flex-col items-start justify-start pt-[10.562rem] px-[0rem] pb-[0rem] box-border">
          <Dots
            showEllipseDiv
            ellipseDivVisible
            ellipseDivVisible1
            showFrameDiv
            ellipseDivVisible2
            frameDivVisible
            dotsWidth="unset"
            dotsHeight="unset"
            dotsPosition="unset"
            dotsTop="unset"
            dotsLeft="unset"
            ellipseDivWidth="0.25rem"
            ellipseDivHeight="0.25rem"
            ellipseDivWidth1="0.25rem"
            ellipseDivHeight1="0.25rem"
            ellipseDivWidth2="0.25rem"
            ellipseDivHeight2="100%"
            ellipseDivWidth3="0.25rem"
            ellipseDivHeight3="100%"
            ellipseDivWidth4="0.25rem"
            ellipseDivHeight4="100%"
            ellipseDivWidth5="0.25rem"
            ellipseDivHeight5="0.25rem"
            ellipseDivWidth6="0.25rem"
            ellipseDivHeight6="0.25rem"
            ellipseDivWidth7="0.25rem"
            ellipseDivHeight7="100%"
            ellipseDivWidth8="0.25rem"
            ellipseDivHeight8="100%"
            ellipseDivWidth9="0.25rem"
            ellipseDivHeight9="100%"
            ellipseDivWidth10="0.25rem"
            ellipseDivHeight10="0.25rem"
            ellipseDivWidth11="0.25rem"
            ellipseDivHeight11="0.25rem"
            ellipseDivWidth12="0.25rem"
            ellipseDivHeight12="100%"
            ellipseDivWidth13="0.25rem"
            ellipseDivHeight13="100%"
            ellipseDivWidth14="0.25rem"
            ellipseDivHeight14="100%"
            frameDivAlignSelf="stretch"
            frameDivWidth="unset"
            ellipseDivWidth15="0.25rem"
            ellipseDivHeight15="0.25rem"
            ellipseDivWidth16="0.25rem"
            ellipseDivHeight16="0.25rem"
            ellipseDivWidth17="0.25rem"
            ellipseDivHeight17="100%"
            ellipseDivWidth18="0.25rem"
            ellipseDivHeight18="100%"
            ellipseDivWidth19="0.25rem"
            ellipseDivHeight19="100%"
            frameDivAlignSelf1="stretch"
            frameDivWidth1="unset"
            ellipseDivWidth20="0.25rem"
            ellipseDivHeight20="0.25rem"
            ellipseDivWidth21="0.25rem"
            ellipseDivHeight21="0.25rem"
            ellipseDivWidth22="0.25rem"
            ellipseDivHeight22="100%"
            ellipseDivWidth23="0.25rem"
            ellipseDivHeight23="100%"
            ellipseDivWidth24="0.25rem"
            ellipseDivHeight24="100%"
          />
        </div>
      </section>
    );
  }
);

export default FrameComponent;
