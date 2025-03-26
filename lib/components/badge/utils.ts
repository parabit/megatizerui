import { cva, VariantProps } from 'class-variance-authority';

export interface IBadge extends VariantProps<typeof badgeVariants> {
	className?: string;
	text?: string | number;
	children?: string | number;
}

export enum EnumBadgeVariants {
	muted = 'bg-neutral-600/20 text-neutral-500 dark:bg-neutral-300/30 dark:text-neutral-200',
	success = 'bg-green-600/30 text-green-600 dark:bg-green-600/30 dark:text-green-400',
	warning = 'bg-yellow-600/30 text-yellow-600 dark:bg-yellow-600/60 dark:text-yellow-300',
	primary = 'bg-primary/30 text-primary dark:bg-primary/80 dark:text-white',
	info = 'bg-sky-600/30 text-sky-600 dark:bg-sky-600/60 dark:text-sky-200',
	error = 'bg-red-600/30 text-red-600 dark:bg-red-600/60 dark:text-red-300',
}

export const badgeVariants = cva('pb-1 pt-0.5 px-3 rounded-lg flex items-center justify-center', {
	variants: {
		variant: EnumBadgeVariants,
	},
	defaultVariants: {
		variant: 'muted',
	},
});
