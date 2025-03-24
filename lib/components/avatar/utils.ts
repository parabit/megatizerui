import { cva, VariantProps } from 'class-variance-authority';

import { IImage } from '../image/utils';

export enum EnumAvatarSizes {
	xs = 'size-8',
	sm = 'size-9.5',
	md = 'size-11',
	lg = 'size-15.5',
	xl = 'size-20',
}

export enum EnumAvatarBadges {
	xs = 'w-2 h-2 bottom-0.25 right-0.25',
	sm = 'w-2.5 h-2.5 bottom-0.25 right-0.25',
	md = 'w-3.5 h-3.5 bottom-0.25 right-0.25',
	lg = 'w-4.5 h-4.5 bottom-0.5 right-0.5',
	xl = 'w-5 h-5 bottom-0.5 right-0.5',
}

export interface IAvatar extends IImage, VariantProps<typeof avatarVariants> {
	className?: string;
	online?: boolean;
}

export const avatarVariants = cva('rounded-full', {
	variants: {
		size: EnumAvatarSizes,
		badge: EnumAvatarBadges,
	},
	defaultVariants: {
		size: 'md',
	},
});
