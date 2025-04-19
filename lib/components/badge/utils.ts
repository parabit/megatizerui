import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';

export const badgeVariant = {
	solid: 'solid',
	outline: 'outline',
} as const;

export const badgeColor = {
	muted: 'muted',
	success: 'success',
	warning: 'warning',
	primary: 'primary',
	secondary: 'secondary',
	info: 'info',
	error: 'error',
} as const;

export const badgeVariants = cva('badge', {
	variants: {
		variant: badgeVariant,
		color: badgeColor,
	},
	defaultVariants: {
		variant: 'solid',
		color: 'primary',
	},
});

export interface IBadge {
	className?: string;
	text?: string | number;
	variant?: keyof typeof badgeVariant;
	color?: keyof typeof badgeColor;
	children?: ReactNode;
}
