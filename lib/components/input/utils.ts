import { InputHTMLAttributes, ReactNode, Ref, RefObject } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	className?: string;
	isInvalid?: boolean;
	rightIcon?: ReactNode;
}

export interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	isInvalid?: boolean;
	className?: string;
}

export interface IFileInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: RefObject<HTMLInputElement | null>;
	text?: string;
	children?: ReactNode;
	accept?: string;
}
