import { ButtonHTMLAttributes, ReactNode, RefObject } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: RefObject<HTMLButtonElement>;
	className?: string;
	text?: string;
	children?: ReactNode;
}

export const Button = ({ text, children, ...props }: IButton) => (
	<button {...props}>{text || children}</button>
);
