import { SVGProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface ISpinner extends SVGProps<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
	className?: string;
}

export const spinnerVariants = cva('w-10 animate-spin', {
	variants: {
		variant: {
			muted: 'fill-gray-500',
			primary: 'fill-primary',
		},
	},
	defaultVariants: {
		variant: 'muted',
	},
});
