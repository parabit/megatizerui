import { ImgHTMLAttributes, Ref, SyntheticEvent } from 'react';
export interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
    ref?: Ref<HTMLImageElement>;
    src?: string;
    alt?: string;
    className?: string;
}
export declare const getImageError: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
