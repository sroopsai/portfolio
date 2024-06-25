import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Dots from "../components/Dots";
import Complete from "../components/Complete";
import Small from "../components/Small";
import StateActive from "../components/StateActive";
import StateOpen from "../components/StateOpen";
import Media from "../components/Media";
import styles from "./Projects.module.css";

const Projects: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.projects}>
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
          dotsTop="1134px"
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
          dotsTop="1545px"
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
          showFrameDiv={false}
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="109px"
          dotsHeight="49px"
          dotsPosition="absolute"
          dotsTop="145px"
          dotsLeft="46px"
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
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.logoParent}>
                  <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
                  <div className={styles.elias}>Elias</div>
                </div>
                <a
                  className={styles.eliaseliasDevml}
                  href="mailto:elias@elias-dev.ml"
                  target="_blank"
                >
                  elias@elias-dev.ml
                </a>
              </div>
              <div className={styles.webDesignerAnd}>
                Web designer and front-end developer
              </div>
            </div>
            <div className={styles.mediaParent}>
              <div className={styles.elias}>Media</div>
              <div className={styles.githubParent}>
                <img className={styles.githubIcon} alt="" src="/github.svg" />
                <img className={styles.figmaIcon} alt="" src="/figma.svg" />
                <img className={styles.discordIcon} alt="" src="/discord.svg" />
              </div>
            </div>
          </div>
          <div className={styles.copyright2022Made}>
            © Copyright 2022. Made by Elias
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <div className={styles.parent}>
          <div className={styles.div}>/</div>
          <div className={styles.projects1}>projects</div>
        </div>
        <div className={styles.listOfMy}>List of my projects</div>
      </div>
      <Complete />
      <Small />
      <div className={styles.header}>
        <div className={styles.logoGroup} onClick={onHeaderLinkContainerClick}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <b className={styles.webDesignerAnd}>Elias</b>
        </div>
        <div className={styles.headerLinkParent}>
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
            propPadding="8px 8px 0px"
            propGap1="8px"
            propFontSize1="16px"
            propFontSize2="16px"
          />
        </div>
      </div>
      <Media
        propTop="0px"
        propLeft="17px"
        propGap="8px"
        propWidth="1px"
        propHeight="191px"
        propGap1="8px"
        propWidth1="32px"
        propHeight1="32px"
        propWidth2="32px"
        propHeight2="32px"
        propWidth3="32px"
        propHeight3="32px"
      />
    </div>
  );
};

export default Projects;
