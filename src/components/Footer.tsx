import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  logo?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  logo,
  propLeft,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={[styles.footer, className].join(" ")} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.logoParent}>
                <img className={styles.logoIcon} alt="" src={logo} />
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
  );
};

export default Footer;
