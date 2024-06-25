import { FunctionComponent } from "react";
import StyleDefaultIcon from "./StyleDefaultIcon";
import styles from "./Logo.module.css";

export type LogoType = {
  className?: string;
};

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <div className={[styles.logo, className].join(" ")}>
      <StyleDefaultIcon
        dimension="/styleoutline@2x.png"
        propWidth="52px"
        propPosition="relative"
        propHeight="52px"
        propTop="unset"
        propLeft="unset"
      />
      <StyleDefaultIcon dimension="/styledefault@2x.png" />
    </div>
  );
};

export default Logo;
