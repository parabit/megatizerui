import { IImage } from '../image/utils';
export interface IAvatar extends IImage {
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    online?: boolean;
}
export declare const avatarSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
