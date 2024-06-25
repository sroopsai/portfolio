import { FunctionComponent } from "react";
import StateDefault from "./StateDefault";
import StateHover from "./StateHover";
import styles from "./Input.module.css";

export type InputType = {
  className?: string;
};

const Input: FunctionComponent<InputType> = ({ className = "" }) => {
  return (
    <div className={[styles.input, className].join(" ")}>
      <StateDefault userName="Name" />
      <StateHover />
    </div>
  );
};

export default Input;
