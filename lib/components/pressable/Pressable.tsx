import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

import { cn } from '../../utils';

interface IPressable extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement>;
	className?: string;
	children?: ReactNode;
}

export const Pressable = ({ className, children, ...props }: IPressable) => (
	<button className={cn('inline-flex cursor-pointer', className)} {...props}>
		{children}
	</button>
);
