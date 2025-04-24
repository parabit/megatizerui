import { InputHTMLAttributes, ReactNode, Ref, RefObject } from 'react';

export const inputVariant = {
	primary: 'primary',
	secondary: 'secondary',
} as const;

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	className?: string;
	isInvalid?: boolean;
	rightIcon?: ReactNode;
	rightElement?: ReactNode;
	variant?: keyof typeof inputVariant;
}

export interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	isInvalid?: boolean;
	className?: string;
	variant?: keyof typeof inputVariant;
}

export interface IFileInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: RefObject<HTMLInputElement | null>;
	text?: string;
	children?: ReactNode;
	accept?: string;
}
