import { cn } from "../../utils";
import { Div, IDiv } from "../div";

export const Card = ({ className, children, ...props }: IDiv) => (
  <Div
    className={cn(
      "rounded-xl p-4 flex flex-col",
      "bg-card-bg-light dark:bg-card-bg-dark",
      "border-border-light dark:border-border-dark border",
      className
    )}
    {...props}
  >
    {children}
  </Div>
);
