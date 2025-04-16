import { SVGProps } from 'react';
import { cva } from 'class-variance-authority';

export interface ISpinner extends SVGProps<SVGSVGElement> {
	className?: string;
	variant?: keyof typeof EnumSpinnerVariants;
	size?: keyof typeof EnumSpinnerSizes;
}

export enum EnumSpinnerVariants {
	default = 'default',
	white = 'white',
	primary = 'primary',
	secondary = 'secondary',
	muted = 'muted',
}

export enum EnumSpinnerSizes {
	md = 'md',
	sm = 'sm',
}

export const spinnerVariants = cva('spinner', {
	variants: {
		variant: EnumSpinnerVariants,
		size: EnumSpinnerSizes,
	},
	defaultVariants: {
		variant: 'default',
		size: 'md',
	},
});
