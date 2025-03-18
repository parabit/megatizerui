import { HTMLAttributes, ReactNode, RefObject } from 'react';
export interface IDiv extends HTMLAttributes<HTMLDivElement> {
    ref?: RefObject<HTMLDivElement | null>;
    className?: string;
    children?: ReactNode;
}
