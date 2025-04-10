import { HTMLAttributes, ReactNode, Ref } from 'react';

export const headingLevels = ['1', '2', '3', '4', '5', '6'];

export interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
	ref?: Ref<HTMLHeadingElement | null>;
	text?: string | number;
	className?: string;
	children?: ReactNode;
	level: '1' | '2' | '3' | '4' | '5' | '6';
}
