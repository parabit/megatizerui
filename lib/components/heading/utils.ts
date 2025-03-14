import { HTMLAttributes, ReactNode, RefObject } from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface IHeading extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  ref?: RefObject<HTMLHeadingElement | null>;
  text?: string | number;
  className?: string;
  children?: ReactNode;
  level: "1" | "2" | "3" | "4" | "5" | "6";
}

export const headingVariants = cva(
  "py-3 px-6 m-0 inline-flex cursor-pointer items-center justify-center gap-x-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost:
          "inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-primary-light hover:bg-primary-light/10 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-dark dark:hover:bg-primary-dark/30",
        link: "text-light dark:text-dark hover:underline hover:text-primary-light dark:hover:text-primary-dark",
        outline:
          "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-primary-light hover:text-primary-light focus:outline-hidden focus:border-primary-light focus:text-primary-light active:text-primary-light disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-primary-dark dark:hover:border-primary-dark dark:focus:text-primary-light dark:active:text-primary-light dark:focus:border-primary-dark",
        solid:
          "rounded-lg border border-transparent bg-primary-light dark:bg-primary-dark text-sm font-medium text-white hover:bg-primary-light/60 dark:hover:bg-primary-dark/60",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);
