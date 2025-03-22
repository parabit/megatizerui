import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface IButton
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	ref?: Ref<HTMLButtonElement | null>;
	className?: string;
	text?: string;
	iconLeft?: ReactNode;
	children?: ReactNode;
}

export enum EnumButtonVariants {
	ghost = 'inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-primary-light hover:bg-primary-light/10 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-dark dark:hover:bg-primary-dark/30',
	link = 'text-light dark:text-dark hover:underline hover:text-primary-light dark:hover:text-primary-dark',
	outline = `py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 
		dark:text-neutral-400 hover:text-primary-light dark:hover:text-primary-dark dark:active:text-primary-light dark:focus:text-primary-light 
		dark:border-neutral-700 hover:border-primary-light dark:hover:border-primary-dark dark:focus:border-primary-dark
		focus:outline-hidden focus:border-primary-light focus:text-primary-light dark:focus:text-primary-light 
		active:text-primary-light 
		disabled:opacity-50 disabled:pointer-events-none`,
	solid = 'rounded-lg border border-transparent bg-primary-light dark:bg-primary-dark text-sm font-medium !text-white hover:bg-primary-light/80 dark:hover:bg-primary-dark/80',
}

export const buttonVariants = cva(
	'py-3 px-6 m-0 inline-flex cursor-pointer items-center justify-center gap-x-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: EnumButtonVariants,
		},
		defaultVariants: {
			variant: 'solid',
		},
	},
);
