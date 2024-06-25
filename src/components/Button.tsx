import { FunctionComponent } from "react";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  return (
    <div className={[styles.button, className].join(" ")}>
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
        buttonText={`Live <~>`}
        propBackgroundColor="rgba(199, 120, 221, 0.2)"
        propBorder="1px solid #c778dd"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propPadding="8px 16px"
        propColor="#fff"
        propFontSize="16px"
      />
      <StateHoverTypeSecondary
        buttonText={`Demo |>`}
        propBackgroundColor="unset"
        propBorder="1px solid #abb2bf"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propPadding="8px 16px"
        propColor="#abb2bf"
        propFontSize="16px"
      />
      <StateHoverTypeSecondary buttonText={`Demo |>`} />
    </div>
  );
};

export default Button;
