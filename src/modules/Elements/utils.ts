import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { NavLinkProps } from 'react-router';

export interface ILink extends NavLinkProps, VariantProps<typeof linkVariants> {
	text?: string;
	className?: string;
	children?: ReactNode;
}

export const linkVariants = cva('cursor-pointer hover:underline', {
	variants: {
		variant: {
			default:
				'text-brand-blue dark:text-brand-blue hover:text-brand-pink dark:hover:text-brand-pink',
			muted: 'text-muted-light dark:text-muted-dark hover:text-muted-light/60 hover:dark:text-muted-dark/60',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});
