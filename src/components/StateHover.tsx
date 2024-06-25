import { FunctionComponent } from "react";
import styles from "./StateHover.module.css";

export type StateHoverType = {
  className?: string;
};

const StateHover: FunctionComponent<StateHoverType> = ({ className = "" }) => {
  return (
    <div className={[styles.statehover, className].join(" ")}>
      <div className={styles.nameWrapper}>
        <div className={styles.name}>Name</div>
      </div>
    </div>
  );
};

export default StateHover;
