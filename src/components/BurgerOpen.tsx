import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateOpen from "./StateOpen";
import GithubIcon from "./GithubIcon";
import DribbleIcon from "./DribbleIcon";
import FigmaIcon from "./FigmaIcon";
import styles from "./BurgerOpen.module.css";

export type BurgerOpenType = {
  className?: string;
};

const BurgerOpen: FunctionComponent<BurgerOpenType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/burger");
  }, [navigate]);

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onNavLinkContainerClick1 = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={[styles.burgerOpen, className].join(" ")}>
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
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.navLinkParent}>
        <div className={styles.navLink} onClick={onFrameContainerClick}>
          <div className={styles.div}>#</div>
          <div className={styles.home}>home</div>
        </div>
        <div className={styles.navLink} onClick={onNavLinkContainerClick}>
          <div className={styles.elias}>#</div>
          <div className={styles.works}>works</div>
        </div>
        <div className={styles.navLink} onClick={onNavLinkContainerClick1}>
          <div className={styles.elias}>#</div>
          <div className={styles.works}>about-me</div>
        </div>
        <div className={styles.navLink3}>
          <div className={styles.elias}>#</div>
          <div className={styles.works}>contacts</div>
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
          propPadding="8px 8px 0px"
          propGap1="8px"
          propFontSize1="16px"
          propFontSize2="16px"
        />
      </div>
      <div className={styles.githubParent}>
        <GithubIcon github="/github1.svg" propWidth="64px" propHeight="64px" />
        <DribbleIcon
          dribble="/dribble1.svg"
          propWidth="64px"
          propHeight="64px"
        />
        <FigmaIcon figma="/figma1.svg" propWidth="64px" propHeight="64px" />
      </div>
    </div>
  );
};

export default BurgerOpen;
