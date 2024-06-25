import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateActive from "./StateActive";
import StateOpen from "./StateOpen";
import styles from "./Header1.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.logoParent} onClick={onHeaderLinkContainerClick}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <b className={styles.elias}>Elias</b>
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
  );
};

export default Header;
