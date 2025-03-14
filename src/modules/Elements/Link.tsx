import { NavLink } from "react-router";
import { cn } from "@lib";
import { ILink, linkVariants } from "./utils";

export const Link = ({ className, text, children, variant, ...props }: ILink) => (
  <NavLink className={cn(linkVariants({ variant }), className)} viewTransition {...props}>
    {text || children}
  </NavLink>
);
