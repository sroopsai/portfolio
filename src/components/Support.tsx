import { FunctionComponent } from "react";
import StateHover1 from "./StateHover1";
import styles from "./Support.module.css";

export type SupportType = {
  className?: string;
};

const Support: FunctionComponent<SupportType> = ({ className = "" }) => {
  return (
    <div className={[styles.support, className].join(" ")}>
      <div className={styles.supportMeHere}>Support me here</div>
      <div className={styles.mediaParent}>
        <StateHover1
          twitter="/card.svg"
          elias="4149500120690030"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propColor="#abb2bf"
        />
        <StateHover1
          twitter="/bitcoin.svg"
          elias="3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propColor="#abb2bf"
        />
      </div>
    </div>
  );
};

export default Support;
