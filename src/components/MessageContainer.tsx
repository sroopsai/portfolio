import { FunctionComponent, memo } from "react";
import StateHover1 from "./StateHover1";

export type MessageContainerType = {
  className?: string;
};

const MessageContainer: FunctionComponent<MessageContainerType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`flex flex-col items-start justify-start py-3.5 px-[15px] gap-[16px] text-left text-base text-white font-fira-code border-[1px] border-solid border-gray ${className}`}
      >
        <div className="relative font-semibold">Message me here</div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
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
  }
);

export default MessageContainer;