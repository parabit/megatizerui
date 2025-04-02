import { cva, VariantProps } from 'class-variance-authority';

export interface IBadge extends VariantProps<typeof badgeVariants> {
	className?: string;
	text?: string | number;
	children?: string | number;
}

export enum EnumBadgeVariants {
	muted = 'bg-neutral-600/20 text-neutral-500 dark:bg-neutral-300/30 dark:text-neutral-200',
	success = 'bg-success-600/30 text-success-600 dark:bg-success-600/30 dark:text-success-400',
	warning = 'bg-warning-600/30 text-warning-600 dark:bg-warning-600/60 dark:text-warning-300',
	primary = 'bg-reaction-500/30 text-reaction-500 dark:bg-reaction-500/80 dark:text-white/80',
	secondary = 'bg-action-500/30 text-action-500 dark:bg-action-500/80 dark:text-white/80',
	info = 'bg-info-600/30 text-info-300 dark:bg-info-600/60 dark:text-white/80',
	error = 'bg-negative-600/30 text-negative-600 dark:bg-negative-600/60 dark:text-negative-300',
}

export const badgeVariants = cva('pb-1 pt-0 px-3 rounded-lg flex items-center justify-center', {
	variants: {
		variant: EnumBadgeVariants,
	},
	defaultVariants: {
		variant: 'muted',
	},
});
