import { HTMLAttributes, ReactNode, Ref } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const spanVariantsDictionary = {
	default: 'text-text-light dark:text-text-dark',
	muted: 'text-muted-light dark:text-muted-dark',
	primary: 'text-reaction-500',
	secondary: 'text-action-500',
	error: 'text-error',
	success: 'text-success',
};

export interface ISpan
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof spanVariants> {
	ref?: Ref<HTMLSpanElement>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
}

export const spanVariants = cva('m-0 p-0', {
	variants: {
		variant: spanVariantsDictionary,
		defaultVariants: {
			variant: 'default',
		},
	},
});
