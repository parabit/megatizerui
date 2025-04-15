import { HTMLAttributes, ReactNode, Ref } from 'react';
import { cva } from 'class-variance-authority';

export enum EnumSpanVariants {
	default = 'span-default',
	muted = 'span-muted',
	primary = 'span-primary',
	secondary = 'span-secondary',
	error = 'span-error',
	success = 'span-success',
}

export interface ISpan extends HTMLAttributes<HTMLHeadingElement> {
	ref?: Ref<HTMLSpanElement>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
	variant?: keyof typeof EnumSpanVariants;
}

export const spanVariants = cva('m-0 p-0', {
	variants: {
		variant: EnumSpanVariants,
		defaultVariants: {
			variant: 'default',
		},
	},
});
