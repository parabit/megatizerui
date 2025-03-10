import { HTMLAttributes, ReactNode, RefObject } from 'react';

export interface IDiv extends HTMLAttributes<HTMLDivElement> {
	ref?: RefObject<HTMLDivElement>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
}

export const Div = ({ children, ...props }: IDiv) => <div {...props}>{children}</div>;
