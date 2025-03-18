import { HTMLAttributes, ReactNode, RefObject } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface IHeading
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	ref?: RefObject<HTMLHeadingElement | null>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
	level: '1' | '2' | '3' | '4' | '5' | '6';
}

export const headingVariants = cva('text-text-light dark:text-text-dark p-0 m-0', {
	variants: {
		variant: {
			h1: 'text-4xl',
			h2: 'text-3xl leading-10',
			h3: 'text-2xl',
			h4: 'text-xl',
			h5: 'text-lg',
			h6: 'text-base',
		},
	},
});
