import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import StyleDefaultIcon from "./StyleDefaultIcon";
import Dots from "./Dots";
import styles from "./Burger.module.css";

export type BurgerType = {
  className?: string;
};

const Burger: FunctionComponent<BurgerType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/burger-open");
  }, [navigate]);

  return (
    <div className={[styles.burger, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.logoParent} onClick={onFrameContainerClick}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <b className={styles.elias}>Elias</b>
        </div>
        <div
          className={styles.rectangleParent}
          onClick={onFrameContainerClick1}
        >
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
      </div>
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
        propTop="341px"
        propLeft="-390px"
        propPadding="8px 16px"
        propColor="#fff"
        propFontSize="16px"
      />
      <div className={styles.logoGroup}>
        <StyleDefaultIcon
          dimension="/logo@2x.png"
          propWidth="104.4px"
          propPosition="absolute"
          propHeight="104.4px"
          propTop="56.6px"
          propLeft="0px"
        />
        <img
          className={styles.imageRemovebgPreview2Icon}
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
          dotsHeight="56.6px"
          dotsPosition="absolute"
          dotsTop="165.7px"
          dotsLeft="248.6px"
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
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <div className={styles.currentlyWorkingOnContainer}>
          <span
            className={styles.currentlyWorkingOn}
          >{`Currently working on `}</span>
          <span className={styles.portfolio}>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Burger;
