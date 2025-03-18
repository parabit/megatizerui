import { HTMLAttributes, ReactNode, Ref } from 'react';

export interface IDiv extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<HTMLDivElement | null>;
	className?: string;
	children?: ReactNode;
}
