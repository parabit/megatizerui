import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { cva } from 'class-variance-authority';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement | null>;
	className?: string;
	text?: string;
	variant?: keyof typeof EnumButtonVariants;
	color?: keyof typeof EnumButtonColors;
	size?: keyof typeof EnumButtonSizes;
	iconLeft?: ReactNode;
	loading?: boolean;
	children?: ReactNode;
}

export enum EnumButtonVariants {
	ghost = 'ghost',
	solid = 'solid',
	outline = 'outline',
}

export enum EnumButtonColors {
	primary = 'primary',
	secondary = 'secondary',
	muted = 'muted',
}

export enum EnumButtonSizes {
	md = 'md',
	lg = 'lg',
}

export const buttonVariants = cva('button', {
	variants: {
		variant: EnumButtonVariants,
		color: EnumButtonColors,
		size: EnumButtonSizes,
	},
	defaultVariants: {
		variant: 'solid',
		color: 'primary',
		size: 'md',
	},
});
