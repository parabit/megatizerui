import { cn } from "../../utils";
import { ISpan, spanVariants } from "./utils";

export const Span = ({ className, text, variant, children, ...props }: ISpan) => (
  <span className={cn(spanVariants({ variant }), className)} {...props}>
    {text || children}
  </span>
);
