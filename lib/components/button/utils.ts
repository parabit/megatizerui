import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { cva } from 'class-variance-authority';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement | null>;
	className?: string;
	text?: string;
	variant?: EnumButtonVariants;
	color?: EnumButtonColors;
	iconLeft?: ReactNode;
	children?: ReactNode;
}

export enum EnumButtonVariants {
	ghost = 'ghost',
	outline = 'outline',
	solid = 'solid',
}

export enum EnumButtonColors {
	primary = 'primary',
	secondary = 'secondary',
	muted = 'muted',
}

export const buttonVariants = cva('button', {
	variants: {
		variant: EnumButtonVariants,
		color: EnumButtonColors,
	},
	defaultVariants: {
		variant: 'solid',
		color: 'primary',
	},
});
