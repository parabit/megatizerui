import { HTMLAttributes, ReactNode, RefObject } from 'react';

import { cn } from '../../utils';

type TypeTextVariants = 'default' | 'muted' | 'error' | 'success';

const textVariants = {
	default: 'text-black dark:text-white',
	muted: 'text-muted-light dark:text-muted-dark',
	error: 'text-error',
	success: 'text-success',
};

interface ISpan extends HTMLAttributes<HTMLSpanElement> {
	ref?: RefObject<HTMLSpanElement>;
	text?: string | number;
	className?: string;
	variant?: TypeTextVariants;
	children?: ReactNode;
}

export const Span = ({ variant = 'default', text, children, ...props }: ISpan) => (
	<span className={cn(textVariants[variant])} {...props}>
		{text || children}
	</span>
);
