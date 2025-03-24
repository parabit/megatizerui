import { HTMLAttributes, ReactNode, Ref } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const headingLevels = {
	'1': 'text-4xl',
	'2': 'text-3xl leading-10',
	'3': 'text-2xl',
	'4': 'text-xl',
	'5': 'text-lg',
	'6': 'text-base',
};

export interface IHeading
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	ref?: Ref<HTMLHeadingElement | null>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
	level: keyof typeof headingLevels;
}

export const headingVariants = cva('text-text-light dark:text-text-dark p-0 m-0', {
	variants: {
		level: headingLevels,
	},
});
