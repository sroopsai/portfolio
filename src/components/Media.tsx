import { FunctionComponent, memo } from "react";

export type MediaType = {
  className?: string;
};

const Media: FunctionComponent<MediaType> = memo(({ className = "" }) => {
  return (
    <div
      className={`bg-background flex flex-col items-start justify-start gap-[8px] ${className}`}
    >
      <div className="w-8 flex flex-row items-start justify-start py-0 px-[15px] box-border">
        <img
          className="h-[191px] w-px relative object-contain"
          loading="lazy"
          alt=""
          src="/line-10-stroke.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <img
          className="w-8 h-8 relative"
          loading="lazy"
          alt=""
          src="/github.svg"
        />
        <img
          className="w-8 h-8 relative"
          loading="lazy"
          alt=""
          src="/dribble.svg"
        />
        <img
          className="w-8 h-8 relative"
          loading="lazy"
          alt=""
          src="/figma.svg"
        />
      </div>
    </div>
  );
});

export default Media;
