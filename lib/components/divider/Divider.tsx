import { cn } from "../../utils";

export const Divider = ({ className }: { className?: string }) => (
  <hr className={cn("border-border-light dark:border-border-dark", className)} />
);
