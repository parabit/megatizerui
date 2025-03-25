import { ImgHTMLAttributes, Ref } from 'react';

export interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
	ref?: Ref<HTMLImageElement>;
	src?: string;
	alt?: string;
	className?: string;
}
