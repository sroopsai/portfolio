import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type FactType = {
  className?: string;
  description?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const Fact: FunctionComponent<FactType> = memo(
  ({ className = "", description, propColor }) => {
    const iLikeWinterStyle: CSSProperties = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    return (
      <div
        className={`flex-1 box-border flex flex-row items-start justify-start py-1.5 pr-1.5 pl-[7px] min-w-[198px] text-left text-base text-gray font-fira-code border-[1px] border-solid border-gray ${className}`}
      >
        <div className="relative" style={iLikeWinterStyle}>
          {description}
        </div>
      </div>
    );
  }
);

export default Fact;