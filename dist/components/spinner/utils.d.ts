import { SVGProps } from 'react';
import { VariantProps } from 'class-variance-authority';
export interface ISpinner extends SVGProps<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
    className?: string;
}
export declare const spinnerVariants: (props?: ({
    variant?: "muted" | "primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
