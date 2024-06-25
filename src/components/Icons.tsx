import { FunctionComponent } from "react";
import GithubIcon from "./GithubIcon";
import FigmaIcon from "./FigmaIcon";
import DribbleIcon from "./DribbleIcon";
import styles from "./Icons.module.css";

export type IconsType = {
  className?: string;
};

const Icons: FunctionComponent<IconsType> = ({ className = "" }) => {
  return (
    <div className={[styles.icons, className].join(" ")}>
      <img className={styles.landmarkIcon} alt="" src="/landmark.svg" />
      <GithubIcon github="/github.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.twitterIcon} alt="" src="/linkedin.svg" />
      <img className={styles.twitterIcon} alt="" src="/discord.svg" />
      <img className={styles.twitterIcon} alt="" src="/telegram.svg" />
      <img className={styles.twitterIcon} alt="" src="/email.svg" />
      <FigmaIcon figma="/figma.svg" />
      <DribbleIcon dribble="/dribble.svg" />
      <img className={styles.twitterIcon} alt="" src="/card.svg" />
      <img className={styles.twitterIcon} alt="" src="/bitcoin.svg" />
      <img className={styles.landmarkIcon} alt="" src="/play.svg" />
      <img className={styles.landmarkIcon} alt="" src="/calendar.svg" />
    </div>
  );
};

export default Icons;
