import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GithubIcon.module.css";

export type GithubIconType = {
  className?: string;
  github?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const GithubIcon: FunctionComponent<GithubIconType> = ({
  className = "",
  github,
  propWidth,
  propHeight,
}) => {
  const githubIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <img
      className={[styles.githubIcon, className].join(" ")}
      alt=""
      src={github}
      style={githubIcon1Style}
    />
  );
};

export default GithubIcon;
