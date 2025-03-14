import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { NavLinkProps } from "react-router";

export interface ILink extends NavLinkProps, VariantProps<typeof linkVariants> {
  text?: string;
  className?: string;
  children?: ReactNode;
}

export const linkVariants = cva("cursor-pointer hover:underline", {
  variants: {
    variant: {
      default: "text-primary-light dark:text-primary-dark hover:text-primary-light dark:hover:text-primary-dark",
      muted: "text-muted-light dark:text-muted-dark hover:text-muted-light/60 hover:dark:text-muted-dark/60",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
