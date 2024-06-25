import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateHover1 from "./StateHover1";
import styles from "./MessageContainer.module.css";

export type MessageContainerType = {
  className?: string;
  username?: string;
  emailAddress?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const MessageContainer: FunctionComponent<MessageContainerType> = ({
  className = "",
  username,
  emailAddress,
  propLeft,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.messageMeHereParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.messageMeHere}>Message me here</div>
      <div className={styles.instanceParent}>
        <StateHover1
          twitter="/discord.svg"
          elias="!Elias#3519"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propColor="#abb2bf"
        />
        <StateHover1
          twitter="/email.svg"
          elias="elias@elias.me"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propColor="#abb2bf"
        />
      </div>
    </div>
  );
};

export default MessageContainer;
