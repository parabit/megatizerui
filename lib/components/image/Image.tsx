import { cn } from '../../utils';
import imagePlaceholder from './noimage.svg';
import { IImage } from './utils';

export const Image = ({ src, alt, className, ...props }: IImage) => (
	<img
		className={cn('', className)}
		src={src && src?.length > 0 ? src : imagePlaceholder.toString()}
		alt={alt || src}
		{...props}
	/>
);
