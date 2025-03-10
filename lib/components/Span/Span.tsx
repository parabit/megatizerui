import { HTMLAttributes, ReactNode, RefObject } from 'react';

interface ISpan extends HTMLAttributes<HTMLSpanElement> {
	ref?: RefObject<HTMLSpanElement>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
}

export const Span = ({ text, children, ...props }: ISpan) => (
	<span {...props}>{text || children}</span>
);
