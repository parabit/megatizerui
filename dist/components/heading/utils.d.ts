import { HTMLAttributes, ReactNode, RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';
export interface IHeading extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    ref?: RefObject<HTMLHeadingElement | null>;
    text?: string | number;
    className?: string;
    children?: ReactNode;
    level: "1" | "2" | "3" | "4" | "5" | "6";
}
export declare const headingVariants: (props?: ({
    variant?: "ghost" | "link" | "outline" | "solid" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
