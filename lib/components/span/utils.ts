import { HTMLAttributes, ReactNode, Ref } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const spanVariantsDictionary = {
	muted: '!text-muted-light dark:!text-muted-dark',
	primary: '!text-primary',
	error: '!text-error',
	success: '!text-success',
};

export interface ISpan
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof spanVariants> {
	ref?: Ref<HTMLSpanElement>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
}

export const spanVariants = cva('text-text-light dark:text-text-dark m-0 p-0', {
	variants: {
		variant: spanVariantsDictionary,
	},
});
