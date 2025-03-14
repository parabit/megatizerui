import { ReactNode } from "react";

import { cn } from "../../utils";
import { Div } from "../div";
import { Span } from "../span";

interface ISwitch {
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
  iconChecked?: ReactNode;
  iconUnChecked?: ReactNode;
}

export const Switch = (props: ISwitch) => (
  <Div
    className={cn(
      `h-6 w-12`,
      "relative flex cursor-pointer items-center overflow-hidden rounded-full",
      "transition-all duration-200",
      "bg-neutral-300 dark:bg-neutral-600",
      { "!bg-primary": props.value },
      props.className
    )}
    onClick={() => props.onChange(!props.value)}
  >
    {props?.iconChecked ? <Div className="absolute left-2">{props?.iconChecked}</Div> : null}
    {props?.iconUnChecked ? <Div className="absolute right-2">{props?.iconUnChecked}</Div> : null}

    <Span
      className={cn(
        `h-6 w-6`,
        "z-1 flex rounded-full",
        "shadow-lg shadow-black/50",
        "transition-all duration-200",
        "border border-neutral-300 dark:border-neutral-600",
        "bg-white dark:bg-white",
        { "!ml-6 !border-primary": props.value }
      )}
    />
  </Div>
);
