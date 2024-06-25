import { FunctionComponent } from "react";
import Dots from "../components/Dots";
import Header from "../components/Header";
import H1 from "../components/H1";
import StateHoverTypeSecondary from "../components/StateHoverTypeSecondary";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const Projects: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background overflow-hidden flex flex-col items-start justify-start gap-[11.687rem] leading-[normal] tracking-[normal] mq800:gap-[5.813rem] mq450:gap-[2.938rem]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[2.687rem] max-w-full mq800:gap-[1.313rem]">
        <section className="ml-[-1.938rem] w-[92.75rem] flex flex-row flex-wrap items-start justify-start gap-[6.437rem] max-w-[109%] shrink-0 text-left text-[2rem] text-primary font-fira-code mq800:gap-[3.188rem] mq450:gap-[1.625rem]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[5.812rem] max-w-full mq800:gap-[2.875rem] mq1125:flex-wrap mq1125:min-w-full mq450:gap-[1.438rem]">
            <div className="w-[6.813rem] flex flex-col items-end justify-start gap-[5.625rem]">
              <div className="flex flex-row items-start justify-end py-[0rem] px-[1.812rem]">
                <div className="bg-background flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="w-[2rem] flex flex-row items-start justify-start py-[0rem] px-[0.937rem] box-border">
                    <img
                      className="h-[11.938rem] w-[0.063rem] relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/line-10-stroke.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                    <img
                      className="w-[2rem] h-[2rem] relative"
                      loading="lazy"
                      alt=""
                      src="/github.svg"
                    />
                    <img
                      className="w-[2rem] h-[2rem] relative"
                      loading="lazy"
                      alt=""
                      src="/dribble.svg"
                    />
                    <img
                      className="w-[2rem] h-[2rem] relative"
                      loading="lazy"
                      alt=""
                      src="/figma.svg"
                    />
                  </div>
                </div>
              </div>
              <Dots
                showEllipseDiv
                ellipseDivVisible
                ellipseDivVisible1
                showFrameDiv={false}
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
                frameDivAlignSelf="unset"
                frameDivWidth="5.25rem"
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
            <div className="flex-1 flex flex-col items-start justify-start gap-[3.368rem] min-w-[41.625rem] max-w-full mq800:gap-[1.688rem] mq800:min-w-full">
              <Header />
              <div className="flex flex-col items-start justify-start pt-[0rem] pb-[0.881rem] pr-[1.25rem] pl-[0rem] gap-[0.75rem]">
                <div className="flex flex-row items-start justify-start">
                  <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[1.25rem] mq800:text-[1.625rem] mq450:text-[1.188rem]">
                    /
                  </h1>
                  <a className="[text-decoration:none] relative font-semibold text-white mq800:text-[1.625rem] mq450:text-[1.188rem]">
                    projects
                  </a>
                </div>
                <div className="relative text-[1rem] text-white">
                  List of my projects
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[3rem] max-w-full text-[1rem] text-gray mq800:gap-[1.5rem]">
                <H1
                  categoryLabel="complete-apps"
                  propTop="unset"
                  propLeft="unset"
                  propHeight="unset"
                  propWidth="unset"
                  propRight="unset"
                  propBottom="unset"
                  propFontSize="2rem"
                  propFontSize1="2rem"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
                  <div className="w-[64rem] h-[26.375rem] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[1rem] max-w-full">
                    <div className="h-[24.438rem] w-[20.663rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/rectangle-22@2x.png"
                      />
                      <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[7.125rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                        <div className="relative inline-block min-w-[2.438rem]">
                          HTML
                        </div>
                        <div className="relative inline-block min-w-[2.438rem]">
                          SCSS
                        </div>
                        <div className="relative inline-block min-w-[3.625rem]">
                          Python
                        </div>
                        <div className="relative inline-block min-w-[3rem]">
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
                      <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] text-[1.5rem] text-white border-t-[1px] border-solid border-gray">
                        <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq450:text-[1.188rem]">
                          ChertNodes
                        </h3>
                        <div className="self-stretch relative text-[1rem] text-gray">{`Minecraft servers hosting `}</div>
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
                          <StateHoverTypeSecondary
                            buttonText={`Cached >=`}
                            propBackgroundColor="unset"
                            propBorder="1px solid #abb2bf"
                            propPosition="unset"
                            propTop="unset"
                            propLeft="unset"
                            propPadding="0.375rem 0.937rem"
                            propColor="#abb2bf"
                            propFontSize="1rem"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch w-[20.663rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/rectangle-221@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] pr-[8.812rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                        <div className="relative inline-block min-w-[1.813rem]">
                          CSS
                        </div>
                        <div className="flex-1 relative inline-block min-w-[4.25rem]">
                          Express
                        </div>
                        <div className="flex-1 relative inline-block min-w-[4.25rem]">
                          Node.js
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
                        <h3 className="m-0 self-stretch h-[3.875rem] relative text-[1.5rem] tracking-[-0.19px] font-medium font-inherit text-white inline-block mq450:text-[1.188rem]">
                          Kahoot Answers Viewer
                        </h3>
                        <div className="relative">
                          Get answers to your kahoot quiz
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
                    <div className="h-[24.438rem] w-[20.663rem] box-border shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/rectangle-222@2x.png"
                      />
                      <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[1.125rem] pl-[0.5rem] gap-[0.5rem]">
                        <div className="relative inline-block min-w-[3rem]">
                          React
                        </div>
                        <div className="relative inline-block min-w-[4.25rem]">
                          Express
                        </div>
                        <div className="relative inline-block min-w-[6rem]">
                          Discord.js
                        </div>
                        <div className="relative inline-block min-w-[4.25rem]">
                          Node.js
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
                      <div className="self-stretch flex flex-col items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] gap-[1rem] text-white border-t-[1px] border-solid border-gray">
                        <h3 className="m-0 self-stretch relative text-[1.5rem] font-medium font-inherit mq450:text-[1.188rem]">
                          ProtectX
                        </h3>
                        <div className="self-stretch relative text-gray">
                          Discord anti-crash bot
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[1rem]">
                          <div className="self-stretch hidden flex-row items-start justify-start py-[0.5rem] px-[0.937rem] border-[1px] border-solid border-primary">
                            <div className="self-stretch relative font-medium">{`Live <~>`}</div>
                          </div>
                          <StateHoverTypeSecondary
                            buttonText={`Cached >=`}
                            propBackgroundColor="unset"
                            propBorder="1px solid #abb2bf"
                            propPosition="unset"
                            propTop="unset"
                            propLeft="unset"
                            propPadding="0.375rem 0.937rem"
                            propColor="#abb2bf"
                            propFontSize="1rem"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[43.663rem] flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1rem] max-w-full mq800:flex-wrap">
                    <div className="flex-1 box-border flex flex-col items-start justify-start min-w-[13.438rem] max-w-full shrink-0 border-[1px] border-solid border-gray">
                      <img
                        className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/rectangle-223@2x.png"
                      />
                      <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[13.625rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                        <div className="relative inline-block min-w-[2.438rem]">
                          HTML
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
                          Kotik Bot
                        </h3>
                        <div className="self-stretch relative">
                          Multi-functional discord bot
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
                    <div className="flex-1 box-border flex flex-col items-start justify-start min-w-[13.563rem] max-w-full shrink-0 border-[1px] border-solid border-gray">
                      <img
                        className="self-stretch h-[12.563rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/rectangle-224@2x.png"
                      />
                      <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[13.75rem] pl-[0.5rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
                        <div className="relative inline-block min-w-[1.813rem]">
                          Vue
                        </div>
                        <div className="relative inline-block min-w-[1.25rem]">
                          TS
                        </div>
                        <div className="relative inline-block min-w-[2.438rem]">
                          Less
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
                          Portfolio
                        </h3>
                        <div className="self-stretch relative">
                          You’re using it rn
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[1rem]">
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
                </div>
              </div>
            </div>
          </div>
          <div className="h-[25.688rem] w-[9.688rem] flex flex-col items-start justify-start pt-[16rem] px-[0rem] pb-[0rem] box-border mq450:pt-[10.375rem] mq450:box-border">
            <div className="self-stretch flex-1 relative border-[1px] border-solid border-gray" />
          </div>
        </section>
        <FrameComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;