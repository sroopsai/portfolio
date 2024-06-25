import { FunctionComponent } from "react";
import StateOpen from "./StateOpen";
import styles from "./LanguageSwitcher.module.css";

export type LanguageSwitcherType = {
  className?: string;
};

const LanguageSwitcher: FunctionComponent<LanguageSwitcherType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.languageSwitcher, className].join(" ")}>
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
      <StateOpen group58="/group-581@2x.png" />
    </div>
  );
};

export default LanguageSwitcher;
