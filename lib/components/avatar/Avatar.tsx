import { cn } from '../../utils';
import { Div } from '../div';
import { Image } from '../image';
import { avatarVariants, IAvatar } from './utils';

export const Avatar = ({ className, size, online, ...props }: IAvatar) => (
	<Div className="flex items-start">
		<Div className="relative">
			<Image className={cn(avatarVariants({ size }), className)} {...props} />
			{online ? <Div className={cn('avatar-badge', size)} /> : null}
		</Div>
	</Div>
);
