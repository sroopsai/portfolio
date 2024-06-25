import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import styles from "./Project.module.css";

export type ProjectType = {
  className?: string;
  rectangle22?: string;
  hTML?: string;
  sCSS?: string;
  python?: string;
  flask?: string;
  chertNodes?: string;
  minecraftServersHosting?: string;
  showFlask?: boolean;
  frameDiv?: boolean;
  showFrameDiv?: boolean;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Project: FunctionComponent<ProjectType> = ({
  className = "",
  rectangle22,
  hTML,
  sCSS,
  python,
  flask,
  chertNodes,
  minecraftServersHosting,
  showFlask,
  frameDiv,
  showFrameDiv,
  propOverflow,
  propWidth,
  propWidth1,
  propAlignSelf,
}) => {
  const projectStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const flaskStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  return (
    <div className={[styles.project, className].join(" ")} style={projectStyle}>
      <img className={styles.projectChild} alt="" src={rectangle22} />
      <div className={styles.htmlParent}>
        <div className={styles.html}>{hTML}</div>
        <div className={styles.html}>{sCSS}</div>
        <div className={styles.html}>{python}</div>
        {showFlask && (
          <div className={styles.html} style={flaskStyle}>
            {flask}
          </div>
        )}
        <div className={styles.flask1}>Flask</div>
        <div className={styles.flask1}>Flask</div>
      </div>
      {!frameDiv && (
        <div className={styles.htmlGroup} style={frameDiv3Style}>
          <div className={styles.html}>HTML</div>
          <div className={styles.html}>SCSS</div>
          <div className={styles.html}>Python</div>
          <div className={styles.html}>Flask</div>
          <div className={styles.flask1}>Flask</div>
          <div className={styles.flask1}>Flask</div>
        </div>
      )}
      <div className={styles.chertnodesParent}>
        <div className={styles.chertnodes}>{chertNodes}</div>
        <div className={styles.minecraftServersHosting}>
          {minecraftServersHosting}
        </div>
        <div className={styles.instanceParent}>
          <StateHoverTypeSecondary
            buttonText={`Live <~>`}
            propBackgroundColor="unset"
            propBorder="1px solid #c778dd"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propPadding="8px 16px"
            propColor="#fff"
            propFontSize="16px"
          />
          <StateHoverTypeSecondary
            buttonText={`Cached >=`}
            propBackgroundColor="unset"
            propBorder="1px solid #abb2bf"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propPadding="8px 16px"
            propColor="#abb2bf"
            propFontSize="16px"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
