import { FunctionComponent } from "react";
import StateHover1 from "./StateHover1";
import styles from "./Media1.module.css";

export type Media1Type = {
  className?: string;
};

const Media1: FunctionComponent<Media1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.media, className].join(" ")}>
      <StateHover1
        twitter="/twitter.svg"
        elias="@elias"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propColor="#abb2bf"
      />
      <StateHover1 twitter="/twitter1.svg" elias="@elias" />
    </div>
  );
};

export default Media1;
