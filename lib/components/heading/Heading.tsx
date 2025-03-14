import { createElement } from "react";
import { cn } from "../../utils";
import { IHeading, headingVariants } from "./utils";

export const Heading = ({ level, className, variant, text, children, ...props }: IHeading) => {
  return createElement(
    `h${level}`,
    { className: cn(headingVariants({ variant }), className), ...props },
    text || children
  );
};
