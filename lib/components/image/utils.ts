import { ImgHTMLAttributes, Ref, SyntheticEvent } from 'react';

import noimage from './noimage.svg';

export interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
	ref?: Ref<HTMLImageElement>;
	src?: string;
	alt?: string;
	className?: string;
}

export const getImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
	e.currentTarget.src = noimage.toString();
};
