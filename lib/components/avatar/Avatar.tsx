import { cn } from '../../utils';
import { Image } from '../image';
import { avatarSizes, IAvatar } from './utils';

export const Avatar = ({ className, size = 'md', ...props }: IAvatar) => {
	return <Image className={cn('rounded-full', avatarSizes[size], className)} {...props} />;
};
