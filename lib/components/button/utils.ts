import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { cva } from 'class-variance-authority';

export const buttonVariant = {
	solid: 'solid',
	outline: 'outline',
	ghost: 'ghost',
} as const;

export const buttonColor = {
	primary: 'primary',
	secondary: 'secondary',
	muted: 'muted',
} as const;

export const buttonSize = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
} as const;

export const buttonVariants = cva('button', {
	variants: {
		variant: buttonVariant,
		color: buttonColor,
		size: buttonSize,
	},
	defaultVariants: {
		variant: 'solid',
		color: 'primary',
		size: 'sm',
	},
});

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement | null>;
	className?: string;
	text?: string;
	variant?: keyof typeof buttonVariant;
	color?: keyof typeof buttonColor;
	size?: keyof typeof buttonSize;
	iconLeft?: ReactNode;
	loading?: boolean;
	children?: ReactNode;
}
