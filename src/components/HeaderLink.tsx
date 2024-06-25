import { FunctionComponent } from "react";
import StateActive from "./StateActive";
import styles from "./HeaderLink.module.css";

export type HeaderLinkType = {
  className?: string;
};

const HeaderLink: FunctionComponent<HeaderLinkType> = ({ className = "" }) => {
  return (
    <div className={[styles.headerLink, className].join(" ")}>
      <StateActive
        pageTitle="home"
        propFontWeight="unset"
        propFontSize="16px"
        propFontWeight1="unset"
        propColor="#abb2bf"
        propFontSize1="16px"
      />
      <StateActive
        pageTitle="home"
        propFontWeight="unset"
        propFontSize="16px"
        propFontWeight1="unset"
        propColor="#fff"
        propFontSize1="16px"
      />
      <StateActive pageTitle="home" />
    </div>
  );
};

export default HeaderLink;
