import { cn } from '../../utils';
import { getImageError, IImage } from './utils';

export const Image = ({ src, alt, className, ...props }: IImage) => (
	<img
		className={cn('', className)}
		src={src}
		alt={alt || src}
		onError={getImageError}
		{...props}
	/>
);
