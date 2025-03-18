import { HTMLAttributes, ReactNode, RefObject } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface ISpan
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof spanVariants> {
	ref?: RefObject<HTMLHeadingElement>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
}

export const spanVariants = cva('text-text-light dark:text-text-dark m-0 p-0', {
	variants: {
		variant: {
			muted: 'text-muted-light dark:text-muted-dark',
			primary: 'text-primary',
			error: 'text-error',
			success: 'text-success',
		},
	},
});
