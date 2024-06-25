import { FunctionComponent, memo, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Media from "./Media";
import StateActive from "./StateActive";
import StateOpen from "./StateOpen";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import StyleDefaultIcon from "./StyleDefaultIcon";
import Dots from "./Dots";
import H from "./H";
import Project from "./Project";
import Block from "./Block";
import MessageContainer from "./MessageContainer";

export type HomeType = {
  className?: string;
};

const Home: FunctionComponent<HomeType> = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onViewAllClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`w-[1366px] bg-background max-w-full overflow-hidden flex flex-col items-end justify-start gap-[106px] leading-[normal] tracking-[normal] mq450:gap-[26px] mq800:gap-[53px] ${className}`}
    >
      <section className="self-stretch flex flex-col items-end justify-start pt-0 pb-[21px] pr-0 pl-[17px] box-border gap-[112px] max-w-full text-left text-base text-white font-fira-code mq450:gap-[28px] mq800:gap-[56px]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[1198px] flex flex-col items-end justify-start py-0 pr-5 pl-0 box-border max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[122px] max-w-full mq450:gap-[15px] mq800:gap-[30px] mq1300:gap-[61px]">
              <Media />
              <div className="flex-1 flex flex-col items-start justify-start gap-[62px] min-w-[666px] max-w-full mq800:gap-[15px] mq800:min-w-full mq1125:gap-[31px]">
                <div className="self-stretch bg-background flex flex-row items-end justify-between pt-8 px-0 pb-2 box-border top-[0] z-[99] sticky gap-[20px] max-w-full">
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
                  <div className="w-[443px] flex flex-row items-start justify-start gap-[32px] max-w-full mq450:w-[356px] mq450:gap-[16px] mq800:w-[394px]">
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
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[18px] max-w-full text-13xl mq1125:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[74px] px-0 pb-0 box-border min-w-[349px] max-w-full mq450:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
                        <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi mq800:text-7xl">
                          <span>{`Elias is a `}</span>
                          <span className="text-primary">web designer</span>
                          <span>{` and `}</span>
                          <span className="text-primary">
                            front-end developer
                          </span>
                        </h1>
                        <div className="w-[463px] relative text-base leading-[25px] text-gray inline-block max-w-full">
                          He crafts responsive websites where technologies meet
                          creativity
                        </div>
                      </div>
                      <StateHoverTypeSecondary
                        buttonText="Contact me!!"
                        propBackgroundColor="unset"
                        propBorder="1px solid #c778dd"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propPadding="6px 15px"
                        propColor="#fff"
                        propFontSize="16px"
                      />
                    </div>
                  </div>
                  <div className="h-[386px] w-[469px] relative min-w-[469px] max-w-full mq800:min-w-full mq1125:flex-1">
                    <StyleDefaultIcon
                      dimension="/logo3@2x.png"
                      propWidth="155px"
                      propPosition="absolute"
                      propHeight="155px"
                      propTop="84px"
                      propLeft="0px"
                    />
                    <div className="absolute top-[0px] left-[12px] w-[457px] h-[386px] flex flex-row items-end justify-end py-14 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                      <img
                        className="h-[386px] w-[457px] relative object-cover hidden max-w-full"
                        alt=""
                        src="/image1@2x.png"
                      />
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
                  </div>
                </div>
              </div>
            </div>
            <TextField
              className="[border:none] bg-[transparent] w-[474px] h-[37px] text-base max-w-full"
              placeholder="Currently working on Portfolio"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "37px",
                  paddingLeft: "8px",
                  borderRadius: "0px 0px 0px 0px",
                },
                "& .MuiInputBase-input": { paddingLeft: "10px" },
                width: "474px",
              }}
            />
          </div>
        </div>
        <header className="w-[1060px] flex flex-row items-end justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] text-left text-5xl text-white font-fira-code mq1125:flex-wrap">
          <div className="w-[712px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full shrink-0">
            <div className="self-stretch bg-background box-border flex flex-col items-start justify-start py-8 pr-0 pl-[31px] relative gap-[32px] shrink-0 max-w-full border-[1px] border-solid border-gray mq800:gap-[16px]">
              <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-lgi">
                With great power comes great electricity bill
              </h3>
              <div className="!m-[0] absolute top-[-14px] left-[11px] bg-background flex flex-col items-start justify-start py-1 px-2 box-border w-[px] h-[px]">
                <img
                  className="w-[25.5px] h-[20.7px] relative"
                  loading="lazy"
                  alt=""
                  src="/.svg"
                />
              </div>
              <div className="self-stretch h-[63px] flex flex-row items-start justify-end shrink-0">
                <div className="h-[65px] box-border flex flex-row items-start justify-start p-4 relative gap-[10px] shrink-0 border-[1px] border-solid border-gray">
                  <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi">
                    - Dr. Who
                  </h3>
                  <div className="!m-[0] absolute top-[-15px] right-[15.5px] bg-background flex flex-col items-start justify-start py-1 px-2 box-border w-[px] h-[px] z-[1]">
                    <img
                      className="w-[25.5px] h-[20.7px] relative"
                      loading="lazy"
                      alt=""
                      src="/.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[91px] w-[91px] relative box-border shrink-0 border-[1px] border-solid border-gray" />
        </header>
      </section>
      <section className="w-[1412px] flex flex-col items-end justify-start gap-[23px] max-w-[104%] shrink-0 text-left text-base text-white font-fira-code">
        <div className="w-[1363px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1027px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
            <H projects="projects" line7Stroke="/line-7-stroke4.svg" />
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div
                className="relative font-medium inline-block min-w-[116px] cursor-pointer"
                onClick={onViewAllClick}
              >{`View all ~~>`}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
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
            frameDivWidth="20px"
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
            frameDivWidth1="20px"
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
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[1213px] flex flex-row items-end justify-start py-0 pr-0 pl-5 box-border gap-[101.3px] max-w-full mq450:gap-[25px] mq800:gap-[51px] mq1300:flex-wrap">
              <div className="w-[1023.7px] flex flex-row items-start justify-start py-0 px-0 box-border gap-[16px] shrink-0 max-w-full mq1125:flex-wrap">
                <Project
                  rectangle22="/rectangle-22@2x.png"
                  hTML="HTML"
                  sCSS="SCSS"
                  python="Python"
                  flask="Flask"
                  chertNodes="ChertNodes"
                  minecraftServersHosting="Minecraft servers hosting "
                  showFlask
                  frameDiv={false}
                  showFrameDiv
                />
                <Project
                  rectangle22="/rectangle-225@2x.png"
                  hTML="React"
                  sCSS="Express"
                  python="Discord.js"
                  flask="Node.js"
                  chertNodes="ProtectX"
                  minecraftServersHosting="Discord anti-crash bot"
                  showFlask
                  frameDiv
                  showFrameDiv={false}
                  propOverflow="hidden"
                  propWidth="unset"
                  propWidth1="unset"
                  propAlignSelf="unset"
                />
                <Project
                  rectangle22="/rectangle-226@2x.png"
                  hTML="CSS"
                  sCSS="Express"
                  python="Node.js"
                  flask="Flask"
                  chertNodes="Kahoot Answers Viewer"
                  minecraftServersHosting="Get answers to your kahoot quiz"
                  showFlask={false}
                  frameDiv={false}
                  showFrameDiv={false}
                  propOverflow="unset"
                  propWidth="48px"
                  propWidth1="unset"
                  propAlignSelf="stretch"
                />
              </div>
              <div className="h-[248px] w-[155px] flex flex-col items-start justify-start shrink-0">
                <div className="self-stretch h-[155px] relative box-border shrink-0 border-[1px] border-solid border-gray" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-1.5 pr-5 pl-6 box-border max-w-full">
        <div className="w-[1024px] flex flex-col items-start justify-start gap-[12px] max-w-full">
          <H
            projects="skills"
            line7Stroke="/line-7-stroke3.svg"
            propWidth="391px"
            h2FlexWrap="wrap"
            h2AlignSelf="unset"
            projectsDisplay="inline-block"
            projectsMinWidth="116px"
            frameDivFlex="1"
            frameDivMinWidth="155px"
            frameDivWidth="unset"
            line7StrokeMaxHeight="unset"
            line7StrokeHeight="1px"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start gap-[59px] max-w-full mq800:gap-[29px] mq1125:flex-wrap">
              <div className="w-[349px] flex flex-col items-start justify-end pt-0 px-0 pb-[29px] box-border min-w-[349px] max-w-full mq450:min-w-full mq1125:flex-1">
                <div className="self-stretch flex flex-row items-end justify-start gap-[49px] mq450:flex-wrap mq450:gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[68px] min-w-[128px] mq450:flex-1">
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
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[15px]">
                      <img
                        className="h-[113px] w-[113px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/logo2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[37px] box-border min-w-[112px]">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[57px]">
                      <div className="w-[158px] h-[86px] flex flex-row items-start justify-end py-0 px-9 box-border">
                        <div className="self-stretch flex-1 relative border-[1px] border-solid border-gray" />
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                        <div className="w-[63px] flex flex-col items-start justify-end pt-0 px-0 pb-[39px] box-border">
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
                        <div className="h-[52px] w-[52px] relative box-border border-[1px] border-solid border-gray" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[380px] max-w-full mq800:flex-wrap mq800:min-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[242px] max-w-full mq450:flex-wrap">
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
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[116px]">
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
                      propFlex="unset"
                      propWidth1="29px"
                      propWidth2="29px"
                      propWidth3="87px"
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
                      propFlex="unset"
                      propWidth1="unset"
                      propWidth2="unset"
                      propWidth3="unset"
                      propWidth4="96px"
                      propWidth5="96px"
                    />
                  </div>
                </div>
                <div className="w-[196px] flex flex-col items-start justify-start gap-[16px] min-w-[196px] mq800:flex-1">
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
                    python2="Python"
                    javaScript4="JavaScript"
                    lua2={false}
                    lua4
                    showJavaScript
                    javaScript2
                    frameDiv
                    javaScriptVisible
                    frameDiv1={false}
                    propLeft="unset"
                    propTop="unset"
                    propWidth="unset"
                    propPosition="unset"
                    propFlex="unset"
                    propWidth1="29px"
                    propWidth2="unset"
                    propWidth3="unset"
                    propWidth4="unset"
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
                    propFlex="unset"
                    propWidth1="29px"
                    propWidth2="29px"
                    propWidth3="unset"
                    propWidth4="96px"
                    propWidth5="unset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1443px] flex flex-row items-start justify-center pt-0 px-0 pb-1.5 box-border gap-[91px] max-w-[106%] shrink-0 text-left text-base text-gray font-fira-code mq450:gap-[23px] mq800:gap-[45px] mq1300:flex-wrap">
        <div className="w-[838px] flex flex-row items-start justify-between py-0 pr-[75px] pl-0 box-border max-w-full gap-[20px] shrink-0 mq800:flex-wrap mq800:justify-center mq1125:pr-[37px] mq1125:box-border">
          <div className="h-[289px] w-[155px] flex flex-col items-start justify-start pt-[134px] px-0 pb-0 box-border">
            <div className="self-stretch flex-1 relative border-[1px] border-solid border-gray" />
          </div>
          <div className="w-[516px] flex flex-col items-start justify-start gap-[25px] max-w-full">
            <H
              projects="about-me"
              line7Stroke="/line-7-stroke1.svg"
              propWidth="unset"
              h2FlexWrap="unset"
              h2AlignSelf="stretch"
              projectsDisplay="unset"
              projectsMinWidth="unset"
              frameDivFlex="1"
              frameDivMinWidth="212px"
              frameDivWidth="unset"
              line7StrokeMaxHeight="100%"
              line7StrokeHeight="unset"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <div className="flex-1 relative leading-[26px] inline-block max-w-full">
                <p className="m-0">Hello, i’m Elias!</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Transforming my creativity and knowledge into a websites has
                  been my passion for over a year. I have been helping various
                  clients to establish their presence online. I always strive to
                  learn about the newest technologies and frameworks.
                </p>
              </div>
            </div>
            <div className="w-[150px] h-[37px] flex flex-row items-start justify-start py-0 px-px box-border">
              <StateHoverTypeSecondary
                propBackgroundColor="unset"
                propBorder="unset"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
                propPadding="unset"
              />
            </div>
          </div>
        </div>
        <div className="w-[343px] flex flex-row items-start justify-start max-w-full shrink-0">
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
        <div className="w-[103px] flex flex-col items-start justify-start pt-[303px] px-0 pb-0 box-border shrink-0 mq450:pt-[197px] mq450:box-border">
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
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[39px] pr-[173px] pl-[17px] box-border max-w-full text-left text-base text-gray font-fira-code mq450:pr-5 mq450:box-border mq800:pr-[43px] mq800:box-border mq1300:pr-[86px] mq1300:box-border">
        <div className="w-[1244px] flex flex-row items-end justify-between max-w-[106%] shrink-0 gap-[20px] mq1125:flex-wrap mq1125:justify-center">
          <div className="w-[726px] flex flex-col items-start justify-end pt-0 px-0 pb-[31px] box-border max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq800:flex-wrap">
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
              <div className="w-[505px] flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border min-h-[197px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[45px] mq800:gap-[22px]">
                  <H
                    projects="contacts"
                    line7Stroke="/line-7-stroke.svg"
                    propWidth="unset"
                    h2FlexWrap="unset"
                    h2AlignSelf="unset"
                    projectsDisplay="unset"
                    projectsMinWidth="unset"
                    frameDivFlex="unset"
                    frameDivMinWidth="unset"
                    frameDivWidth="127px"
                    line7StrokeMaxHeight="unset"
                    line7StrokeHeight="1px"
                  />
                  <div className="self-stretch relative font-medium">
                    I’m interested in freelance opportunities. However, if you
                    have other request or question, don’t hesitate to contact me
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MessageContainer />
        </div>
      </section>
      <section className="w-[1351px] flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full text-left text-base text-white font-fira-code">
        <div className="w-[1366px] flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[31px] max-w-[102%] shrink-0 mq800:gap-[15px]">
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
                        src="/logo@2x.png"
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
        </div>
      </section>
    </div>
  );
});

export default Home;
