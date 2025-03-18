import { HTMLAttributes, ReactNode, RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';
export interface ISpan extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof spanVariants> {
    ref?: RefObject<HTMLHeadingElement>;
    text?: string | number;
    className?: string;
    children?: ReactNode;
}
export declare const spanVariants: (props?: ({
    variant?: "error" | "muted" | "primary" | "success" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
