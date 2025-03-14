import { cn } from "../../utils";
import { buttonVariants, IButton } from "./utils";

export const Button = (props: IButton) => {
  const { ref, className, text, children, variant, iconLeft, ...rest } = props;

  return (
    <button ref={ref} className={cn(buttonVariants({ variant }), className)} {...rest}>
      {iconLeft}
      {text || children}
    </button>
  );
};
