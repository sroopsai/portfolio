import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Dots from "./Dots";
import StateActive from "./StateActive";
import StateOpen from "./StateOpen";
import H1 from "./H1";
import Block from "./Block";
import Fact from "./Fact";

export type AboutType = {
  className?: string;
};

const About: FunctionComponent<AboutType> = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div
      className={`w-[1366px] bg-background max-w-full overflow-hidden flex flex-col items-start justify-start gap-[84.5px] leading-[normal] tracking-[normal] mq800:gap-[42px] mq450:gap-[21px] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[162px] pl-[171px] box-border gap-[93.5px] max-w-full text-left text-13xl text-primary font-fira-code mq800:gap-[47px] mq800:pl-[42px] mq800:pr-10 mq800:box-border mq450:gap-[23px] mq450:pl-5 mq450:box-border mq1300:pl-[85px] mq1300:pr-[81px] mq1300:box-border">
        <div className="ml-[-202px] w-[109px] flex flex-col items-end justify-start gap-[90px] shrink-0">
          <div className="flex flex-row items-start justify-end py-0 px-[29px]">
            <div className="bg-background flex flex-col items-start justify-start gap-[8px]">
              <div className="w-8 flex flex-row items-start justify-start py-0 px-[15px] box-border">
                <img
                  className="h-[191px] w-px relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/line-10-stroke.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="w-8 h-8 relative"
                  loading="lazy"
                  alt=""
                  src="/github.svg"
                />
                <img
                  className="w-8 h-8 relative"
                  loading="lazy"
                  alt=""
                  src="/dribble.svg"
                />
                <img
                  className="w-8 h-8 relative"
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
            frameDivAlignSelf="unset"
            frameDivWidth="84px"
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
        <div className="w-[1033px] flex flex-col items-start justify-start gap-[112px] shrink-0 max-w-full mq800:gap-[28px] mq1125:gap-[56px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[53.9px] max-w-full mq800:gap-[27px]">
            <header className="self-stretch bg-background flex flex-row items-end justify-between pt-8 px-0 pb-2 box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-base text-white font-fira-code">
              <div
                className="flex flex-row items-center justify-start gap-[8px] cursor-pointer"
                onClick={onHeaderLinkContainerClick}
              >
                <img
                  className="h-4 w-4 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/logo@2x.png"
                />
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[48px]">
                  Elias
                </a>
              </div>
              <div className="w-[443px] flex flex-row items-start justify-start gap-[32px] max-w-full mq800:w-[394px] mq450:w-[356px] mq450:gap-[16px]">
                <StateActive
                  pageTitle="home"
                  propFontWeight="500"
                  propFontSize="16px"
                  propFontWeight1="500"
                  propColor="#fff"
                  propFontSize1="16px"
                  onFrameContainerClick={onHeaderLinkContainerClick}
                />
                <StateActive
                  pageTitle="works"
                  propFontWeight="unset"
                  propFontSize="16px"
                  propFontWeight1="unset"
                  propColor="#abb2bf"
                  propFontSize1="16px"
                />
                <StateActive
                  pageTitle="about-me"
                  propFontWeight="unset"
                  propFontSize="16px"
                  propFontWeight1="unset"
                  propColor="#abb2bf"
                  propFontSize1="16px"
                />
                <StateActive
                  pageTitle="contacts"
                  propFontWeight="unset"
                  propFontSize="16px"
                  propFontWeight1="unset"
                  propColor="#abb2bf"
                  propFontSize1="16px"
                />
                <StateOpen
                  group58="/group-58.svg"
                  propGap="4px"
                  propFontSize="16px"
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
            </header>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="flex flex-col items-start justify-start gap-[15.5px]">
                <div className="flex flex-row items-start justify-start">
                  <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[20px] mq800:text-7xl mq450:text-lgi">
                    /
                  </h1>
                  <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 text-white">
                    <a className="[text-decoration:none] h-[34.6px] relative font-semibold text-[inherit] inline-block mq800:text-7xl mq450:text-lgi">
                      about-me
                    </a>
                  </div>
                </div>
                <div className="relative text-base text-white inline-block min-w-[87px]">
                  Who am i?
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-base text-gray">
                <div className="flex-1 flex flex-row items-start justify-start gap-[170px] max-w-full mq800:gap-[42px] mq450:gap-[21px] mq1125:flex-wrap mq1125:gap-[85px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border min-w-[335px] max-w-full mq450:pt-[68px] mq450:box-border">
                    <div className="self-stretch relative leading-[25px]">
                      <p className="m-0">Hello, i’m Elias!</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">{`I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. `}</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        Transforming my creativity and knowledge into a websites
                        has been my passion for over a year. I have been helping
                        various clients to establish their presence online. I
                        always strive to learn about the newest technologies and
                        frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="w-[343px] flex flex-row items-start justify-start min-w-[343px] max-w-full mq800:min-w-full mq1125:flex-1">
                    <div className="flex flex-col items-start justify-start pt-[59px] px-0 pb-0">
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
                        frameDivAlignSelf="unset"
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
                        frameDivAlignSelf1="unset"
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
                    <div className="flex-1 flex flex-col items-end justify-end pt-[279px] px-4 pb-0 box-border gap-[172px] bg-cover bg-no-repeat bg-[top] max-w-full ml-[-80px] mq450:gap-[86px]">
                      <img
                        className="w-[339px] h-[507px] relative object-cover hidden max-w-full"
                        alt=""
                        src="/image@2x.png"
                      />
                      <Dots
                        showEllipseDiv
                        ellipseDivVisible
                        ellipseDivVisible1
                        showFrameDiv={false}
                        ellipseDivVisible2
                        frameDivVisible
                        dotsWidth="104px"
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
                        frameDivAlignSelf="unset"
                        frameDivWidth="84px"
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
                      <div className="flex flex-row items-start justify-end py-0 px-2">
                        <img
                          className="h-px w-[271px] relative"
                          loading="lazy"
                          alt=""
                          src="/line-7-stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[48px] mq800:gap-[24px]">
            <H1
              categoryLabel="skills"
              propTop="unset"
              propLeft="unset"
              propHeight="unset"
              propWidth="unset"
              propRight="unset"
              propBottom="unset"
              propFontSize="32px"
              propFontSize1="32px"
            />
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[16px]">
              <Block
                languages="Languages"
                typeScript="TypeScript"
                lua="Lua"
                lua1="Lua"
                lua3="Lua"
                python="Python"
                javaScript="JavaScript"
                javaScript1="JavaScript"
                python1="Python"
                javaScript3="JavaScript"
                python2="Python"
                javaScript4="JavaScript"
                lua2={false}
                lua4={false}
                showJavaScript
                javaScript2={false}
                frameDiv={false}
                javaScriptVisible
                frameDiv1={false}
                propLeft="unset"
                propTop="unset"
                propWidth="unset"
                propPosition="unset"
                propFlex="1"
                propWidth1="29px"
                propWidth2="29px"
                propWidth3="unset"
                propWidth4="96px"
                propWidth5="unset"
              />
              <Block
                languages="Other"
                typeScript="HTML"
                lua="CSS"
                lua1="EJS"
                lua3="SCSS"
                python="REST"
                javaScript="Jinja"
                javaScript1="JavaScript"
                python1="Jinja"
                javaScript3="Express.js"
                python2="Python"
                javaScript4="JavaScript"
                lua2
                lua4
                showJavaScript
                javaScript2={false}
                frameDiv={false}
                javaScriptVisible={false}
                frameDiv1={false}
                propLeft="unset"
                propTop="unset"
                propWidth="unset"
                propPosition="unset"
                propFlex="1"
                propWidth1="unset"
                propWidth2="unset"
                propWidth3="unset"
                propWidth4="96px"
                propWidth5="96px"
              />
              <Block
                languages="Tools"
                typeScript="VSCode"
                lua="Neovim"
                lua1="Lua"
                lua3="Linux"
                python="Figma"
                javaScript="XFCE"
                javaScript1="Arch"
                python1="Git"
                javaScript3="Font Awesome"
                python2="KDE"
                javaScript4="fish"
                lua2={false}
                lua4
                showJavaScript
                javaScript2
                frameDiv
                javaScriptVisible
                frameDiv1
                propLeft="unset"
                propTop="unset"
                propWidth="unset"
                propPosition="unset"
                propFlex="1"
                propWidth1="29px"
                propWidth2="unset"
                propWidth3="unset"
                propWidth4="unset"
                propWidth5="unset"
              />
              <Block
                languages="Databases"
                typeScript="SQLite"
                lua="PostgreSQL"
                lua1="Lua"
                lua3="Lua"
                python="Mongo"
                javaScript="avaScript"
                javaScript1="JavaScript"
                python1="Python"
                javaScript3="JavaScript"
                python2="Python"
                javaScript4="JavaScript"
                lua2={false}
                lua4={false}
                showJavaScript={false}
                javaScript2={false}
                frameDiv={false}
                javaScriptVisible
                frameDiv1={false}
                propLeft="unset"
                propTop="unset"
                propWidth="unset"
                propPosition="unset"
                propFlex="1"
                propWidth1="29px"
                propWidth2="29px"
                propWidth3="87px"
                propWidth4="96px"
                propWidth5="unset"
              />
              <Block
                languages="Frameworks"
                typeScript="React"
                lua="Vue"
                lua1="Lua"
                lua3="Lua"
                python="Disnake"
                javaScript="Discord.js"
                javaScript1="JavaScript"
                python1="Flask"
                javaScript3="Express.js"
                python2="Python"
                javaScript4="JavaScript"
                lua2={false}
                lua4={false}
                showJavaScript
                javaScript2={false}
                frameDiv
                javaScriptVisible
                frameDiv1={false}
                propLeft="unset"
                propTop="unset"
                propWidth="unset"
                propPosition="unset"
                propFlex="1"
                propWidth1="29px"
                propWidth2="29px"
                propWidth3="unset"
                propWidth4="96px"
                propWidth5="unset"
              />
            </div>
          </div>
        </div>
        <div className="h-[870px] w-[155px] flex flex-col items-start justify-start pt-64 px-0 pb-0 box-border shrink-0 mq450:pt-[108px] mq450:box-border mq1125:pt-[166px] mq1125:box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[356px] shrink-0">
            <div className="self-stretch flex-1 relative border-[1px] border-solid border-gray" />
            <div className="w-[133px] flex flex-row items-start justify-start py-0 px-[15px] box-border">
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
                ellipseDivWidth="4px"
                ellipseDivHeight="100%"
                ellipseDivWidth1="4px"
                ellipseDivHeight1="100%"
                ellipseDivWidth2="4px"
                ellipseDivHeight2="100%"
                ellipseDivWidth3="4px"
                ellipseDivHeight3="100%"
                ellipseDivWidth4="4px"
                ellipseDivHeight4="100%"
                ellipseDivWidth5="4px"
                ellipseDivHeight5="100%"
                ellipseDivWidth6="4px"
                ellipseDivHeight6="100%"
                ellipseDivWidth7="4px"
                ellipseDivHeight7="100%"
                ellipseDivWidth8="4px"
                ellipseDivHeight8="100%"
                ellipseDivWidth9="4px"
                ellipseDivHeight9="100%"
                ellipseDivWidth10="4px"
                ellipseDivHeight10="100%"
                ellipseDivWidth11="4px"
                ellipseDivHeight11="100%"
                ellipseDivWidth12="4px"
                ellipseDivHeight12="100%"
                ellipseDivWidth13="4px"
                ellipseDivHeight13="100%"
                ellipseDivWidth14="4px"
                ellipseDivHeight14="100%"
                frameDivAlignSelf="stretch"
                frameDivWidth="unset"
                ellipseDivWidth15="4px"
                ellipseDivHeight15="100%"
                ellipseDivWidth16="4px"
                ellipseDivHeight16="100%"
                ellipseDivWidth17="4px"
                ellipseDivHeight17="100%"
                ellipseDivWidth18="4px"
                ellipseDivHeight18="100%"
                ellipseDivWidth19="4px"
                ellipseDivHeight19="100%"
                frameDivAlignSelf1="stretch"
                frameDivWidth1="unset"
                ellipseDivWidth20="4px"
                ellipseDivHeight20="100%"
                ellipseDivWidth21="4px"
                ellipseDivHeight21="100%"
                ellipseDivWidth22="4px"
                ellipseDivHeight22="100%"
                ellipseDivWidth23="4px"
                ellipseDivHeight23="100%"
                ellipseDivWidth24="4px"
                ellipseDivHeight24="100%"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-end justify-start py-0 pr-64 pl-[932px] box-border gap-[156px] max-w-full mq800:gap-[39px] mq800:pl-[233px] mq800:pr-16 mq800:box-border mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:flex-wrap mq1300:gap-[78px] mq1300:pl-[466px] mq1300:pr-32 mq1300:box-border">
        <div className="ml-[-1009px] w-[853px] flex flex-col items-start justify-start pt-0 px-0 pb-[76px] box-border min-h-[340px] max-w-[480%] shrink-0">
          <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="h-[196px] w-[155px] flex flex-col items-start justify-start">
              <div className="self-stretch h-[155px] relative box-border border-[1px] border-solid border-gray" />
            </div>
            <div className="w-[605px] flex flex-col items-start justify-start gap-[26px] max-w-full">
              <H1
                categoryLabel="my-fun-facts"
                propTop="unset"
                propLeft="unset"
                propHeight="unset"
                propWidth="unset"
                propRight="unset"
                propBottom="unset"
                propFontSize="32px"
                propFontSize1="32px"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq800:flex-wrap">
                  <Fact description="I like winter more than summer" />
                  <Fact
                    description="I often bike with my friends"
                    propColor="#abb2bf"
                  />
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq1125:flex-wrap">
                  <Fact propColor="unset" />
                  <Fact propColor="unset" />
                </div>
                <div className="flex flex-row items-start justify-start gap-[17px] max-w-full mq1125:flex-wrap">
                  <Fact propColor="unset" />
                  <Fact
                    description="I am still in school"
                    propColor="#abb2bf"
                  />
                </div>
                <div className="flex flex-row items-start justify-start">
                  <Fact
                    description="I don’t have any siblings"
                    propColor="#abb2bf"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[272px] w-[198px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border shrink-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <Dots
              showEllipseDiv={false}
              ellipseDivVisible={false}
              ellipseDivVisible1={false}
              showFrameDiv
              ellipseDivVisible2={false}
              frameDivVisible={false}
              dotsWidth="unset"
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
              frameDivAlignSelf="unset"
              frameDivWidth="16px"
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
              frameDivAlignSelf1="unset"
              frameDivWidth1="16px"
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
            <div className="flex flex-col items-start justify-start pt-14 px-0 pb-0">
              <img
                className="w-[113px] h-[113px] relative object-cover"
                loading="lazy"
                alt=""
                src="/logo2@2x.png"
              />
            </div>
          </div>
        </div>
        <Dots
          showEllipseDiv
          ellipseDivVisible
          ellipseDivVisible1
          showFrameDiv
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="103px"
          dotsHeight="unset"
          dotsPosition="unset"
          dotsTop="unset"
          dotsLeft="unset"
          ellipseDivWidth="4px"
          ellipseDivHeight="4px"
          ellipseDivWidth1="4px"
          ellipseDivHeight1="4px"
          ellipseDivWidth2="4px"
          ellipseDivHeight2="100%"
          ellipseDivWidth3="4px"
          ellipseDivHeight3="100%"
          ellipseDivWidth4="4px"
          ellipseDivHeight4="100%"
          ellipseDivWidth5="4px"
          ellipseDivHeight5="4px"
          ellipseDivWidth6="4px"
          ellipseDivHeight6="4px"
          ellipseDivWidth7="4px"
          ellipseDivHeight7="100%"
          ellipseDivWidth8="4px"
          ellipseDivHeight8="100%"
          ellipseDivWidth9="4px"
          ellipseDivHeight9="100%"
          ellipseDivWidth10="4px"
          ellipseDivHeight10="4px"
          ellipseDivWidth11="4px"
          ellipseDivHeight11="4px"
          ellipseDivWidth12="4px"
          ellipseDivHeight12="100%"
          ellipseDivWidth13="4px"
          ellipseDivHeight13="100%"
          ellipseDivWidth14="4px"
          ellipseDivHeight14="100%"
          frameDivAlignSelf="stretch"
          frameDivWidth="unset"
          ellipseDivWidth15="4px"
          ellipseDivHeight15="4px"
          ellipseDivWidth16="4px"
          ellipseDivHeight16="4px"
          ellipseDivWidth17="4px"
          ellipseDivHeight17="100%"
          ellipseDivWidth18="4px"
          ellipseDivHeight18="100%"
          ellipseDivWidth19="4px"
          ellipseDivHeight19="100%"
          frameDivAlignSelf1="stretch"
          frameDivWidth1="unset"
          ellipseDivWidth20="4px"
          ellipseDivHeight20="4px"
          ellipseDivWidth21="4px"
          ellipseDivHeight21="4px"
          ellipseDivWidth22="4px"
          ellipseDivHeight22="100%"
          ellipseDivWidth23="4px"
          ellipseDivHeight23="100%"
          ellipseDivWidth24="4px"
          ellipseDivHeight24="100%"
        />
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[31px] max-w-full text-left text-base text-white font-fira-code mq800:gap-[15px]">
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1025px] flex flex-col items-start justify-start gap-[48px] max-w-full mq800:gap-[24px]">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
              <div className="w-[346px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[76px] pl-0 gap-[24px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <img
                      className="h-4 w-4 relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/logo1@2x.png"
                    />
                    <div className="relative font-medium inline-block min-w-[48px]">
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
              <div className="flex flex-col items-start justify-start gap-[12px] text-5xl">
                <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[72px] mq450:text-lgi">
                  Media
                </h3>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-8 w-8 relative min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/github.svg"
                  />
                  <img
                    className="h-8 w-8 relative min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/figma.svg"
                  />
                  <img
                    className="h-8 w-8 relative min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/discord.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-gray">
              <div className="relative">© Copyright 2022. Made by Elias</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;