import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { VariantProps } from 'class-variance-authority';
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    ref?: Ref<HTMLButtonElement | null>;
    className?: string;
    text?: string;
    iconLeft?: ReactNode;
    children?: ReactNode;
}
export type TypeButtonVariants = 'ghost' | 'link' | 'outline' | 'solid';
export declare const buttonVariants: (props?: ({
    variant?: "link" | "ghost" | "outline" | "solid" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
