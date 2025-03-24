import { cn } from '../../utils';
import { Div } from '../div';
import { Image } from '../image';
import { avatarVariants, IAvatar } from './utils';

export const Avatar = ({ className, size = 'md', online, ...props }: IAvatar) => {
	return (
		<Div className="flex items-start">
			<Div className="relative">
				<Image className={cn(avatarVariants({ size }), className)} {...props} />
				{online ? (
					<Div
						className={cn(
							'bg-green-600 absolute rounded-full',
							avatarVariants({ badge: size }),
						)}
					/>
				) : null}
			</Div>
		</Div>
	);
};
