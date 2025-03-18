import { IImage } from '../image/utils';

export interface IAvatar extends IImage {
	className?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	online?: boolean;
}

export const avatarSizes = {
	xs: 'size-8',
	sm: 'size-9.5',
	md: 'size-11',
	lg: 'size-15.5',
	xl: 'size-20',
};
