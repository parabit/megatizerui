import { HTMLAttributes, ReactNode, RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';
export interface IHeading extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    ref?: RefObject<HTMLHeadingElement | null>;
    text?: string | number;
    className?: string;
    children?: ReactNode;
    level: '1' | '2' | '3' | '4' | '5' | '6';
}
export declare const headingVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
