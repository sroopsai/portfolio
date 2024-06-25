import { FunctionComponent } from "react";
import StateDefault from "./StateDefault";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import styles from "./Contacts.module.css";

export type ContactsType = {
  className?: string;
};

const Contacts: FunctionComponent<ContactsType> = ({ className = "" }) => {
  return (
    <div className={[styles.contacts, className].join(" ")}>
      <div className={styles.instanceParent}>
        <StateDefault
          userName="Name"
          nameWidth="unset"
          nameFlex="1"
          nameHeight="unset"
        />
        <StateDefault
          userName="Email"
          nameWidth="unset"
          nameFlex="1"
          nameHeight="unset"
        />
      </div>
      <StateDefault
        userName="Title"
        nameWidth="505px"
        nameFlex="unset"
        nameHeight="unset"
      />
      <StateDefault
        userName="Message"
        nameWidth="505px"
        nameFlex="unset"
        nameHeight="119px"
      />
      <StateHoverTypeSecondary
        buttonText="Send"
        propBackgroundColor="unset"
        propBorder="1px solid #c778dd"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propPadding="8px 16px"
        propColor="#fff"
        propFontSize="16px"
      />
    </div>
  );
};

export default Contacts;
