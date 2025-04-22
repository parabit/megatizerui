import { cva } from 'class-variance-authority';

import { IImage } from '../image/utils';

export const avatarSize = {
	xs: 'xs',
	sm: 'sm',
	md: 'md',
	lg: 'lg',
	xl: 'xl',
} as const;

export const avatarVariants = cva('avatar', {
	variants: {
		size: avatarSize,
	},
	defaultVariants: {
		size: 'md',
	},
});

export interface IAvatar extends IImage {
	className?: string;
	online?: boolean;
	size?: keyof typeof avatarSize;
}
