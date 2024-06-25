import { FunctionComponent, useCallback } from "react";
import Dots from "./Dots";
import Footer from "./Footer";
import H from "./H";
import MessageContainer from "./MessageContainer";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import Block from "./Block";
import Project from "./Project";
import { useNavigate } from "react-router-dom";
import StyleDefaultIcon from "./StyleDefaultIcon";
import Header from "./Header";
import Media from "./Media";
import styles from "./Home.module.css";

export type HomeType = {
  className?: string;
};

const Home: FunctionComponent<HomeType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onViewAllClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  return (
    <div className={[styles.home, className].join(" ")}>
      <div className={styles.background}>
        <Dots
          showEllipseDiv
          ellipseDivVisible
          ellipseDivVisible1
          showFrameDiv
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="103px"
          dotsHeight="103px"
          dotsPosition="absolute"
          dotsTop="1622px"
          dotsLeft="1363px"
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
        <Dots
          showEllipseDiv
          ellipseDivVisible
          ellipseDivVisible1
          showFrameDiv
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="103px"
          dotsHeight="103px"
          dotsPosition="absolute"
          dotsTop="2033px"
          dotsLeft="26px"
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
        <Dots
          showEllipseDiv
          ellipseDivVisible
          ellipseDivVisible1
          showFrameDiv
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="unset"
          dotsHeight="unset"
          dotsPosition="absolute"
          dotsTop="283px"
          dotsLeft="31px"
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
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
        <div className={styles.backgroundInner} />
      </div>
      <Footer logo="/logo@2x.png" />
      <div className={styles.contact}>
        <H
          projects="contacts"
          line7Stroke="/line-7-stroke.svg"
          propWidth="317px"
        />
        <div className={styles.imInterestedInFreelanceOpWrapper}>
          <div className={styles.imInterestedIn}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={styles.contactInner}>
          <MessageContainer
            username="!Elias#3519"
            emailAddress="elias@elias.me"
          />
        </div>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMe1}>
          <div className={styles.helloImEliasContainer}>
            <p className={styles.helloImElias}>Hello, i’m Elias!</p>
            <p className={styles.helloImElias}>&nbsp;</p>
            <p
              className={styles.helloImElias}
            >{`I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. `}</p>
            <p className={styles.helloImElias}>&nbsp;</p>
            <p className={styles.helloImElias}>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>
          <StateHoverTypeSecondary
            buttonText={`Read more ->`}
            propBackgroundColor="unset"
            propBorder="1px solid #c778dd"
            propPosition="absolute"
            propTop="339px"
            propLeft="0px"
            propPadding="8px 16px"
            propColor="#fff"
            propFontSize="16px"
          />
        </div>
        <H
          projects="about-me"
          line7Stroke="/line-7-stroke1.svg"
          propWidth="516px"
        />
        <div className={styles.imageParent}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <Dots
            showEllipseDiv
            ellipseDivVisible
            ellipseDivVisible1
            showFrameDiv
            ellipseDivVisible2
            frameDivVisible
            dotsWidth="84px"
            dotsHeight="84px"
            dotsPosition="absolute"
            dotsTop="59px"
            dotsLeft="0px"
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
          <Dots
            showEllipseDiv
            ellipseDivVisible
            ellipseDivVisible1
            showFrameDiv={false}
            ellipseDivVisible2
            frameDivVisible
            dotsWidth="104px"
            dotsHeight="56px"
            dotsPosition="absolute"
            dotsTop="279px"
            dotsLeft="223px"
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
          <img
            className={styles.line7Stroke}
            alt=""
            src="/line-7-stroke2.svg"
          />
        </div>
      </div>
      <div className={styles.skills}>
        <H
          projects="skills"
          line7Stroke="/line-7-stroke3.svg"
          propWidth="391px"
        />
        <div className={styles.blockParent}>
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
            propLeft="194px"
            propTop="0px"
            propWidth="unset"
            propPosition="absolute"
            propFlex="unset"
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
            propLeft="388px"
            propTop="148px"
            propWidth="196px"
            propPosition="absolute"
            propFlex="unset"
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
            propLeft="194px"
            propTop="119px"
            propWidth="178px"
            propPosition="absolute"
            propFlex="unset"
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
            python2="Python"
            javaScript4="JavaScript"
            lua2={false}
            lua4
            showJavaScript
            javaScript2
            frameDiv
            javaScriptVisible
            frameDiv1={false}
            propLeft="388px"
            propTop="0px"
            propWidth="unset"
            propPosition="absolute"
            propFlex="unset"
            propWidth1="29px"
            propWidth2="unset"
            propWidth3="unset"
            propWidth4="unset"
            propWidth5="unset"
          />
        </div>
        <div className={styles.instanceParent}>
          <Dots
            showEllipseDiv
            ellipseDivVisible
            ellipseDivVisible1
            showFrameDiv
            ellipseDivVisible2
            frameDivVisible
            dotsWidth="63px"
            dotsHeight="63px"
            dotsPosition="absolute"
            dotsTop="38px"
            dotsLeft="0px"
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
          <Dots
            showEllipseDiv
            ellipseDivVisible
            ellipseDivVisible1
            showFrameDiv
            ellipseDivVisible2
            frameDivVisible
            dotsWidth="63px"
            dotsHeight="63px"
            dotsPosition="absolute"
            dotsTop="143px"
            dotsLeft="177px"
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
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectParent}>
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
            rectangle22="/rectangle-22@2x.png"
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
            propAlignSelf="stretch"
          />
          <Project
            rectangle22="/rectangle-22@2x.png"
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
            propWidth1="330.6px"
            propAlignSelf="unset"
          />
        </div>
        <div className={styles.h2Parent}>
          <H projects="projects" line7Stroke="/line-7-stroke4.svg" />
          <div
            className={styles.viewAll}
            onClick={onViewAllClick}
          >{`View all ~~>`}</div>
        </div>
      </div>
      <div className={styles.first}>
        <div className={styles.eliasIsAWebDesignerAndFrParent}>
          <div className={styles.eliasIsAContainer}>
            <span>{`Elias is a `}</span>
            <span className={styles.webDesigner}>web designer</span>
            <span>{` and `}</span>
            <span className={styles.webDesigner}>front-end developer</span>
          </div>
          <div className={styles.heCraftsResponsive}>
            He crafts responsive websites where technologies meet creativity
          </div>
          <StateHoverTypeSecondary
            buttonText="Contact me!!"
            propBackgroundColor="unset"
            propBorder="1px solid #c778dd"
            propPosition="absolute"
            propTop="190px"
            propLeft="0px"
            propPadding="8px 16px"
            propColor="#fff"
            propFontSize="16px"
          />
        </div>
        <div className={styles.logoParent}>
          <StyleDefaultIcon
            dimension="/logo@2x.png"
            propWidth="155px"
            propPosition="absolute"
            propHeight="155px"
            propTop="84px"
            propLeft="0px"
          />
          <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
          <Dots
            showEllipseDiv
            ellipseDivVisible
            ellipseDivVisible1
            showFrameDiv
            ellipseDivVisible2
            frameDivVisible
            dotsWidth="84px"
            dotsHeight="84px"
            dotsPosition="absolute"
            dotsTop="246px"
            dotsLeft="369px"
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
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.currentlyWorkingOnContainer}>
            <span
              className={styles.currentlyWorkingOn}
            >{`Currently working on `}</span>
            <span className={styles.portfolio}>Portfolio</span>
          </div>
        </div>
      </div>
      <div className={styles.quote}>
        <div className={styles.withGreatPower}>
          With great power comes great electricity bill
        </div>
        <div className={styles.wrapper}>
          <img className={styles.icon} alt="" src="/.svg" />
        </div>
        <div className={styles.drWhoWrapper}>
          <div className={styles.currentlyWorkingOnContainer}>- Dr. Who</div>
        </div>
        <div className={styles.container}>
          <img className={styles.icon} alt="" src="/.svg" />
        </div>
      </div>
      <Header />
      <Media />
    </div>
  );
};

export default Home;
